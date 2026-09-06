ICachedWorld (baritone 1.2.15 API)

baritone.api.cache

## Interface ICachedWorld

- * * *





```
public interface ICachedWorld
```

Since:9/24/2018

- ### Method Summary

All Methods[Instance Methods](javascript:show(2);)[Abstract Methods](javascript:show(4);)Modifier and TypeMethod and Description`java.util.ArrayList<net.minecraft.util.math.BlockPos>``getLocationsOf(java.lang.String block,
                int maximum,
                int centerX,
                int centerZ,
                int maxRegionDistanceSq)`

Scans the cached chunks for location of the specified special block.

`ICachedRegion``getRegion(int regionX,
           int regionZ)`

Returns the region at the specified region coordinates

`boolean``isCached(int blockX,
          int blockZ)`

Returns whether or not the block at the specified X and Z coordinates
is cached in this world.

`void``queueForPacking(net.minecraft.world.chunk.Chunk chunk)`

Queues the specified chunk for packing.

`void``reloadAllFromDisk()`

Reloads all of the cached regions in this world from disk.

`void``save()`

Saves all of the cached regions in this world to disk.

- ### Method Detail



  - #### getRegion



    ```
    ICachedRegion getRegion(int regionX,
                            int regionZ)
    ```


    Returns the region at the specified region coordinates
    Parameters:`regionX` \- The region X coordinate`regionZ` \- The region Z coordinateReturns:The region located at the specified coordinates

  - #### queueForPacking



    ```
    void queueForPacking(net.minecraft.world.chunk.Chunk chunk)
    ```


    Queues the specified chunk for packing. This entails reading the contents
     of the chunk, then packing the data into the 2-bit format, and storing that
     in this cached world.
    Parameters:`chunk` \- The chunk to pack and store

  - #### isCached



    ```
    boolean isCached(int blockX,
                     int blockZ)
    ```


    Returns whether or not the block at the specified X and Z coordinates
     is cached in this world.
    Parameters:`blockX` \- The block X coordinate`blockZ` \- The block Z coordinateReturns:Whether or not the specified XZ location is cached

  - #### getLocationsOf



    ```
    java.util.ArrayList<net.minecraft.util.math.BlockPos> getLocationsOf(java.lang.String block,
                                                                         int maximum,
                                                                         int centerX,
                                                                         int centerZ,
                                                                         int maxRegionDistanceSq)
    ```


    Scans the cached chunks for location of the specified special block. The
     information that is returned by this method may not be up to date, because
     older cached chunks can contain data that is much more likely to have changed.
    Parameters:`block` \- The special block to search for`maximum` \- The maximum number of position results to receive`centerX` \- The x block coordinate center of the search`centerZ` \- The z block coordinate center of the search`maxRegionDistanceSq` \- The maximum region distance, squaredReturns:The locations found that match the special block

  - #### reloadAllFromDisk



    ```
    void reloadAllFromDisk()
    ```


    Reloads all of the cached regions in this world from disk. Anything that is not saved
     will be lost. This operation does not execute in a new thread by default.


  - #### save



    ```
    void save()
    ```


    Saves all of the cached regions in this world to disk. This operation does not execute
     in a new thread by default.