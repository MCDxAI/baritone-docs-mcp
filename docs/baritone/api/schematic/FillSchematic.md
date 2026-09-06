FillSchematic (baritone 1.2.15 API)

baritone.api.schematic

## Class FillSchematic

- java.lang.Object
  - [baritone.api.schematic.AbstractSchematic](../../../baritone/api/schematic/AbstractSchematic.html "class in baritone.api.schematic")
    - baritone.api.schematic.FillSchematic

- All Implemented Interfaces:[ISchematic](../../../baritone/api/schematic/ISchematic.html "interface in baritone.api.schematic")

* * *





```
public class FillSchematic
extends AbstractSchematic
```


- ### Field Summary


  - ### Fields inherited from class baritone.api.schematic. [AbstractSchematic](../../../baritone/api/schematic/AbstractSchematic.html "class in baritone.api.schematic")

     `x, y, z`

- ### Constructor Summary

ConstructorsConstructor and Description`FillSchematic(int x,
               int y,
               int z,
               BlockOptionalMeta bom)``FillSchematic(int x,
               int y,
               int z,
               net.minecraft.block.state.IBlockState state)`

- ### Method Summary

All Methods[Instance Methods](javascript:show(2);)[Concrete Methods](javascript:show(8);)Modifier and TypeMethod and Description`net.minecraft.block.state.IBlockState``desiredState(int x,
              int y,
              int z,
              net.minecraft.block.state.IBlockState current,
              java.util.List<net.minecraft.block.state.IBlockState> approxPlaceable)`

Returns the desired block state at a given (X, Y, Z) position relative to the origin (0, 0, 0).

`BlockOptionalMeta``getBom()`

  - ### Methods inherited from class baritone.api.schematic. [AbstractSchematic](../../../baritone/api/schematic/AbstractSchematic.html "class in baritone.api.schematic")

     `heightY, lengthZ, widthX`

  - ### Methods inherited from class java.lang.Object

     `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

  - ### Methods inherited from interface baritone.api.schematic. [ISchematic](../../../baritone/api/schematic/ISchematic.html "interface in baritone.api.schematic")

     `inSchematic, reset, size`

- ### Constructor Detail



  - #### FillSchematic



    ```
    public FillSchematic(int x,
                         int y,
                         int z,
                         BlockOptionalMeta bom)
    ```


  - #### FillSchematic



    ```
    public FillSchematic(int x,
                         int y,
                         int z,
                         net.minecraft.block.state.IBlockState state)
    ```

- ### Method Detail



  - #### getBom



    ```
    public BlockOptionalMeta getBom()
    ```


  - #### desiredState



    ```
    public net.minecraft.block.state.IBlockState desiredState(int x,
                                                              int y,
                                                              int z,
                                                              net.minecraft.block.state.IBlockState current,
                                                              java.util.List<net.minecraft.block.state.IBlockState> approxPlaceable)
    ```


    Description copied from interface: `ISchematic`

    Returns the desired block state at a given (X, Y, Z) position relative to the origin (0, 0, 0).
    Parameters:`x` \- The x position of the block, relative to the origin`y` \- The y position of the block, relative to the origin`z` \- The z position of the block, relative to the origin`current` \- The current state of that block in the world, or null`approxPlaceable` \- The list of blockstates estimated to be placeableReturns:The desired block state at the specified position