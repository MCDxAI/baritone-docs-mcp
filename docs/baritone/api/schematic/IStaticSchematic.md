IStaticSchematic (baritone 1.2.15 API)

baritone.api.schematic

## Interface IStaticSchematic

- All Superinterfaces:[ISchematic](../../../baritone/api/schematic/ISchematic.html "interface in baritone.api.schematic")

* * *





```
public interface IStaticSchematic
extends ISchematic
```


A static schematic is capable of providing the desired state at a given position without
additional context. Schematics of this type are expected to have non-varying contents.
Since:12/24/2019See Also:[`getDirect(int, int, int)`](../../../baritone/api/schematic/IStaticSchematic.html#getDirect-int-int-int-)

- ### Method Summary

All Methods[Instance Methods](javascript:show(2);)[Abstract Methods](javascript:show(4);)[Default Methods](javascript:show(16);)Modifier and TypeMethod and Description`default net.minecraft.block.state.IBlockState[]``getColumn(int x,
           int z)`

Returns an `IBlockState` array of size [`ISchematic.heightY()`](../../../baritone/api/schematic/ISchematic.html#heightY--) which contains all
desired block states in the specified vertical column.

`net.minecraft.block.state.IBlockState``getDirect(int x,
           int y,
           int z)`

Gets the `IBlockState` for a given position in this schematic.


  - ### Methods inherited from interface baritone.api.schematic. [ISchematic](../../../baritone/api/schematic/ISchematic.html "interface in baritone.api.schematic")

     `desiredState, heightY, inSchematic, lengthZ, reset, size, widthX`

- ### Method Detail



  - #### getDirect



    ```
    net.minecraft.block.state.IBlockState getDirect(int x,
                                                    int y,
                                                    int z)
    ```


    Gets the `IBlockState` for a given position in this schematic. It should be guaranteed
     that the return value of this method will not change given that the parameters are the same.
    Parameters:`x` \- The X block position`y` \- The Y block position`z` \- The Z block positionReturns:The desired state at the specified position.

  - #### getColumn



    ```
    default net.minecraft.block.state.IBlockState[] getColumn(int x,
                                                              int z)
    ```


    Returns an `IBlockState` array of size [`ISchematic.heightY()`](../../../baritone/api/schematic/ISchematic.html#heightY--) which contains all
     desired block states in the specified vertical column. The index of `IBlockState` s
     in the array are equivalent to their Y position in the schematic.
    Parameters:`x` \- The X column position`z` \- The Z column positionReturns:An `IBlockState` array