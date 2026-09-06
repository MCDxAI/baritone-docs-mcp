IWaypoint.Tag (baritone 1.2.15 API)

baritone.api.cache

## Enum IWaypoint.Tag

- java.lang.Object
  - java.lang.Enum< [IWaypoint.Tag](../../../baritone/api/cache/IWaypoint.Tag.html "enum in baritone.api.cache") >
    - baritone.api.cache.IWaypoint.Tag

- All Implemented Interfaces:java.io.Serializable, java.lang.Comparable< [IWaypoint.Tag](../../../baritone/api/cache/IWaypoint.Tag.html "enum in baritone.api.cache") >Enclosing interface:[IWaypoint](../../../baritone/api/cache/IWaypoint.html "interface in baritone.api.cache")

* * *





```
public static enum IWaypoint.Tag
extends java.lang.Enum<IWaypoint.Tag>
```


- ### Enum Constant Summary

Enum ConstantsEnum Constant and Description`BED`

Tag indicating a bed position

`DEATH`

Tag indicating a position that the local player has died at

`HOME`

Tag indicating a position explictly marked as a home base

`USER`

Tag indicating that the waypoint was user-created


- ### Field Summary

FieldsModifier and TypeField and Description`java.lang.String[]``names`

The names for the tag, anything that the tag can be referred to as.


- ### Method Summary

All Methods[Static Methods](javascript:show(1);)[Instance Methods](javascript:show(2);)[Concrete Methods](javascript:show(8);)Modifier and TypeMethod and Description`static java.lang.String[]``getAllNames()``static IWaypoint.Tag``getByName(java.lang.String name)`

Gets a tag by one of its names.

`java.lang.String``getName()``static IWaypoint.Tag``valueOf(java.lang.String name)`

Returns the enum constant of this type with the specified name.

`static IWaypoint.Tag[]``values()`

Returns an array containing the constants of this enum type, in
the order they are declared.



  - ### Methods inherited from class java.lang.Enum

     `clone, compareTo, equals, finalize, getDeclaringClass, hashCode, name, ordinal, toString, valueOf`

  - ### Methods inherited from class java.lang.Object

     `getClass, notify, notifyAll, wait, wait, wait`

- ### Enum Constant Detail



  - #### HOME



    ```
    public static final IWaypoint.Tag HOME
    ```


    Tag indicating a position explictly marked as a home base


  - #### DEATH



    ```
    public static final IWaypoint.Tag DEATH
    ```


    Tag indicating a position that the local player has died at


  - #### BED



    ```
    public static final IWaypoint.Tag BED
    ```


    Tag indicating a bed position


  - #### USER



    ```
    public static final IWaypoint.Tag USER
    ```


    Tag indicating that the waypoint was user-created

- ### Field Detail


  - #### names



    ```
    public final java.lang.String[] names
    ```


    The names for the tag, anything that the tag can be referred to as.

- ### Method Detail



  - #### values



    ```
    public static IWaypoint.Tag[] values()
    ```


    Returns an array containing the constants of this enum type, in
    the order they are declared. This method may be used to iterate
    over the constants as follows:


    ```
    for (IWaypoint.Tag c : IWaypoint.Tag.values())
        System.out.println(c);

    ```


    Returns:an array containing the constants of this enum type, in the order they are declared

  - #### valueOf



    ```
    public static IWaypoint.Tag valueOf(java.lang.String name)
    ```


    Returns the enum constant of this type with the specified name.
    The string must match _exactly_ an identifier used to declare an
    enum constant in this type. (Extraneous whitespace characters are
    not permitted.)
    Parameters:`name` \- the name of the enum constant to be returned.Returns:the enum constant with the specified nameThrows:`java.lang.IllegalArgumentException` \- if this enum type has no constant with the specified name`java.lang.NullPointerException` \- if the argument is null

  - #### getName



    ```
    public java.lang.String getName()
    ```

    Returns:A name that can be passed to [`getByName(String)`](../../../baritone/api/cache/IWaypoint.Tag.html#getByName-java.lang.String-) to retrieve this tag

  - #### getByName



    ```
    public static IWaypoint.Tag getByName(java.lang.String name)
    ```


    Gets a tag by one of its names.
    Parameters:`name` \- The name to search for.Returns:The tag, if found, or null.

  - #### getAllNames



    ```
    public static java.lang.String[] getAllNames()
    ```

    Returns:All tag names.