ChatEvent (baritone 1.2.15 API)

baritone.api.event.events

## Class ChatEvent

- java.lang.Object
  - [baritone.api.event.events.type.Cancellable](../../../../baritone/api/event/events/type/Cancellable.html "class in baritone.api.event.events.type")
    - baritone.api.event.events.ChatEvent

- All Implemented Interfaces:[ICancellable](../../../../baritone/api/event/events/type/ICancellable.html "interface in baritone.api.event.events.type")

* * *





```
public final class ChatEvent
extends Cancellable
```

Since:8/1/2018

- ### Constructor Summary

ConstructorsConstructor and Description`ChatEvent(java.lang.String message)`

- ### Method Summary

All Methods[Instance Methods](javascript:show(2);)[Concrete Methods](javascript:show(8);)Modifier and TypeMethod and Description`java.lang.String``getMessage()`

  - ### Methods inherited from class baritone.api.event.events.type. [Cancellable](../../../../baritone/api/event/events/type/Cancellable.html "class in baritone.api.event.events.type")

     `cancel, isCancelled`

  - ### Methods inherited from class java.lang.Object

     `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- ### Constructor Detail


  - #### ChatEvent



    ```
    public ChatEvent(java.lang.String message)
    ```

- ### Method Detail


  - #### getMessage



    ```
    public final java.lang.String getMessage()
    ```

    Returns:The message being sent