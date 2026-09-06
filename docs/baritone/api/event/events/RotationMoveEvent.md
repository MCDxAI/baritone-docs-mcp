RotationMoveEvent (baritone 1.2.15 API)

baritone.api.event.events

## Class RotationMoveEvent

- java.lang.Object
  - baritone.api.event.events.RotationMoveEvent

- * * *





```
public final class RotationMoveEvent
extends java.lang.Object
```

Since:8/21/2018

- ### Nested Class Summary

Nested ClassesModifier and TypeClass and Description`static class ``RotationMoveEvent.Type`

- ### Constructor Summary

ConstructorsConstructor and Description`RotationMoveEvent(RotationMoveEvent.Type type,
                   float yaw)`

- ### Method Summary

All Methods[Instance Methods](javascript:show(2);)[Concrete Methods](javascript:show(8);)Modifier and TypeMethod and Description`RotationMoveEvent.Type``getType()``float``getYaw()``void``setYaw(float yaw)`

Set the yaw movement rotation


  - ### Methods inherited from class java.lang.Object

     `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- ### Constructor Detail


  - #### RotationMoveEvent



    ```
    public RotationMoveEvent(RotationMoveEvent.Type type,
                             float yaw)
    ```

- ### Method Detail



  - #### setYaw



    ```
    public final void setYaw(float yaw)
    ```


    Set the yaw movement rotation
    Parameters:`yaw` \- Yaw rotation

  - #### getYaw



    ```
    public final float getYaw()
    ```

    Returns:The yaw rotation

  - #### getType



    ```
    public final RotationMoveEvent.Type getType()
    ```

    Returns:The type of the event