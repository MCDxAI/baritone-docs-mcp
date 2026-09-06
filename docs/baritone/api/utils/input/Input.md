Input (baritone 1.2.15 API)

baritone.api.utils.input

## Enum Input

- java.lang.Object
  - java.lang.Enum< [Input](../../../../baritone/api/utils/input/Input.html "enum in baritone.api.utils.input") >
    - baritone.api.utils.input.Input

- All Implemented Interfaces:java.io.Serializable, java.lang.Comparable< [Input](../../../../baritone/api/utils/input/Input.html "enum in baritone.api.utils.input") >

* * *





```
public enum Input
extends java.lang.Enum<Input>
```


An `Enum` representing the inputs that control the player's
behavior. This includes moving, interacting with blocks, jumping,
sneaking, and sprinting.


- ### Enum Constant Summary

Enum ConstantsEnum Constant and Description`CLICK_LEFT`

The attack input

`CLICK_RIGHT`

The use item input

`JUMP`

The jump input

`MOVE_BACK`

The move back input

`MOVE_FORWARD`

The move forward input

`MOVE_LEFT`

The move left input

`MOVE_RIGHT`

The move right input

`SNEAK`

The sneak input

`SPRINT`

The sprint input


- ### Method Summary

All Methods[Static Methods](javascript:show(1);)[Concrete Methods](javascript:show(8);)Modifier and TypeMethod and Description`static Input``valueOf(java.lang.String name)`

Returns the enum constant of this type with the specified name.

`static Input[]``values()`

Returns an array containing the constants of this enum type, in
the order they are declared.



  - ### Methods inherited from class java.lang.Enum

     `clone, compareTo, equals, finalize, getDeclaringClass, hashCode, name, ordinal, toString, valueOf`

  - ### Methods inherited from class java.lang.Object

     `getClass, notify, notifyAll, wait, wait, wait`

- ### Enum Constant Detail



  - #### MOVE\_FORWARD



    ```
    public static final Input MOVE_FORWARD
    ```


    The move forward input


  - #### MOVE\_BACK



    ```
    public static final Input MOVE_BACK
    ```


    The move back input


  - #### MOVE\_LEFT



    ```
    public static final Input MOVE_LEFT
    ```


    The move left input


  - #### MOVE\_RIGHT



    ```
    public static final Input MOVE_RIGHT
    ```


    The move right input


  - #### CLICK\_LEFT



    ```
    public static final Input CLICK_LEFT
    ```


    The attack input


  - #### CLICK\_RIGHT



    ```
    public static final Input CLICK_RIGHT
    ```


    The use item input


  - #### JUMP



    ```
    public static final Input JUMP
    ```


    The jump input


  - #### SNEAK



    ```
    public static final Input SNEAK
    ```


    The sneak input


  - #### SPRINT



    ```
    public static final Input SPRINT
    ```


    The sprint input

- ### Method Detail



  - #### values



    ```
    public static Input[] values()
    ```


    Returns an array containing the constants of this enum type, in
    the order they are declared. This method may be used to iterate
    over the constants as follows:


    ```
    for (Input c : Input.values())
        System.out.println(c);

    ```


    Returns:an array containing the constants of this enum type, in the order they are declared

  - #### valueOf



    ```
    public static Input valueOf(java.lang.String name)
    ```


    Returns the enum constant of this type with the specified name.
    The string must match _exactly_ an identifier used to declare an
    enum constant in this type. (Extraneous whitespace characters are
    not permitted.)
    Parameters:`name` \- the name of the enum constant to be returned.Returns:the enum constant with the specified nameThrows:`java.lang.IllegalArgumentException` \- if this enum type has no constant with the specified name`java.lang.NullPointerException` \- if the argument is null