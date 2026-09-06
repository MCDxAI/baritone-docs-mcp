EventState (baritone 1.2.15 API)

baritone.api.event.events.type

## Enum EventState

- java.lang.Object
  - java.lang.Enum< [EventState](../../../../../baritone/api/event/events/type/EventState.html "enum in baritone.api.event.events.type") >
    - baritone.api.event.events.type.EventState

- All Implemented Interfaces:java.io.Serializable, java.lang.Comparable< [EventState](../../../../../baritone/api/event/events/type/EventState.html "enum in baritone.api.event.events.type") >

* * *





```
public enum EventState
extends java.lang.Enum<EventState>
```

Since:8/2/2018

- ### Enum Constant Summary

Enum ConstantsEnum Constant and Description`POST`

After the dispatching of what the event is targetting

`PRE`

Before the dispatching of what the event is targetting


- ### Method Summary

All Methods[Static Methods](javascript:show(1);)[Concrete Methods](javascript:show(8);)Modifier and TypeMethod and Description`static EventState``valueOf(java.lang.String name)`

Returns the enum constant of this type with the specified name.

`static EventState[]``values()`

Returns an array containing the constants of this enum type, in
the order they are declared.



  - ### Methods inherited from class java.lang.Enum

     `clone, compareTo, equals, finalize, getDeclaringClass, hashCode, name, ordinal, toString, valueOf`

  - ### Methods inherited from class java.lang.Object

     `getClass, notify, notifyAll, wait, wait, wait`

- ### Enum Constant Detail



  - #### PRE



    ```
    public static final EventState PRE
    ```


    Before the dispatching of what the event is targetting


  - #### POST



    ```
    public static final EventState POST
    ```


    After the dispatching of what the event is targetting

- ### Method Detail



  - #### values



    ```
    public static EventState[] values()
    ```


    Returns an array containing the constants of this enum type, in
    the order they are declared. This method may be used to iterate
    over the constants as follows:


    ```
    for (EventState c : EventState.values())
        System.out.println(c);

    ```


    Returns:an array containing the constants of this enum type, in the order they are declared

  - #### valueOf



    ```
    public static EventState valueOf(java.lang.String name)
    ```


    Returns the enum constant of this type with the specified name.
    The string must match _exactly_ an identifier used to declare an
    enum constant in this type. (Extraneous whitespace characters are
    not permitted.)
    Parameters:`name` \- the name of the enum constant to be returned.Returns:the enum constant with the specified nameThrows:`java.lang.IllegalArgumentException` \- if this enum type has no constant with the specified name`java.lang.NullPointerException` \- if the argument is null