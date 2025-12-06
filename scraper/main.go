package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"strings"
	"sync"
	"time"

	md "github.com/JohannesKaufmann/html-to-markdown"
	"github.com/PuerkitoBio/goquery"
)

const (
	BaseURL   = "https://baritone.leijurv.com/"
	IndexPage = "allclasses-noframe.html"
	OutputDir = "../docs"
	MaxWorkers = 5
)

func main() {
	fmt.Println("Starting Baritone Docs Scraper...")

	// Create output directory
	if err := os.MkdirAll(OutputDir, 0755); err != nil {
		log.Fatalf("Failed to create output directory: %v", err)
	}

	// 1. Fetch the index page
	indexURL := BaseURL + IndexPage
	resp, err := http.Get(indexURL)
	if err != nil {
		log.Fatalf("Failed to fetch index page: %v", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != 200 {
		log.Fatalf("Failed to fetch index page, status: %d", resp.StatusCode)
	}

	doc, err := goquery.NewDocumentFromReader(resp.Body)
	if err != nil {
		log.Fatalf("Failed to parse index page: %v", err)
	}

	// 2. Collect all links
	var links []string
	doc.Find("a").Each(func(i int, s *goquery.Selection) {
		href, exists := s.Attr("href")
		if exists {
			links = append(links, href)
		}
	})

	fmt.Printf("Found %d pages to process.\n", len(links))

	// 3. Process links with workers
	var wg sync.WaitGroup
	jobs := make(chan string, len(links))

	// Start workers
	for w := 0; w < MaxWorkers; w++ {
		wg.Add(1)
		go worker(w, jobs, &wg)
	}

	// Add jobs
	for _, link := range links {
		jobs <- link
	}
	close(jobs)

	// Wait for completion
	wg.Wait()
	fmt.Println("Scraping completed.")
}

func worker(id int, jobs <-chan string, wg *sync.WaitGroup) {
	defer wg.Done()

	converter := md.NewConverter("", true, nil)

	for link := range jobs {
		processPage(link, converter)
		// Be nice to the server
		time.Sleep(100 * time.Millisecond)
	}
}

func processPage(relPath string, converter *md.Converter) {
	fullURL := BaseURL + relPath
	
	// Determine output path
	// relPath is like "baritone/api/Settings.html"
	// output like "../docs/baritone/api/Settings.md"
	
	cleanPath := strings.TrimSuffix(relPath, ".html")
	outPath := filepath.Join(OutputDir, cleanPath+".md")

	// Ensure directory exists
	outDir := filepath.Dir(outPath)
	if err := os.MkdirAll(outDir, 0755); err != nil {
		log.Printf("Error creating dir %s: %v", outDir, err)
		return
	}

	// Fetch page
	resp, err := http.Get(fullURL)
	if err != nil {
		log.Printf("Error fetching %s: %v", fullURL, err)
		return
	}
	defer resp.Body.Close()

	if resp.StatusCode != 200 {
		log.Printf("Error fetching %s (Status %d)", fullURL, resp.StatusCode)
		return
	}

	doc, err := goquery.NewDocumentFromReader(resp.Body)
	if err != nil {
		log.Printf("Error parsing %s: %v", fullURL, err)
		return
	}

	// Clean up HTML before converting
	// Remove navbars
	doc.Find(".topNav, .bottomNav, .subNav, .skipNav").Remove()
	// Remove scripts
	doc.Find("script").Remove()
	
	// Select main content if possible, usually it's the body after cleanup in Javadocs
	// But let's verify if .contentContainer or .header exists
	// Typically: .header (package info), .contentContainer (class details)
	
	// Let's take the body, but after removing navs it should be mostly content.
	// Another good strategy for javadoc: select .contentContainer + .description + .summary + .details
	// But simply cleaning and taking body is often robust enough.
	
	markdown := converter.Convert(doc.Selection)
	// if err != nil {
	// 	log.Printf("Error converting %s: %v", fullURL, err)
	// 	return
	// }

	// Add frontmatter or title if needed. 
	// The markdown converter will turn <h1>Title</h1> into # Title.

	// Write to file
	if err := os.WriteFile(outPath, []byte(markdown), 0644); err != nil {
		log.Printf("Error writing %s: %v", outPath, err)
		return
	}

	fmt.Printf("Processed: %s\n", relPath)
}
