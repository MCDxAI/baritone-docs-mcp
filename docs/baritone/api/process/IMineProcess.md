IMineProcess (baritone 1.2.15 API)

baritone.api.process

## Interface IMineProcess

- All Superinterfaces:[IBaritoneProcess](../../../baritone/api/process/IBaritoneProcess.html "interface in baritone.api.process")

* * *





```
public interface IMineProcess
extends IBaritoneProcess
```

Since:9/23/2018

- ### Field Summary


  - ### Fields inherited from interface baritone.api.process. [IBaritoneProcess](../../../baritone/api/process/IBaritoneProcess.html "interface in baritone.api.process")

     `DEFAULT_PRIORITY`

- ### Method Summary

All Methods[Instance Methods](javascript:show(2);)[Abstract Methods](javascript:show(4);)[Default Methods](javascript:show(16);)Modifier and TypeMethod and Description`default void``cancel()`

Cancels the current mining task

`default void``mine(net.minecraft.block.Block... blocks)`

Begin to search for and mine the specified blocks.

`default void``mine(BlockOptionalMeta... boms)`

Begin to search for and mine the specified blocks.

`default void``mine(BlockOptionalMetaLookup filter)`

Begin to search for and mine the specified blocks.

`default void``mine(int quantity,
      net.minecraft.block.Block... blocks)`

Begin to search for and mine the specified blocks.

`default void``mine(int quantity,
      BlockOptionalMeta... boms)`

Begin to search for and mine the specified blocks.

`void``mine(int quantity,
      BlockOptionalMetaLookup filter)`

Begin to search for and mine the specified blocks until
the number of specified items to get from the blocks that
are mined.

`void``mineByName(int quantity,
            java.lang.String... blocks)`

Begin to search for and mine the specified blocks until
the number of specified items to get from the blocks that
are mined.

`default void``mineByName(java.lang.String... blocks)`

Begin to search for and mine the specified blocks.


  - ### Methods inherited from interface baritone.api.process. [IBaritoneProcess](../../../baritone/api/process/IBaritoneProcess.html "interface in baritone.api.process")

     `displayName, displayName0, isActive, isTemporary, onLostControl, onTick, priority`

- ### Method Detail



  - #### mineByName



    ```
    void mineByName(int quantity,
                    java.lang.String... blocks)
    ```


    Begin to search for and mine the specified blocks until
     the number of specified items to get from the blocks that
     are mined.
    Parameters:`quantity` \- The total number of items to get`blocks` \- The blocks to mine

  - #### mine



    ```
    void mine(int quantity,
              BlockOptionalMetaLookup filter)
    ```


    Begin to search for and mine the specified blocks until
     the number of specified items to get from the blocks that
     are mined. This is based on the first target block to mine.
    Parameters:`quantity` \- The number of items to get from blocks mined`filter` \- The blocks to mine

  - #### mine



    ```
    default void mine(BlockOptionalMetaLookup filter)
    ```


    Begin to search for and mine the specified blocks.
    Parameters:`filter` \- The blocks to mine

  - #### mineByName



    ```
    default void mineByName(java.lang.String... blocks)
    ```


    Begin to search for and mine the specified blocks.
    Parameters:`blocks` \- The blocks to mine

  - #### mine



    ```
    default void mine(int quantity,
                      BlockOptionalMeta... boms)
    ```


    Begin to search for and mine the specified blocks.
    Parameters:`boms` \- The blocks to mine

  - #### mine



    ```
    default void mine(BlockOptionalMeta... boms)
    ```


    Begin to search for and mine the specified blocks.
    Parameters:`boms` \- The blocks to mine

  - #### mine



    ```
    default void mine(int quantity,
                      net.minecraft.block.Block... blocks)
    ```


    Begin to search for and mine the specified blocks.
    Parameters:`quantity` \- The total number of items to get`blocks` \- The blocks to mine

  - #### mine



    ```
    default void mine(net.minecraft.block.Block... blocks)
    ```


    Begin to search for and mine the specified blocks.
    Parameters:`blocks` \- The blocks to mine

  - #### cancel



    ```
    default void cancel()
    ```


    Cancels the current mining task