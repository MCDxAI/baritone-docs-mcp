PathCalculationResult.Type (baritone 1.2.15 API)

baritone.api.utils

## Enum PathCalculationResult.Type

- java.lang.Object
  - java.lang.Enum< [PathCalculationResult.Type](../../../baritone/api/utils/PathCalculationResult.Type.html "enum in baritone.api.utils") >
    - baritone.api.utils.PathCalculationResult.Type

- All Implemented Interfaces:java.io.Serializable, java.lang.Comparable< [PathCalculationResult.Type](../../../baritone/api/utils/PathCalculationResult.Type.html "enum in baritone.api.utils") >Enclosing class:[PathCalculationResult](../../../baritone/api/utils/PathCalculationResult.html "class in baritone.api.utils")

* * *





```
public static enum PathCalculationResult.Type
extends java.lang.Enum<PathCalculationResult.Type>
```


- ### Enum Constant Summary

Enum ConstantsEnum Constant and Description`CANCELLATION``EXCEPTION``FAILURE``SUCCESS_SEGMENT``SUCCESS_TO_GOAL`

- ### Method Summary

All Methods[Static Methods](javascript:show(1);)[Concrete Methods](javascript:show(8);)Modifier and TypeMethod and Description`static PathCalculationResult.Type``valueOf(java.lang.String name)`

Returns the enum constant of this type with the specified name.

`static PathCalculationResult.Type[]``values()`

Returns an array containing the constants of this enum type, in
the order they are declared.



  - ### Methods inherited from class java.lang.Enum

     `clone, compareTo, equals, finalize, getDeclaringClass, hashCode, name, ordinal, toString, valueOf`

  - ### Methods inherited from class java.lang.Object

     `getClass, notify, notifyAll, wait, wait, wait`

- ### Enum Constant Detail



  - #### SUCCESS\_TO\_GOAL



    ```
    public static final PathCalculationResult.Type SUCCESS_TO_GOAL
    ```


  - #### SUCCESS\_SEGMENT



    ```
    public static final PathCalculationResult.Type SUCCESS_SEGMENT
    ```


  - #### FAILURE



    ```
    public static final PathCalculationResult.Type FAILURE
    ```


  - #### CANCELLATION



    ```
    public static final PathCalculationResult.Type CANCELLATION
    ```


  - #### EXCEPTION



    ```
    public static final PathCalculationResult.Type EXCEPTION
    ```

- ### Method Detail



  - #### values



    ```
    public static PathCalculationResult.Type[] values()
    ```


    Returns an array containing the constants of this enum type, in
    the order they are declared. This method may be used to iterate
    over the constants as follows:


    ```
    for (PathCalculationResult.Type c : PathCalculationResult.Type.values())
        System.out.println(c);

    ```


    Returns:an array containing the constants of this enum type, in the order they are declared

  - #### valueOf



    ```
    public static PathCalculationResult.Type valueOf(java.lang.String name)
    ```


    Returns the enum constant of this type with the specified name.
    The string must match _exactly_ an identifier used to declare an
    enum constant in this type. (Extraneous whitespace characters are
    not permitted.)
    Parameters:`name` \- the name of the enum constant to be returned.Returns:the enum constant with the specified nameThrows:`java.lang.IllegalArgumentException` \- if this enum type has no constant with the specified name`java.lang.NullPointerException` \- if the argument is null