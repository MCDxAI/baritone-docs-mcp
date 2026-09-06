SubstituteSchematic (baritone 1.2.15 API)

baritone.api.schematic

## Class SubstituteSchematic

- java.lang.Object
  - [baritone.api.schematic.AbstractSchematic](../../../baritone/api/schematic/AbstractSchematic.html "class in baritone.api.schematic")
    - baritone.api.schematic.SubstituteSchematic

- All Implemented Interfaces:[ISchematic](../../../baritone/api/schematic/ISchematic.html "interface in baritone.api.schematic")

* * *





```
public class SubstituteSchematic
extends AbstractSchematic
```


- ### Field Summary


  - ### Fields inherited from class baritone.api.schematic. [AbstractSchematic](../../../baritone/api/schematic/AbstractSchematic.html "class in baritone.api.schematic")

     `x, y, z`

- ### Constructor Summary

ConstructorsConstructor and Description`SubstituteSchematic(ISchematic schematic,
                     java.util.Map<net.minecraft.block.Block,java.util.List<net.minecraft.block.Block>> substitutions)`

- ### Method Summary

All Methods[Instance Methods](javascript:show(2);)[Concrete Methods](javascript:show(8);)Modifier and TypeMethod and Description`net.minecraft.block.state.IBlockState``desiredState(int x,
              int y,
              int z,
              net.minecraft.block.state.IBlockState current,
              java.util.List<net.minecraft.block.state.IBlockState> approxPlaceable)`

Returns the desired block state at a given (X, Y, Z) position relative to the origin (0, 0, 0).

`boolean``inSchematic(int x,
             int y,
             int z,
             net.minecraft.block.state.IBlockState currentState)`

Does the block at this coordinate matter to the schematic?



  - ### Methods inherited from class baritone.api.schematic. [AbstractSchematic](../../../baritone/api/schematic/AbstractSchematic.html "class in baritone.api.schematic")

     `heightY, lengthZ, widthX`

  - ### Methods inherited from class java.lang.Object

     `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

  - ### Methods inherited from interface baritone.api.schematic. [ISchematic](../../../baritone/api/schematic/ISchematic.html "interface in baritone.api.schematic")

     `reset, size`

- ### Constructor Detail


  - #### SubstituteSchematic



    ```
    public SubstituteSchematic(ISchematic schematic,
                               java.util.Map<net.minecraft.block.Block,java.util.List<net.minecraft.block.Block>> substitutions)
    ```

- ### Method Detail



  - #### inSchematic



    ```
    public boolean inSchematic(int x,
                               int y,
                               int z,
                               net.minecraft.block.state.IBlockState currentState)
    ```


    Description copied from interface: `ISchematic`

    Does the block at this coordinate matter to the schematic?



    Normally just a check for if the coordinate is in the cube.





    However, in the case of something like a map art, anything that's below the level of the map art doesn't matter,
    so this function should return false in that case. (i.e. it doesn't really have to be air below the art blocks)


    Parameters:`x` \- The x position of the block, relative to the origin`y` \- The y position of the block, relative to the origin`z` \- The z position of the block, relative to the origin`currentState` \- The current state of that block in the world, or nullReturns:Whether or not the specified position is within the bounds of this schematic

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