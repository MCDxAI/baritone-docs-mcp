TickEvent.Type (baritone 1.2.15 API)

baritone.api.event.events

## Enum TickEvent.Type

- java.lang.Object
  - java.lang.Enum< [TickEvent.Type](../../../../baritone/api/event/events/TickEvent.Type.html "enum in baritone.api.event.events") >
    - baritone.api.event.events.TickEvent.Type

- All Implemented Interfaces:java.io.Serializable, java.lang.Comparable< [TickEvent.Type](../../../../baritone/api/event/events/TickEvent.Type.html "enum in baritone.api.event.events") >Enclosing class:[TickEvent](../../../../baritone/api/event/events/TickEvent.html "class in baritone.api.event.events")

* * *





```
public static enum TickEvent.Type
extends java.lang.Enum<TickEvent.Type>
```


- ### Enum Constant Summary

Enum ConstantsEnum Constant and Description`IN`

When guarantees can be made about
the game state and in-game variables.

`OUT`

No guarantees can be made about the game state.


- ### Method Summary

All Methods[Static Methods](javascript:show(1);)[Concrete Methods](javascript:show(8);)Modifier and TypeMethod and Description`static TickEvent.Type``valueOf(java.lang.String name)`

Returns the enum constant of this type with the specified name.

`static TickEvent.Type[]``values()`

Returns an array containing the constants of this enum type, in
the order they are declared.



  - ### Methods inherited from class java.lang.Enum

     `clone, compareTo, equals, finalize, getDeclaringClass, hashCode, name, ordinal, toString, valueOf`

  - ### Methods inherited from class java.lang.Object

     `getClass, notify, notifyAll, wait, wait, wait`

- ### Enum Constant Detail



  - #### IN



    ```
    public static final TickEvent.Type IN
    ```


    When guarantees can be made about
     the game state and in-game variables.


  - #### OUT



    ```
    public static final TickEvent.Type OUT
    ```


    No guarantees can be made about the game state.
     This probably means we are at the main menu.

- ### Method Detail



  - #### values



    ```
    public static TickEvent.Type[] values()
    ```


    Returns an array containing the constants of this enum type, in
    the order they are declared. This method may be used to iterate
    over the constants as follows:


    ```
    for (TickEvent.Type c : TickEvent.Type.values())
        System.out.println(c);

    ```


    Returns:an array containing the constants of this enum type, in the order they are declared

  - #### valueOf



    ```
    public static TickEvent.Type valueOf(java.lang.String name)
    ```


    Returns the enum constant of this type with the specified name.
    The string must match _exactly_ an identifier used to declare an
    enum constant in this type. (Extraneous whitespace characters are
    not permitted.)
    Parameters:`name` \- the name of the enum constant to be returned.Returns:the enum constant with the specified nameThrows:`java.lang.IllegalArgumentException` \- if this enum type has no constant with the specified name`java.lang.NullPointerException` \- if the argument is null