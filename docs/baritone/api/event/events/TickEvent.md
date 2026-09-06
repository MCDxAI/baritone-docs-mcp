TickEvent (baritone 1.2.15 API)

baritone.api.event.events

## Class TickEvent

- java.lang.Object
  - baritone.api.event.events.TickEvent

- * * *





```
public final class TickEvent
extends java.lang.Object
```


- ### Nested Class Summary

Nested ClassesModifier and TypeClass and Description`static class ``TickEvent.Type`

- ### Constructor Summary

ConstructorsConstructor and Description`TickEvent(EventState state,
           TickEvent.Type type,
           int count)`

- ### Method Summary

All Methods[Static Methods](javascript:show(1);)[Instance Methods](javascript:show(2);)[Concrete Methods](javascript:show(8);)Modifier and TypeMethod and Description`static java.util.function.BiFunction<EventState,TickEvent.Type,TickEvent>``createNextProvider()``int``getCount()``EventState``getState()``TickEvent.Type``getType()`
  - ### Methods inherited from class java.lang.Object

     `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- ### Constructor Detail


  - #### TickEvent



    ```
    public TickEvent(EventState state,
                     TickEvent.Type type,
                     int count)
    ```

- ### Method Detail



  - #### getCount



    ```
    public int getCount()
    ```


  - #### getType



    ```
    public TickEvent.Type getType()
    ```


  - #### getState



    ```
    public EventState getState()
    ```


  - #### createNextProvider



    ```
    public static java.util.function.BiFunction<EventState,TickEvent.Type,TickEvent> createNextProvider()
    ```