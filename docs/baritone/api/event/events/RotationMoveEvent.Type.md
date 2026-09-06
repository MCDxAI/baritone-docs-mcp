RotationMoveEvent.Type (baritone 1.2.15 API)

baritone.api.event.events

## Enum RotationMoveEvent.Type

- java.lang.Object
  - java.lang.Enum< [RotationMoveEvent.Type](../../../../baritone/api/event/events/RotationMoveEvent.Type.html "enum in baritone.api.event.events") >
    - baritone.api.event.events.RotationMoveEvent.Type

- All Implemented Interfaces:java.io.Serializable, java.lang.Comparable< [RotationMoveEvent.Type](../../../../baritone/api/event/events/RotationMoveEvent.Type.html "enum in baritone.api.event.events") >Enclosing class:[RotationMoveEvent](../../../../baritone/api/event/events/RotationMoveEvent.html "class in baritone.api.event.events")

* * *





```
public static enum RotationMoveEvent.Type
extends java.lang.Enum<RotationMoveEvent.Type>
```


- ### Enum Constant Summary

Enum ConstantsEnum Constant and Description`JUMP`

Called when the player jumps.

`MOTION_UPDATE`

Called when the player's motion is updated.


- ### Method Summary

All Methods[Static Methods](javascript:show(1);)[Concrete Methods](javascript:show(8);)Modifier and TypeMethod and Description`static RotationMoveEvent.Type``valueOf(java.lang.String name)`

Returns the enum constant of this type with the specified name.

`static RotationMoveEvent.Type[]``values()`

Returns an array containing the constants of this enum type, in
the order they are declared.



  - ### Methods inherited from class java.lang.Enum

     `clone, compareTo, equals, finalize, getDeclaringClass, hashCode, name, ordinal, toString, valueOf`

  - ### Methods inherited from class java.lang.Object

     `getClass, notify, notifyAll, wait, wait, wait`

- ### Enum Constant Detail



  - #### MOTION\_UPDATE



    ```
    public static final RotationMoveEvent.Type MOTION_UPDATE
    ```


    Called when the player's motion is updated.
    See Also:`Entity.moveRelative(float, float, float, float)`

  - #### JUMP



    ```
    public static final RotationMoveEvent.Type JUMP
    ```


    Called when the player jumps.
    See Also:`EntityLivingBase.jump()`

- ### Method Detail



  - #### values



    ```
    public static RotationMoveEvent.Type[] values()
    ```


    Returns an array containing the constants of this enum type, in
    the order they are declared. This method may be used to iterate
    over the constants as follows:


    ```
    for (RotationMoveEvent.Type c : RotationMoveEvent.Type.values())
        System.out.println(c);

    ```


    Returns:an array containing the constants of this enum type, in the order they are declared

  - #### valueOf



    ```
    public static RotationMoveEvent.Type valueOf(java.lang.String name)
    ```


    Returns the enum constant of this type with the specified name.
    The string must match _exactly_ an identifier used to declare an
    enum constant in this type. (Extraneous whitespace characters are
    not permitted.)
    Parameters:`name` \- the name of the enum constant to be returned.Returns:the enum constant with the specified nameThrows:`java.lang.IllegalArgumentException` \- if this enum type has no constant with the specified name`java.lang.NullPointerException` \- if the argument is null