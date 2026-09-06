ISchematic (baritone 1.2.15 API)

baritone.api.schematic

## Interface ISchematic

- All Known Subinterfaces:[IStaticSchematic](../../../baritone/api/schematic/IStaticSchematic.html "interface in baritone.api.schematic")All Known Implementing Classes:[AbstractSchematic](../../../baritone/api/schematic/AbstractSchematic.html "class in baritone.api.schematic"), [CompositeSchematic](../../../baritone/api/schematic/CompositeSchematic.html "class in baritone.api.schematic"), [FillSchematic](../../../baritone/api/schematic/FillSchematic.html "class in baritone.api.schematic"), [MaskSchematic](../../../baritone/api/schematic/MaskSchematic.html "class in baritone.api.schematic"), [ReplaceSchematic](../../../baritone/api/schematic/ReplaceSchematic.html "class in baritone.api.schematic"), [ShellSchematic](../../../baritone/api/schematic/ShellSchematic.html "class in baritone.api.schematic"), [SubstituteSchematic](../../../baritone/api/schematic/SubstituteSchematic.html "class in baritone.api.schematic"), [WallsSchematic](../../../baritone/api/schematic/WallsSchematic.html "class in baritone.api.schematic")

* * *





```
public interface ISchematic
```


Basic representation of a schematic. Provides the dimensions and the desired state for a given position relative to
the origin.


- ### Method Summary

All Methods[Instance Methods](javascript:show(2);)[Abstract Methods](javascript:show(4);)[Default Methods](javascript:show(16);)Modifier and TypeMethod and Description`net.minecraft.block.state.IBlockState``desiredState(int x,
              int y,
              int z,
              net.minecraft.block.state.IBlockState current,
              java.util.List<net.minecraft.block.state.IBlockState> approxPlaceable)`

Returns the desired block state at a given (X, Y, Z) position relative to the origin (0, 0, 0).

`int``heightY()``default boolean``inSchematic(int x,
             int y,
             int z,
             net.minecraft.block.state.IBlockState currentState)`

Does the block at this coordinate matter to the schematic?

`int``lengthZ()``default void``reset()`

Resets possible caches to avoid wrong behavior when moving the schematic around

`default int``size(net.minecraft.util.EnumFacing.Axis axis)``int``widthX()`

- ### Method Detail



  - #### inSchematic



    ```
    default boolean inSchematic(int x,
                                int y,
                                int z,
                                net.minecraft.block.state.IBlockState currentState)
    ```


    Does the block at this coordinate matter to the schematic?



    Normally just a check for if the coordinate is in the cube.





    However, in the case of something like a map art, anything that's below the level of the map art doesn't matter,
    so this function should return false in that case. (i.e. it doesn't really have to be air below the art blocks)


    Parameters:`x` \- The x position of the block, relative to the origin`y` \- The y position of the block, relative to the origin`z` \- The z position of the block, relative to the origin`currentState` \- The current state of that block in the world, or nullReturns:Whether or not the specified position is within the bounds of this schematic

  - #### size



    ```
    default int size(net.minecraft.util.EnumFacing.Axis axis)
    ```


  - #### desiredState



    ```
    net.minecraft.block.state.IBlockState desiredState(int x,
                                                       int y,
                                                       int z,
                                                       net.minecraft.block.state.IBlockState current,
                                                       java.util.List<net.minecraft.block.state.IBlockState> approxPlaceable)
    ```


    Returns the desired block state at a given (X, Y, Z) position relative to the origin (0, 0, 0).
    Parameters:`x` \- The x position of the block, relative to the origin`y` \- The y position of the block, relative to the origin`z` \- The z position of the block, relative to the origin`current` \- The current state of that block in the world, or null`approxPlaceable` \- The list of blockstates estimated to be placeableReturns:The desired block state at the specified position

  - #### reset



    ```
    default void reset()
    ```


    Resets possible caches to avoid wrong behavior when moving the schematic around


  - #### widthX



    ```
    int widthX()
    ```

    Returns:The width (X axis length) of this schematic

  - #### heightY



    ```
    int heightY()
    ```

    Returns:The height (Y axis length) of this schematic

  - #### lengthZ



    ```
    int lengthZ()
    ```

    Returns:The length (Z axis length) of this schematic