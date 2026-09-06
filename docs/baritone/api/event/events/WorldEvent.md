WorldEvent (baritone 1.2.15 API)

baritone.api.event.events

## Class WorldEvent

- java.lang.Object
  - baritone.api.event.events.WorldEvent

- * * *





```
public final class WorldEvent
extends java.lang.Object
```

Since:8/4/2018

- ### Constructor Summary

ConstructorsConstructor and Description`WorldEvent(net.minecraft.client.multiplayer.WorldClient world,
            EventState state)`

- ### Method Summary

All Methods[Instance Methods](javascript:show(2);)[Concrete Methods](javascript:show(8);)Modifier and TypeMethod and Description`EventState``getState()``net.minecraft.client.multiplayer.WorldClient``getWorld()`
  - ### Methods inherited from class java.lang.Object

     `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- ### Constructor Detail


  - #### WorldEvent



    ```
    public WorldEvent(net.minecraft.client.multiplayer.WorldClient world,
                      EventState state)
    ```

- ### Method Detail



  - #### getWorld



    ```
    public final net.minecraft.client.multiplayer.WorldClient getWorld()
    ```

    Returns:The new world that is being loaded. `null` if being unloaded.

  - #### getState



    ```
    public final EventState getState()
    ```

    Returns:The state of the event