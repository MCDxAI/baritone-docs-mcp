IPathFinder (baritone 1.2.15 API)

baritone.api.pathing.calc

## Interface IPathFinder

- * * *





```
public interface IPathFinder
```


Generic path finder interface


- ### Method Summary

All Methods[Instance Methods](javascript:show(2);)[Abstract Methods](javascript:show(4);)Modifier and TypeMethod and Description`java.util.Optional<IPath>``bestPathSoFar()`

The best path so far, according to the most forgiving coefficient heuristic (the reason being that that path is
most likely to represent the true shape of the path to the goal, assuming it's within a possible cost heuristic.

`PathCalculationResult``calculate(long primaryTimeout,
           long failureTimeout)`

Calculate the path in full.

`Goal``getGoal()``boolean``isFinished()`

Intended to be called concurrently with calculatePath from a different thread to tell if it's finished yet

`java.util.Optional<IPath>``pathToMostRecentNodeConsidered()`

Called for path rendering.

- ### Method Detail



  - #### getGoal



    ```
    Goal getGoal()
    ```


  - #### calculate



    ```
    PathCalculationResult calculate(long primaryTimeout,
                                    long failureTimeout)
    ```


    Calculate the path in full. Will take several seconds.
    Parameters:`primaryTimeout` \- If a path is found, the path finder will stop after this amount of time`failureTimeout` \- If a path isn't found, the path finder will continue for this amount of timeReturns:The final path

  - #### isFinished



    ```
    boolean isFinished()
    ```


    Intended to be called concurrently with calculatePath from a different thread to tell if it's finished yet
    Returns:Whether or not this finder is finished

  - #### pathToMostRecentNodeConsidered



    ```
    java.util.Optional<IPath> pathToMostRecentNodeConsidered()
    ```


    Called for path rendering. Returns a path to the most recent node popped from the open set and considered.
    Returns:The temporary path

  - #### bestPathSoFar



    ```
    java.util.Optional<IPath> bestPathSoFar()
    ```


    The best path so far, according to the most forgiving coefficient heuristic (the reason being that that path is
     most likely to represent the true shape of the path to the goal, assuming it's within a possible cost heuristic.
     That's almost always a safe assumption, but in the case of a nearly impossible path, it still works by providing
     a theoretically plausible but practically unlikely path)
    Returns:The temporary path