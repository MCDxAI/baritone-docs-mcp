ISelectionManager (baritone 1.2.15 API)

baritone.api.selection

## Interface ISelectionManager

- * * *





```
public interface ISelectionManager
```


The selection manager handles setting Baritone's selections. You can set the selection here, as well as retrieving
the current selection.


- ### Method Summary

All Methods[Instance Methods](javascript:show(2);)[Abstract Methods](javascript:show(4);)Modifier and TypeMethod and Description`ISelection``addSelection(BetterBlockPos pos1,
              BetterBlockPos pos2)`

Adds a new [`ISelection`](../../../baritone/api/selection/ISelection.html "interface in baritone.api.selection") constructed from the given block positions.

`ISelection``addSelection(ISelection selection)`

Adds a new selection.

`ISelection``contract(ISelection selection,
          net.minecraft.util.EnumFacing direction,
          int blocks)`

Replaces the specified [`ISelection`](../../../baritone/api/selection/ISelection.html "interface in baritone.api.selection") with one contracted in the specified direction by the specified number
of blocks.

`ISelection``expand(ISelection selection,
        net.minecraft.util.EnumFacing direction,
        int blocks)`

Replaces the specified [`ISelection`](../../../baritone/api/selection/ISelection.html "interface in baritone.api.selection") with one expanded in the specified direction by the specified number of
blocks.

`ISelection``getLastSelection()`

This method will always return the last selection.

`ISelection``getOnlySelection()`

For anything expecting only one selection, this method is provided.

`ISelection[]``getSelections()``ISelection[]``removeAllSelections()`

Removes all selections.

`ISelection``removeSelection(ISelection selection)`

Removes the selection from the current selections.

`ISelection``shift(ISelection selection,
       net.minecraft.util.EnumFacing direction,
       int blocks)`

Replaces the specified [`ISelection`](../../../baritone/api/selection/ISelection.html "interface in baritone.api.selection") with one shifted in the specified direction by the specified number of
blocks.

- ### Method Detail



  - #### addSelection



    ```
    ISelection addSelection(ISelection selection)
    ```


    Adds a new selection. The added selection is returned.
    Parameters:`selection` \- The new selection to add.

  - #### addSelection



    ```
    ISelection addSelection(BetterBlockPos pos1,
                            BetterBlockPos pos2)
    ```


    Adds a new [`ISelection`](../../../baritone/api/selection/ISelection.html "interface in baritone.api.selection") constructed from the given block positions. The new selection is returned.
    Parameters:`pos1` \- One corner of the selection`pos2` \- The new corner of the selection

  - #### removeSelection



    ```
    ISelection removeSelection(ISelection selection)
    ```


    Removes the selection from the current selections.
    Parameters:`selection` \- The selection to remove.Returns:The removed selection.

  - #### removeAllSelections



    ```
    ISelection[] removeAllSelections()
    ```


    Removes all selections.
    Returns:The selections that were removed, sorted from oldest to newest..

  - #### getSelections



    ```
    ISelection[] getSelections()
    ```

    Returns:The current selections, sorted from oldest to newest.

  - #### getOnlySelection



    ```
    ISelection getOnlySelection()
    ```


    For anything expecting only one selection, this method is provided. However, to enforce multi-selection support,
     this method will only return a selection if there is ONLY one.
    Returns:The only selection, or null if there isn't only one.

  - #### getLastSelection



    ```
    ISelection getLastSelection()
    ```


    This method will always return the last selection. ONLY use this if you want to, for example, modify the most
     recent selection based on user input. ALWAYS use [`getOnlySelection()`](../../../baritone/api/selection/ISelectionManager.html#getOnlySelection--) or, ideally,
     [`getSelections()`](../../../baritone/api/selection/ISelectionManager.html#getSelections--) for retrieving the content of selections.
    Returns:The last selection, or null if it doesn't exist.

  - #### expand



    ```
    ISelection expand(ISelection selection,
                      net.minecraft.util.EnumFacing direction,
                      int blocks)
    ```


    Replaces the specified [`ISelection`](../../../baritone/api/selection/ISelection.html "interface in baritone.api.selection") with one expanded in the specified direction by the specified number of
     blocks. Returns the new selection.
    Parameters:`selection` \- The selection to expand.`direction` \- The direction to expand the selection.`blocks` \- How many blocks to expand it.Returns:The new selection, expanded as specified.

  - #### contract



    ```
    ISelection contract(ISelection selection,
                        net.minecraft.util.EnumFacing direction,
                        int blocks)
    ```


    Replaces the specified [`ISelection`](../../../baritone/api/selection/ISelection.html "interface in baritone.api.selection") with one contracted in the specified direction by the specified number
     of blocks.



    Note that, for example, if the direction specified is UP, the bottom of the selection will be shifted up. If it
    is DOWN, the top of the selection will be shifted down.


    Parameters:`selection` \- The selection to contract.`direction` \- The direction to contract the selection.`blocks` \- How many blocks to contract it.Returns:The new selection, contracted as specified.

  - #### shift



    ```
    ISelection shift(ISelection selection,
                     net.minecraft.util.EnumFacing direction,
                     int blocks)
    ```


    Replaces the specified [`ISelection`](../../../baritone/api/selection/ISelection.html "interface in baritone.api.selection") with one shifted in the specified direction by the specified number of
     blocks. This moves the whole selection.
    Parameters:`selection` \- The selection to shift.`direction` \- The direction to shift the selection.`blocks` \- How many blocks to shift it.Returns:The new selection, shifted as specified.