ChunkEvent.Type (baritone 1.2.15 API)

baritone.api.event.events

## Enum ChunkEvent.Type

- java.lang.Object
  - java.lang.Enum< [ChunkEvent.Type](../../../../baritone/api/event/events/ChunkEvent.Type.html "enum in baritone.api.event.events") >
    - baritone.api.event.events.ChunkEvent.Type

- All Implemented Interfaces:java.io.Serializable, java.lang.Comparable< [ChunkEvent.Type](../../../../baritone/api/event/events/ChunkEvent.Type.html "enum in baritone.api.event.events") >Enclosing class:[ChunkEvent](../../../../baritone/api/event/events/ChunkEvent.html "class in baritone.api.event.events")

* * *





```
public static enum ChunkEvent.Type
extends java.lang.Enum<ChunkEvent.Type>
```


- ### Enum Constant Summary

Enum ConstantsEnum Constant and Description`LOAD`

When the chunk is constructed.

`POPULATE_FULL`

When the chunk is being populated with blocks, tile entities, etc.

`POPULATE_PARTIAL`

When the chunk is being populated with blocks, tile entities, etc.

`UNLOAD`

When the chunk is deconstructed.


- ### Method Summary

All Methods[Static Methods](javascript:show(1);)[Concrete Methods](javascript:show(8);)Modifier and TypeMethod and Description`static ChunkEvent.Type``valueOf(java.lang.String name)`

Returns the enum constant of this type with the specified name.

`static ChunkEvent.Type[]``values()`

Returns an array containing the constants of this enum type, in
the order they are declared.



  - ### Methods inherited from class java.lang.Enum

     `clone, compareTo, equals, finalize, getDeclaringClass, hashCode, name, ordinal, toString, valueOf`

  - ### Methods inherited from class java.lang.Object

     `getClass, notify, notifyAll, wait, wait, wait`

- ### Enum Constant Detail



  - #### LOAD



    ```
    public static final ChunkEvent.Type LOAD
    ```


    When the chunk is constructed.


  - #### UNLOAD



    ```
    public static final ChunkEvent.Type UNLOAD
    ```


    When the chunk is deconstructed.


  - #### POPULATE\_FULL



    ```
    public static final ChunkEvent.Type POPULATE_FULL
    ```


    When the chunk is being populated with blocks, tile entities, etc.



    And it's a full chunk


  - #### POPULATE\_PARTIAL



    ```
    public static final ChunkEvent.Type POPULATE_PARTIAL
    ```


    When the chunk is being populated with blocks, tile entities, etc.



    And it's a partial chunk

- ### Method Detail



  - #### values



    ```
    public static ChunkEvent.Type[] values()
    ```


    Returns an array containing the constants of this enum type, in
    the order they are declared. This method may be used to iterate
    over the constants as follows:


    ```
    for (ChunkEvent.Type c : ChunkEvent.Type.values())
        System.out.println(c);

    ```


    Returns:an array containing the constants of this enum type, in the order they are declared

  - #### valueOf



    ```
    public static ChunkEvent.Type valueOf(java.lang.String name)
    ```


    Returns the enum constant of this type with the specified name.
    The string must match _exactly_ an identifier used to declare an
    enum constant in this type. (Extraneous whitespace characters are
    not permitted.)
    Parameters:`name` \- the name of the enum constant to be returned.Returns:the enum constant with the specified nameThrows:`java.lang.IllegalArgumentException` \- if this enum type has no constant with the specified name`java.lang.NullPointerException` \- if the argument is null