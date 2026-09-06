IBuilderProcess (baritone 1.2.15 API)

baritone.api.process

## Interface IBuilderProcess

- All Superinterfaces:[IBaritoneProcess](../../../baritone/api/process/IBaritoneProcess.html "interface in baritone.api.process")

* * *





```
public interface IBuilderProcess
extends IBaritoneProcess
```

Since:1/15/2019

- ### Field Summary


  - ### Fields inherited from interface baritone.api.process. [IBaritoneProcess](../../../baritone/api/process/IBaritoneProcess.html "interface in baritone.api.process")

     `DEFAULT_PRIORITY`

- ### Method Summary

All Methods[Instance Methods](javascript:show(2);)[Abstract Methods](javascript:show(4);)[Default Methods](javascript:show(16);)Modifier and TypeMethod and Description`default boolean``build(java.lang.String schematicFile,
       net.minecraft.util.math.BlockPos origin)``boolean``build(java.lang.String name,
       java.io.File schematic,
       net.minecraft.util.math.Vec3i origin)`

Requests a build for the specified schematic, labeled as specified, with the specified origin.

`void``build(java.lang.String name,
       ISchematic schematic,
       net.minecraft.util.math.Vec3i origin)`

Requests a build for the specified schematic, labeled as specified, with the specified origin.

`void``buildOpenLitematic(int i)``void``buildOpenSchematic()``void``clearArea(net.minecraft.util.math.BlockPos corner1,
           net.minecraft.util.math.BlockPos corner2)``java.util.List<net.minecraft.block.state.IBlockState>``getApproxPlaceable()``boolean``isPaused()``void``pause()``void``resume()`
  - ### Methods inherited from interface baritone.api.process. [IBaritoneProcess](../../../baritone/api/process/IBaritoneProcess.html "interface in baritone.api.process")

     `displayName, displayName0, isActive, isTemporary, onLostControl, onTick, priority`

- ### Method Detail



  - #### build



    ```
    void build(java.lang.String name,
               ISchematic schematic,
               net.minecraft.util.math.Vec3i origin)
    ```


    Requests a build for the specified schematic, labeled as specified, with the specified origin.
    Parameters:`name` \- A user-friendly name for the schematic`schematic` \- The object representation of the schematic`origin` \- The origin position of the schematic being built

  - #### build



    ```
    boolean build(java.lang.String name,
                  java.io.File schematic,
                  net.minecraft.util.math.Vec3i origin)
    ```


    Requests a build for the specified schematic, labeled as specified, with the specified origin.
    Parameters:`name` \- A user-friendly name for the schematic`schematic` \- The file path of the schematic`origin` \- The origin position of the schematic being builtReturns:Whether or not the schematic was able to load from file

  - #### build



    ```
    default boolean build(java.lang.String schematicFile,
                          net.minecraft.util.math.BlockPos origin)
    ```


  - #### buildOpenSchematic



    ```
    void buildOpenSchematic()
    ```


  - #### buildOpenLitematic



    ```
    void buildOpenLitematic(int i)
    ```


  - #### pause



    ```
    void pause()
    ```


  - #### isPaused



    ```
    boolean isPaused()
    ```


  - #### resume



    ```
    void resume()
    ```


  - #### clearArea



    ```
    void clearArea(net.minecraft.util.math.BlockPos corner1,
                   net.minecraft.util.math.BlockPos corner2)
    ```


  - #### getApproxPlaceable



    ```
    java.util.List<net.minecraft.block.state.IBlockState> getApproxPlaceable()
    ```

    Returns:A list of block states that are estimated to be placeable by this builder process. You can use this in
     schematics, for example, to pick a state that the builder process will be happy with, because any variation will
     cause it to give up. This is updated every tick, but only while the builder process is active.