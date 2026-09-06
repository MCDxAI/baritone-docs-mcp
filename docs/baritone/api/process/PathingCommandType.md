PathingCommandType (baritone 1.2.15 API)

baritone.api.process

## Enum PathingCommandType

- java.lang.Object
  - java.lang.Enum< [PathingCommandType](../../../baritone/api/process/PathingCommandType.html "enum in baritone.api.process") >
    - baritone.api.process.PathingCommandType

- All Implemented Interfaces:java.io.Serializable, java.lang.Comparable< [PathingCommandType](../../../baritone/api/process/PathingCommandType.html "enum in baritone.api.process") >

* * *





```
public enum PathingCommandType
extends java.lang.Enum<PathingCommandType>
```


- ### Enum Constant Summary

Enum ConstantsEnum Constant and Description`CANCEL_AND_SET_GOAL`

Set the goal (regardless of `null`), and request a cancel of the current path (when safe)

`DEFER`

Go and ask the next process what to do

`FORCE_REVALIDATE_GOAL_AND_PATH`

Set the goal and path.

`REQUEST_PAUSE`

Has no effect on the current goal or path, just requests a pause

`REVALIDATE_GOAL_AND_PATH`

Set the goal and path.

`SET_GOAL_AND_PATH`

Set the goal and path.


- ### Method Summary

All Methods[Static Methods](javascript:show(1);)[Concrete Methods](javascript:show(8);)Modifier and TypeMethod and Description`static PathingCommandType``valueOf(java.lang.String name)`

Returns the enum constant of this type with the specified name.

`static PathingCommandType[]``values()`

Returns an array containing the constants of this enum type, in
the order they are declared.



  - ### Methods inherited from class java.lang.Enum

     `clone, compareTo, equals, finalize, getDeclaringClass, hashCode, name, ordinal, toString, valueOf`

  - ### Methods inherited from class java.lang.Object

     `getClass, notify, notifyAll, wait, wait, wait`

- ### Enum Constant Detail



  - #### SET\_GOAL\_AND\_PATH



    ```
    public static final PathingCommandType SET_GOAL_AND_PATH
    ```


    Set the goal and path.



    If you use this alongside a `null` goal, it will continue along its current path and current goal.


  - #### REQUEST\_PAUSE



    ```
    public static final PathingCommandType REQUEST_PAUSE
    ```


    Has no effect on the current goal or path, just requests a pause


  - #### CANCEL\_AND\_SET\_GOAL



    ```
    public static final PathingCommandType CANCEL_AND_SET_GOAL
    ```


    Set the goal (regardless of `null`), and request a cancel of the current path (when safe)


  - #### REVALIDATE\_GOAL\_AND\_PATH



    ```
    public static final PathingCommandType REVALIDATE_GOAL_AND_PATH
    ```


    Set the goal and path.



    If [`Settings.cancelOnGoalInvalidation`](../../../baritone/api/Settings.html#cancelOnGoalInvalidation) is `true`, revalidate the
    current goal, and cancel if it's no longer valid, or if the new goal is `null`.


  - #### FORCE\_REVALIDATE\_GOAL\_AND\_PATH



    ```
    public static final PathingCommandType FORCE_REVALIDATE_GOAL_AND_PATH
    ```


    Set the goal and path.



    Cancel the current path if the goals are not equal


  - #### DEFER



    ```
    public static final PathingCommandType DEFER
    ```


    Go and ask the next process what to do

- ### Method Detail



  - #### values



    ```
    public static PathingCommandType[] values()
    ```


    Returns an array containing the constants of this enum type, in
    the order they are declared. This method may be used to iterate
    over the constants as follows:


    ```
    for (PathingCommandType c : PathingCommandType.values())
        System.out.println(c);

    ```


    Returns:an array containing the constants of this enum type, in the order they are declared

  - #### valueOf



    ```
    public static PathingCommandType valueOf(java.lang.String name)
    ```


    Returns the enum constant of this type with the specified name.
    The string must match _exactly_ an identifier used to declare an
    enum constant in this type. (Extraneous whitespace characters are
    not permitted.)
    Parameters:`name` \- the name of the enum constant to be returned.Returns:the enum constant with the specified nameThrows:`java.lang.IllegalArgumentException` \- if this enum type has no constant with the specified name`java.lang.NullPointerException` \- if the argument is null