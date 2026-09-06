BlockInteractEvent.Type (baritone 1.2.15 API)

baritone.api.event.events

## Enum BlockInteractEvent.Type

- java.lang.Object
  - java.lang.Enum< [BlockInteractEvent.Type](../../../../baritone/api/event/events/BlockInteractEvent.Type.html "enum in baritone.api.event.events") >
    - baritone.api.event.events.BlockInteractEvent.Type

- All Implemented Interfaces:java.io.Serializable, java.lang.Comparable< [BlockInteractEvent.Type](../../../../baritone/api/event/events/BlockInteractEvent.Type.html "enum in baritone.api.event.events") >Enclosing class:[BlockInteractEvent](../../../../baritone/api/event/events/BlockInteractEvent.html "class in baritone.api.event.events")

* * *





```
public static enum BlockInteractEvent.Type
extends java.lang.Enum<BlockInteractEvent.Type>
```


- ### Enum Constant Summary

Enum ConstantsEnum Constant and Description`START_BREAK`

We're starting to break the target block.

`USE`

We're right clicking on the target block.


- ### Method Summary

All Methods[Static Methods](javascript:show(1);)[Concrete Methods](javascript:show(8);)Modifier and TypeMethod and Description`static BlockInteractEvent.Type``valueOf(java.lang.String name)`

Returns the enum constant of this type with the specified name.

`static BlockInteractEvent.Type[]``values()`

Returns an array containing the constants of this enum type, in
the order they are declared.



  - ### Methods inherited from class java.lang.Enum

     `clone, compareTo, equals, finalize, getDeclaringClass, hashCode, name, ordinal, toString, valueOf`

  - ### Methods inherited from class java.lang.Object

     `getClass, notify, notifyAll, wait, wait, wait`

- ### Enum Constant Detail



  - #### START\_BREAK



    ```
    public static final BlockInteractEvent.Type START_BREAK
    ```


    We're starting to break the target block.


  - #### USE



    ```
    public static final BlockInteractEvent.Type USE
    ```


    We're right clicking on the target block. Either placing or interacting with.

- ### Method Detail



  - #### values



    ```
    public static BlockInteractEvent.Type[] values()
    ```


    Returns an array containing the constants of this enum type, in
    the order they are declared. This method may be used to iterate
    over the constants as follows:


    ```
    for (BlockInteractEvent.Type c : BlockInteractEvent.Type.values())
        System.out.println(c);

    ```


    Returns:an array containing the constants of this enum type, in the order they are declared

  - #### valueOf



    ```
    public static BlockInteractEvent.Type valueOf(java.lang.String name)
    ```


    Returns the enum constant of this type with the specified name.
    The string must match _exactly_ an identifier used to declare an
    enum constant in this type. (Extraneous whitespace characters are
    not permitted.)
    Parameters:`name` \- the name of the enum constant to be returned.Returns:the enum constant with the specified nameThrows:`java.lang.IllegalArgumentException` \- if this enum type has no constant with the specified name`java.lang.NullPointerException` \- if the argument is null