TabCompleteEvent (baritone 1.2.15 API)

baritone.api.event.events

## Class TabCompleteEvent

- java.lang.Object
  - [baritone.api.event.events.type.Cancellable](../../../../baritone/api/event/events/type/Cancellable.html "class in baritone.api.event.events.type")
    - baritone.api.event.events.TabCompleteEvent

- All Implemented Interfaces:[ICancellable](../../../../baritone/api/event/events/type/ICancellable.html "interface in baritone.api.event.events.type")

* * *





```
public class TabCompleteEvent
extends Cancellable
```


- ### Field Summary

FieldsModifier and TypeField and Description`java.lang.String[]``completions``java.lang.String``prefix`

- ### Constructor Summary

ConstructorsConstructor and Description`TabCompleteEvent(java.lang.String prefix)`

- ### Method Summary



  - ### Methods inherited from class baritone.api.event.events.type. [Cancellable](../../../../baritone/api/event/events/type/Cancellable.html "class in baritone.api.event.events.type")

     `cancel, isCancelled`

  - ### Methods inherited from class java.lang.Object

     `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- ### Field Detail



  - #### prefix



    ```
    public final java.lang.String prefix
    ```


  - #### completions



    ```
    public java.lang.String[] completions
    ```

- ### Constructor Detail


  - #### TabCompleteEvent



    ```
    public TabCompleteEvent(java.lang.String prefix)
    ```