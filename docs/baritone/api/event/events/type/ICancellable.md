ICancellable (baritone 1.2.15 API)

baritone.api.event.events.type

## Interface ICancellable

- All Known Implementing Classes:[Cancellable](../../../../../baritone/api/event/events/type/Cancellable.html "class in baritone.api.event.events.type"), [ChatEvent](../../../../../baritone/api/event/events/ChatEvent.html "class in baritone.api.event.events"), [TabCompleteEvent](../../../../../baritone/api/event/events/TabCompleteEvent.html "class in baritone.api.event.events")

* * *





```
public interface ICancellable
```

Since:10/11/2018

- ### Method Summary

All Methods[Instance Methods](javascript:show(2);)[Abstract Methods](javascript:show(4);)Modifier and TypeMethod and Description`void``cancel()`

Cancels this event

`boolean``isCancelled()`

- ### Method Detail



  - #### cancel



    ```
    void cancel()
    ```


    Cancels this event


  - #### isCancelled



    ```
    boolean isCancelled()
    ```

    Returns:Whether or not this event has been cancelled