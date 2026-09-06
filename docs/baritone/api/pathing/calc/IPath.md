IPath (baritone 1.2.15 API)

baritone.api.pathing.calc

## Interface IPath

- * * *





```
public interface IPath
```


- ### Method Summary

All Methods[Instance Methods](javascript:show(2);)[Abstract Methods](javascript:show(4);)[Default Methods](javascript:show(16);)Modifier and TypeMethod and Description`default IPath``cutoffAtLoadedChunks(java.lang.Object bsi)`

Cuts off this path at the loaded chunk border, and returns the resulting path.

`default BetterBlockPos``getDest()`

Returns the end position of this path.

`Goal``getGoal()``int``getNumNodesConsidered()`

Returns the number of nodes that were considered during calculation before
this path was found.

`default BetterBlockPos``getSrc()`

Returns the start position of this path.

`default int``length()`

Returns the number of positions in this path.

`java.util.List<IMovement>``movements()`

Ordered list of movements to carry out.

`java.util.List<BetterBlockPos>``positions()`

All positions along the way.

`default IPath``postProcess()`

This path is actually going to be executed in the world.

`default void``sanityCheck()`

Performs a series of checks to ensure that the assembly of the path went as expected.

`default IPath``staticCutoff(Goal destination)`

Cuts off this path using the min length and cutoff factor settings, and returns the resulting path.

`default double``ticksRemainingFrom(int pathPosition)`

Returns the estimated number of ticks to complete the path from the given node index.

- ### Method Detail



  - #### movements



    ```
    java.util.List<IMovement> movements()
    ```


    Ordered list of movements to carry out.
     movements.get(i).getSrc() should equal positions.get(i)
     movements.get(i).getDest() should equal positions.get(i+1)
     movements.size() should equal positions.size()-1
    Returns:All of the movements to carry out

  - #### positions



    ```
    java.util.List<BetterBlockPos> positions()
    ```


    All positions along the way.
     Should begin with the same as getSrc and end with the same as getDest
    Returns:All of the positions along this path

  - #### postProcess



    ```
    default IPath postProcess()
    ```


    This path is actually going to be executed in the world. Do whatever additional processing is required.
     (as opposed to Path objects that are just constructed every frame for rendering)
    Returns:The result of path post processing

  - #### length



    ```
    default int length()
    ```


    Returns the number of positions in this path. Equivalent to `positions().size()`.
    Returns:Number of positions in this path

  - #### getGoal



    ```
    Goal getGoal()
    ```

    Returns:The goal that this path was calculated towards

  - #### getNumNodesConsidered



    ```
    int getNumNodesConsidered()
    ```


    Returns the number of nodes that were considered during calculation before
     this path was found.
    Returns:The number of nodes that were considered before finding this path

  - #### getSrc



    ```
    default BetterBlockPos getSrc()
    ```


    Returns the start position of this path. This is the first element in the
     `List` that is returned by [`positions()`](../../../../baritone/api/pathing/calc/IPath.html#positions--).
    Returns:The start position of this path

  - #### getDest



    ```
    default BetterBlockPos getDest()
    ```


    Returns the end position of this path. This is the last element in the
     `List` that is returned by [`positions()`](../../../../baritone/api/pathing/calc/IPath.html#positions--).
    Returns:The end position of this path.

  - #### ticksRemainingFrom



    ```
    default double ticksRemainingFrom(int pathPosition)
    ```


    Returns the estimated number of ticks to complete the path from the given node index.
    Parameters:`pathPosition` \- The index of the node we're calculating fromReturns:The estimated number of ticks remaining frm the given position

  - #### cutoffAtLoadedChunks



    ```
    default IPath cutoffAtLoadedChunks(java.lang.Object bsi)
    ```


    Cuts off this path at the loaded chunk border, and returns the resulting path. Default
     implementation just returns this path, without the intended functionality.



    The argument is supposed to be a BlockStateInterface LOL LOL LOL LOL LOL


    Parameters:`bsi` \- The block state lookup, highly cursedReturns:The result of this cut-off operation

  - #### staticCutoff



    ```
    default IPath staticCutoff(Goal destination)
    ```


    Cuts off this path using the min length and cutoff factor settings, and returns the resulting path.
     Default implementation just returns this path, without the intended functionality.
    Parameters:`destination` \- The end goal of this pathReturns:The result of this cut-off operationSee Also:[`Settings.pathCutoffMinimumLength`](../../../../baritone/api/Settings.html#pathCutoffMinimumLength),
    [`Settings.pathCutoffFactor`](../../../../baritone/api/Settings.html#pathCutoffFactor)

  - #### sanityCheck



    ```
    default void sanityCheck()
    ```


    Performs a series of checks to ensure that the assembly of the path went as expected.