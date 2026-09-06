BlockInteractEvent (baritone 1.2.15 API)

baritone.api.event.events

## Class BlockInteractEvent

- java.lang.Object
  - baritone.api.event.events.BlockInteractEvent

- * * *





```
public final class BlockInteractEvent
extends java.lang.Object
```


Called when the local player interacts with a block, can be either [`BlockInteractEvent.Type.START_BREAK`](../../../../baritone/api/event/events/BlockInteractEvent.Type.html#START_BREAK) or [`BlockInteractEvent.Type.USE`](../../../../baritone/api/event/events/BlockInteractEvent.Type.html#USE).
Since:8/22/2018

- ### Nested Class Summary

Nested ClassesModifier and TypeClass and Description`static class ``BlockInteractEvent.Type`

- ### Constructor Summary

ConstructorsConstructor and Description`BlockInteractEvent(net.minecraft.util.math.BlockPos pos,
                    BlockInteractEvent.Type type)`

- ### Method Summary

All Methods[Instance Methods](javascript:show(2);)[Concrete Methods](javascript:show(8);)Modifier and TypeMethod and Description`net.minecraft.util.math.BlockPos``getPos()``BlockInteractEvent.Type``getType()`
  - ### Methods inherited from class java.lang.Object

     `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- ### Constructor Detail


  - #### BlockInteractEvent



    ```
    public BlockInteractEvent(net.minecraft.util.math.BlockPos pos,
                              BlockInteractEvent.Type type)
    ```

- ### Method Detail



  - #### getPos



    ```
    public final net.minecraft.util.math.BlockPos getPos()
    ```

    Returns:The position of the block interacted with

  - #### getType



    ```
    public final BlockInteractEvent.Type getType()
    ```

    Returns:The type of interaction with the target block