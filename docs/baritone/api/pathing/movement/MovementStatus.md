MovementStatus (baritone 1.2.15 API)

baritone.api.pathing.movement

## Enum MovementStatus

- java.lang.Object
  - java.lang.Enum< [MovementStatus](../../../../baritone/api/pathing/movement/MovementStatus.html "enum in baritone.api.pathing.movement") >
    - baritone.api.pathing.movement.MovementStatus

- All Implemented Interfaces:java.io.Serializable, java.lang.Comparable< [MovementStatus](../../../../baritone/api/pathing/movement/MovementStatus.html "enum in baritone.api.pathing.movement") >

* * *





```
public enum MovementStatus
extends java.lang.Enum<MovementStatus>
```

Since:10/8/2018

- ### Enum Constant Summary

Enum ConstantsEnum Constant and Description`CANCELED`

"Unused"

`FAILED`

Unused

`PREPPING`

We are preparing the movement to be executed.

`RUNNING`

The movement is currently in progress, after [`WAITING`](../../../../baritone/api/pathing/movement/MovementStatus.html#WAITING)

`SUCCESS`

The movement has been completed and we are at our destination

`UNREACHABLE`

There was a change in state between calculation and actual
movement execution, and the movement has now become impossible.

`WAITING`

We are waiting for the movement to begin, after [`PREPPING`](../../../../baritone/api/pathing/movement/MovementStatus.html#PREPPING).


- ### Method Summary

All Methods[Static Methods](javascript:show(1);)[Instance Methods](javascript:show(2);)[Concrete Methods](javascript:show(8);)Modifier and TypeMethod and Description`boolean``isComplete()``static MovementStatus``valueOf(java.lang.String name)`

Returns the enum constant of this type with the specified name.

`static MovementStatus[]``values()`

Returns an array containing the constants of this enum type, in
the order they are declared.



  - ### Methods inherited from class java.lang.Enum

     `clone, compareTo, equals, finalize, getDeclaringClass, hashCode, name, ordinal, toString, valueOf`

  - ### Methods inherited from class java.lang.Object

     `getClass, notify, notifyAll, wait, wait, wait`

- ### Enum Constant Detail



  - #### PREPPING



    ```
    public static final MovementStatus PREPPING
    ```


    We are preparing the movement to be executed. This is when any blocks obstructing the destination are broken.


  - #### WAITING



    ```
    public static final MovementStatus WAITING
    ```


    We are waiting for the movement to begin, after [`PREPPING`](../../../../baritone/api/pathing/movement/MovementStatus.html#PREPPING).


  - #### RUNNING



    ```
    public static final MovementStatus RUNNING
    ```


    The movement is currently in progress, after [`WAITING`](../../../../baritone/api/pathing/movement/MovementStatus.html#WAITING)


  - #### SUCCESS



    ```
    public static final MovementStatus SUCCESS
    ```


    The movement has been completed and we are at our destination


  - #### UNREACHABLE



    ```
    public static final MovementStatus UNREACHABLE
    ```


    There was a change in state between calculation and actual
     movement execution, and the movement has now become impossible.


  - #### FAILED



    ```
    public static final MovementStatus FAILED
    ```


    Unused


  - #### CANCELED



    ```
    public static final MovementStatus CANCELED
    ```


    "Unused"

- ### Method Detail



  - #### values



    ```
    public static MovementStatus[] values()
    ```


    Returns an array containing the constants of this enum type, in
    the order they are declared. This method may be used to iterate
    over the constants as follows:


    ```
    for (MovementStatus c : MovementStatus.values())
        System.out.println(c);

    ```


    Returns:an array containing the constants of this enum type, in the order they are declared

  - #### valueOf



    ```
    public static MovementStatus valueOf(java.lang.String name)
    ```


    Returns the enum constant of this type with the specified name.
    The string must match _exactly_ an identifier used to declare an
    enum constant in this type. (Extraneous whitespace characters are
    not permitted.)
    Parameters:`name` \- the name of the enum constant to be returned.Returns:the enum constant with the specified nameThrows:`java.lang.IllegalArgumentException` \- if this enum type has no constant with the specified name`java.lang.NullPointerException` \- if the argument is null

  - #### isComplete



    ```
    public final boolean isComplete()
    ```