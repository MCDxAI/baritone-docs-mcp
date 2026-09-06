ISelection (baritone 1.2.15 API)

baritone.api.selection

## Interface ISelection

- * * *





```
public interface ISelection
```


A selection is an immutable object representing the current selection. The selection is commonly used for certain
types of build commands, however it can be used for anything.


- ### Method Summary

All Methods[Instance Methods](javascript:show(2);)[Abstract Methods](javascript:show(4);)Modifier and TypeMethod and Description`net.minecraft.util.math.AxisAlignedBB``aabb()``ISelection``contract(net.minecraft.util.EnumFacing direction,
          int blocks)`

Returns a new [`ISelection`](../../../baritone/api/selection/ISelection.html "interface in baritone.api.selection") contracted in the specified direction by the specified number of blocks.

`ISelection``expand(net.minecraft.util.EnumFacing direction,
        int blocks)`

Returns a new [`ISelection`](../../../baritone/api/selection/ISelection.html "interface in baritone.api.selection") expanded in the specified direction by the specified number of blocks.

`BetterBlockPos``max()``BetterBlockPos``min()``BetterBlockPos``pos1()``BetterBlockPos``pos2()``ISelection``shift(net.minecraft.util.EnumFacing direction,
       int blocks)`

Returns a new [`ISelection`](../../../baritone/api/selection/ISelection.html "interface in baritone.api.selection") shifted in the specified direction by the specified number of blocks.

`net.minecraft.util.math.Vec3i``size()`

- ### Method Detail



  - #### pos1



    ```
    BetterBlockPos pos1()
    ```

    Returns:The first corner of this selection. This is meant to preserve the user's original first corner.

  - #### pos2



    ```
    BetterBlockPos pos2()
    ```

    Returns:The second corner of this selection. This is meant to preserve the user's original second corner.

  - #### min



    ```
    BetterBlockPos min()
    ```

    Returns:The [`BetterBlockPos`](../../../baritone/api/utils/BetterBlockPos.html "class in baritone.api.utils") with the lowest x, y, and z position in the selection.

  - #### max



    ```
    BetterBlockPos max()
    ```

    Returns:The opposite corner from the [`min()`](../../../baritone/api/selection/ISelection.html#min--).

  - #### size



    ```
    net.minecraft.util.math.Vec3i size()
    ```

    Returns:The size of this ISelection.

  - #### aabb



    ```
    net.minecraft.util.math.AxisAlignedBB aabb()
    ```

    Returns:An `AxisAlignedBB` encompassing all blocks in this selection.

  - #### expand



    ```
    ISelection expand(net.minecraft.util.EnumFacing direction,
                      int blocks)
    ```


    Returns a new [`ISelection`](../../../baritone/api/selection/ISelection.html "interface in baritone.api.selection") expanded in the specified direction by the specified number of blocks.
    Parameters:`direction` \- The direction to expand the selection.`blocks` \- How many blocks to expand it.Returns:A new selection, expanded as specified.

  - #### contract



    ```
    ISelection contract(net.minecraft.util.EnumFacing direction,
                        int blocks)
    ```


    Returns a new [`ISelection`](../../../baritone/api/selection/ISelection.html "interface in baritone.api.selection") contracted in the specified direction by the specified number of blocks.



    Note that, for example, if the direction specified is UP, the bottom of the selection will be shifted up. If it
    is DOWN, the top of the selection will be shifted down.


    Parameters:`direction` \- The direction to contract the selection.`blocks` \- How many blocks to contract it.Returns:A new selection, contracted as specified.

  - #### shift



    ```
    ISelection shift(net.minecraft.util.EnumFacing direction,
                     int blocks)
    ```


    Returns a new [`ISelection`](../../../baritone/api/selection/ISelection.html "interface in baritone.api.selection") shifted in the specified direction by the specified number of blocks. This moves
     the whole selection.
    Parameters:`direction` \- The direction to shift the selection.`blocks` \- How many blocks to shift it.Returns:A new selection, shifted as specified.