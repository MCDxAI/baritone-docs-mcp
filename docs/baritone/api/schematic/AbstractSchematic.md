AbstractSchematic (baritone 1.2.15 API)

baritone.api.schematic

## Class AbstractSchematic

- java.lang.Object
  - baritone.api.schematic.AbstractSchematic

- All Implemented Interfaces:[ISchematic](../../../baritone/api/schematic/ISchematic.html "interface in baritone.api.schematic")Direct Known Subclasses:[CompositeSchematic](../../../baritone/api/schematic/CompositeSchematic.html "class in baritone.api.schematic"), [FillSchematic](../../../baritone/api/schematic/FillSchematic.html "class in baritone.api.schematic"), [MaskSchematic](../../../baritone/api/schematic/MaskSchematic.html "class in baritone.api.schematic"), [SubstituteSchematic](../../../baritone/api/schematic/SubstituteSchematic.html "class in baritone.api.schematic")

* * *





```
public abstract class AbstractSchematic
extends java.lang.Object
implements ISchematic
```


- ### Field Summary

FieldsModifier and TypeField and Description`protected int``x``protected int``y``protected int``z`

- ### Constructor Summary

ConstructorsConstructor and Description`AbstractSchematic()``AbstractSchematic(int x,
                   int y,
                   int z)`

- ### Method Summary

All Methods[Instance Methods](javascript:show(2);)[Concrete Methods](javascript:show(8);)Modifier and TypeMethod and Description`int``heightY()``int``lengthZ()``int``widthX()`

  - ### Methods inherited from class java.lang.Object

     `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

  - ### Methods inherited from interface baritone.api.schematic. [ISchematic](../../../baritone/api/schematic/ISchematic.html "interface in baritone.api.schematic")

     `desiredState, inSchematic, reset, size`

- ### Field Detail



  - #### x



    ```
    protected int x
    ```


  - #### y



    ```
    protected int y
    ```


  - #### z



    ```
    protected int z
    ```

- ### Constructor Detail



  - #### AbstractSchematic



    ```
    public AbstractSchematic()
    ```


  - #### AbstractSchematic



    ```
    public AbstractSchematic(int x,
                             int y,
                             int z)
    ```

- ### Method Detail



  - #### widthX



    ```
    public int widthX()
    ```

    Specified by:`widthX` in interface `ISchematic`Returns:The width (X axis length) of this schematic

  - #### heightY



    ```
    public int heightY()
    ```

    Specified by:`heightY` in interface `ISchematic`Returns:The height (Y axis length) of this schematic

  - #### lengthZ



    ```
    public int lengthZ()
    ```

    Specified by:`lengthZ` in interface `ISchematic`Returns:The length (Z axis length) of this schematic