Cancellable (baritone 1.2.15 API)

baritone.api.event.events.type

## Class Cancellable

- java.lang.Object
  - baritone.api.event.events.type.Cancellable

- All Implemented Interfaces:[ICancellable](../../../../../baritone/api/event/events/type/ICancellable.html "interface in baritone.api.event.events.type")Direct Known Subclasses:[ChatEvent](../../../../../baritone/api/event/events/ChatEvent.html "class in baritone.api.event.events"), [TabCompleteEvent](../../../../../baritone/api/event/events/TabCompleteEvent.html "class in baritone.api.event.events")

* * *





```
public class Cancellable
extends java.lang.Object
implements ICancellable
```

Since:8/1/2018

- ### Constructor Summary

ConstructorsConstructor and Description`Cancellable()`

- ### Method Summary

All Methods[Instance Methods](javascript:show(2);)[Concrete Methods](javascript:show(8);)Modifier and TypeMethod and Description`void``cancel()`

Cancels this event

`boolean``isCancelled()`
  - ### Methods inherited from class java.lang.Object

     `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- ### Constructor Detail


  - #### Cancellable



    ```
    public Cancellable()
    ```

- ### Method Detail



  - #### cancel



    ```
    public final void cancel()
    ```


    Description copied from interface: `ICancellable`

    Cancels this event
    Specified by:`cancel` in interface `ICancellable`

  - #### isCancelled



    ```
    public final boolean isCancelled()
    ```

    Specified by:`isCancelled` in interface `ICancellable`Returns:Whether or not this event has been cancelled