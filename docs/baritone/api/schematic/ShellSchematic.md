ShellSchematic (baritone 1.2.15 API)

baritone.api.schematic

## Class ShellSchematic

- java.lang.Object
  - [baritone.api.schematic.AbstractSchematic](../../../baritone/api/schematic/AbstractSchematic.html "class in baritone.api.schematic")
    - [baritone.api.schematic.MaskSchematic](../../../baritone/api/schematic/MaskSchematic.html "class in baritone.api.schematic")
      - baritone.api.schematic.ShellSchematic

- All Implemented Interfaces:[ISchematic](../../../baritone/api/schematic/ISchematic.html "interface in baritone.api.schematic")

* * *





```
public class ShellSchematic
extends MaskSchematic
```


- ### Field Summary


  - ### Fields inherited from class baritone.api.schematic. [AbstractSchematic](../../../baritone/api/schematic/AbstractSchematic.html "class in baritone.api.schematic")

     `x, y, z`

- ### Constructor Summary

ConstructorsConstructor and Description`ShellSchematic(ISchematic schematic)`

- ### Method Summary

All Methods[Instance Methods](javascript:show(2);)[Concrete Methods](javascript:show(8);)Modifier and TypeMethod and Description`protected boolean``partOfMask(int x,
            int y,
            int z,
            net.minecraft.block.state.IBlockState currentState)`

  - ### Methods inherited from class baritone.api.schematic. [MaskSchematic](../../../baritone/api/schematic/MaskSchematic.html "class in baritone.api.schematic")

     `desiredState, inSchematic`

  - ### Methods inherited from class baritone.api.schematic. [AbstractSchematic](../../../baritone/api/schematic/AbstractSchematic.html "class in baritone.api.schematic")

     `heightY, lengthZ, widthX`

  - ### Methods inherited from class java.lang.Object

     `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

  - ### Methods inherited from interface baritone.api.schematic. [ISchematic](../../../baritone/api/schematic/ISchematic.html "interface in baritone.api.schematic")

     `reset, size`

- ### Constructor Detail


  - #### ShellSchematic



    ```
    public ShellSchematic(ISchematic schematic)
    ```

- ### Method Detail


  - #### partOfMask



    ```
    protected boolean partOfMask(int x,
                                 int y,
                                 int z,
                                 net.minecraft.block.state.IBlockState currentState)
    ```

    Specified by:`partOfMask` in class `MaskSchematic`