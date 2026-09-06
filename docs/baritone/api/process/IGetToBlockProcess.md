IGetToBlockProcess (baritone 1.2.15 API)

baritone.api.process

## Interface IGetToBlockProcess

- All Superinterfaces:[IBaritoneProcess](../../../baritone/api/process/IBaritoneProcess.html "interface in baritone.api.process")

* * *





```
public interface IGetToBlockProcess
extends IBaritoneProcess
```


but it rescans the world every once in a while so it doesn't get fooled by its cache


- ### Field Summary


  - ### Fields inherited from interface baritone.api.process. [IBaritoneProcess](../../../baritone/api/process/IBaritoneProcess.html "interface in baritone.api.process")

     `DEFAULT_PRIORITY`

- ### Method Summary

All Methods[Instance Methods](javascript:show(2);)[Abstract Methods](javascript:show(4);)[Default Methods](javascript:show(16);)Modifier and TypeMethod and Description`boolean``blacklistClosest()``default void``getToBlock(net.minecraft.block.Block block)``void``getToBlock(BlockOptionalMeta block)`
  - ### Methods inherited from interface baritone.api.process. [IBaritoneProcess](../../../baritone/api/process/IBaritoneProcess.html "interface in baritone.api.process")

     `displayName, displayName0, isActive, isTemporary, onLostControl, onTick, priority`

- ### Method Detail



  - #### getToBlock



    ```
    void getToBlock(BlockOptionalMeta block)
    ```


  - #### getToBlock



    ```
    default void getToBlock(net.minecraft.block.Block block)
    ```


  - #### blacklistClosest



    ```
    boolean blacklistClosest()
    ```