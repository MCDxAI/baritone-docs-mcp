PathEvent (baritone 1.2.15 API)

baritone.api.event.events

## Enum PathEvent

- java.lang.Object
  - java.lang.Enum< [PathEvent](../../../../baritone/api/event/events/PathEvent.html "enum in baritone.api.event.events") >
    - baritone.api.event.events.PathEvent

- All Implemented Interfaces:java.io.Serializable, java.lang.Comparable< [PathEvent](../../../../baritone/api/event/events/PathEvent.html "enum in baritone.api.event.events") >

* * *





```
public enum PathEvent
extends java.lang.Enum<PathEvent>
```


- ### Enum Constant Summary

Enum ConstantsEnum Constant and Description`AT_GOAL``CALC_FAILED``CALC_FINISHED_NOW_EXECUTING``CALC_STARTED``CANCELED``CONTINUING_ONTO_PLANNED_NEXT``DISCARD_NEXT``NEXT_CALC_FAILED``NEXT_SEGMENT_CALC_FINISHED``NEXT_SEGMENT_CALC_STARTED``PATH_FINISHED_NEXT_STILL_CALCULATING``SPLICING_ONTO_NEXT_EARLY`

- ### Method Summary

All Methods[Static Methods](javascript:show(1);)[Concrete Methods](javascript:show(8);)Modifier and TypeMethod and Description`static PathEvent``valueOf(java.lang.String name)`

Returns the enum constant of this type with the specified name.

`static PathEvent[]``values()`

Returns an array containing the constants of this enum type, in
the order they are declared.



  - ### Methods inherited from class java.lang.Enum

     `clone, compareTo, equals, finalize, getDeclaringClass, hashCode, name, ordinal, toString, valueOf`

  - ### Methods inherited from class java.lang.Object

     `getClass, notify, notifyAll, wait, wait, wait`

- ### Enum Constant Detail



  - #### CALC\_STARTED



    ```
    public static final PathEvent CALC_STARTED
    ```


  - #### CALC\_FINISHED\_NOW\_EXECUTING



    ```
    public static final PathEvent CALC_FINISHED_NOW_EXECUTING
    ```


  - #### CALC\_FAILED



    ```
    public static final PathEvent CALC_FAILED
    ```


  - #### NEXT\_SEGMENT\_CALC\_STARTED



    ```
    public static final PathEvent NEXT_SEGMENT_CALC_STARTED
    ```


  - #### NEXT\_SEGMENT\_CALC\_FINISHED



    ```
    public static final PathEvent NEXT_SEGMENT_CALC_FINISHED
    ```


  - #### CONTINUING\_ONTO\_PLANNED\_NEXT



    ```
    public static final PathEvent CONTINUING_ONTO_PLANNED_NEXT
    ```


  - #### SPLICING\_ONTO\_NEXT\_EARLY



    ```
    public static final PathEvent SPLICING_ONTO_NEXT_EARLY
    ```


  - #### AT\_GOAL



    ```
    public static final PathEvent AT_GOAL
    ```


  - #### PATH\_FINISHED\_NEXT\_STILL\_CALCULATING



    ```
    public static final PathEvent PATH_FINISHED_NEXT_STILL_CALCULATING
    ```


  - #### NEXT\_CALC\_FAILED



    ```
    public static final PathEvent NEXT_CALC_FAILED
    ```


  - #### DISCARD\_NEXT



    ```
    public static final PathEvent DISCARD_NEXT
    ```


  - #### CANCELED



    ```
    public static final PathEvent CANCELED
    ```

- ### Method Detail



  - #### values



    ```
    public static PathEvent[] values()
    ```


    Returns an array containing the constants of this enum type, in
    the order they are declared. This method may be used to iterate
    over the constants as follows:


    ```
    for (PathEvent c : PathEvent.values())
        System.out.println(c);

    ```


    Returns:an array containing the constants of this enum type, in the order they are declared

  - #### valueOf



    ```
    public static PathEvent valueOf(java.lang.String name)
    ```


    Returns the enum constant of this type with the specified name.
    The string must match _exactly_ an identifier used to declare an
    enum constant in this type. (Extraneous whitespace characters are
    not permitted.)
    Parameters:`name` \- the name of the enum constant to be returned.Returns:the enum constant with the specified nameThrows:`java.lang.IllegalArgumentException` \- if this enum type has no constant with the specified name`java.lang.NullPointerException` \- if the argument is null