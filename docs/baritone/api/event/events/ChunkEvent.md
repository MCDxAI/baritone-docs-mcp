ChunkEvent (baritone 1.2.15 API)

baritone.api.event.events

## Class ChunkEvent

- java.lang.Object
  - baritone.api.event.events.ChunkEvent

- * * *





```
public final class ChunkEvent
extends java.lang.Object
```

Since:8/2/2018

- ### Nested Class Summary

Nested ClassesModifier and TypeClass and Description`static class ``ChunkEvent.Type`

- ### Constructor Summary

ConstructorsConstructor and Description`ChunkEvent(EventState state,
            ChunkEvent.Type type,
            int x,
            int z)`

- ### Method Summary

All Methods[Instance Methods](javascript:show(2);)[Concrete Methods](javascript:show(8);)Modifier and TypeMethod and Description`EventState``getState()``ChunkEvent.Type``getType()``int``getX()``int``getZ()`
  - ### Methods inherited from class java.lang.Object

     `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- ### Constructor Detail


  - #### ChunkEvent



    ```
    public ChunkEvent(EventState state,
                      ChunkEvent.Type type,
                      int x,
                      int z)
    ```

- ### Method Detail



  - #### getState



    ```
    public final EventState getState()
    ```

    Returns:The state of the event

  - #### getType



    ```
    public final ChunkEvent.Type getType()
    ```

    Returns:The type of chunk event that occurred;

  - #### getX



    ```
    public final int getX()
    ```

    Returns:The Chunk X position.

  - #### getZ



    ```
    public final int getZ()
    ```

    Returns:The Chunk Z position.