RelativeGoal (baritone 1.2.15 API)

baritone.api.command.datatypes

## Enum RelativeGoal

- java.lang.Object
  - java.lang.Enum< [RelativeGoal](../../../../baritone/api/command/datatypes/RelativeGoal.html "enum in baritone.api.command.datatypes") >
    - baritone.api.command.datatypes.RelativeGoal

- All Implemented Interfaces:[IDatatype](../../../../baritone/api/command/datatypes/IDatatype.html "interface in baritone.api.command.datatypes"), [IDatatypePost](../../../../baritone/api/command/datatypes/IDatatypePost.html "interface in baritone.api.command.datatypes") < [Goal](../../../../baritone/api/pathing/goals/Goal.html "interface in baritone.api.pathing.goals"), [BetterBlockPos](../../../../baritone/api/utils/BetterBlockPos.html "class in baritone.api.utils") >, java.io.Serializable, java.lang.Comparable< [RelativeGoal](../../../../baritone/api/command/datatypes/RelativeGoal.html "enum in baritone.api.command.datatypes") >

* * *





```
public enum RelativeGoal
extends java.lang.Enum<RelativeGoal>
implements IDatatypePost<Goal,BetterBlockPos>
```


- ### Enum Constant Summary

Enum ConstantsEnum Constant and Description`INSTANCE`

- ### Method Summary

All Methods[Static Methods](javascript:show(1);)[Instance Methods](javascript:show(2);)[Concrete Methods](javascript:show(8);)Modifier and TypeMethod and Description`Goal``apply(IDatatypeContext ctx,
       BetterBlockPos origin)`

Takes the expected input and transforms it based on the value held by `original`.

`java.util.stream.Stream<java.lang.String>``tabComplete(IDatatypeContext ctx)`

Attempts to complete missing or partial input provided through the [`IArgConsumer`](../../../../baritone/api/command/argument/IArgConsumer.html "interface in baritone.api.command.argument")} provided by
[`IDatatypeContext.getConsumer()`](../../../../baritone/api/command/datatypes/IDatatypeContext.html#getConsumer--) in order to aide the user in executing commands.

`static RelativeGoal``valueOf(java.lang.String name)`

Returns the enum constant of this type with the specified name.

`static RelativeGoal[]``values()`

Returns an array containing the constants of this enum type, in
the order they are declared.



  - ### Methods inherited from class java.lang.Enum

     `clone, compareTo, equals, finalize, getDeclaringClass, hashCode, name, ordinal, toString, valueOf`

  - ### Methods inherited from class java.lang.Object

     `getClass, notify, notifyAll, wait, wait, wait`

- ### Enum Constant Detail


  - #### INSTANCE



    ```
    public static final RelativeGoal INSTANCE
    ```

- ### Method Detail



  - #### values



    ```
    public static RelativeGoal[] values()
    ```


    Returns an array containing the constants of this enum type, in
    the order they are declared. This method may be used to iterate
    over the constants as follows:


    ```
    for (RelativeGoal c : RelativeGoal.values())
        System.out.println(c);

    ```


    Returns:an array containing the constants of this enum type, in the order they are declared

  - #### valueOf



    ```
    public static RelativeGoal valueOf(java.lang.String name)
    ```


    Returns the enum constant of this type with the specified name.
    The string must match _exactly_ an identifier used to declare an
    enum constant in this type. (Extraneous whitespace characters are
    not permitted.)
    Parameters:`name` \- the name of the enum constant to be returned.Returns:the enum constant with the specified nameThrows:`java.lang.IllegalArgumentException` \- if this enum type has no constant with the specified name`java.lang.NullPointerException` \- if the argument is null

  - #### apply



    ```
    public Goal apply(IDatatypeContext ctx,
                      BetterBlockPos origin)
               throws CommandException
    ```


    Description copied from interface: `IDatatypePost`

    Takes the expected input and transforms it based on the value held by `original`. If `original`
     is null, it is expected that the implementation of this method has a case to handle it, such that a
     `NullPointerException` will never be thrown as a result.
    Specified by:`apply` in interface `IDatatypePost<Goal,BetterBlockPos>`Parameters:`ctx` \- The datatype context`origin` \- The transformable valueReturns:The transformed valueThrows:`CommandException`

  - #### tabComplete



    ```
    public java.util.stream.Stream<java.lang.String> tabComplete(IDatatypeContext ctx)
    ```


    Description copied from interface: `IDatatype`

    Attempts to complete missing or partial input provided through the [`IArgConsumer`](../../../../baritone/api/command/argument/IArgConsumer.html "interface in baritone.api.command.argument")} provided by
     [`IDatatypeContext.getConsumer()`](../../../../baritone/api/command/datatypes/IDatatypeContext.html#getConsumer--) in order to aide the user in executing commands.



    One benefit over datatypes over [`IArgParser`](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser") s is that instead of each command trying to guess what values
    the datatype will accept, or simply not tab completing at all, datatypes that support tab completion can provide
    accurate information using the same methods used to parse arguments in the first place.


    Specified by:`tabComplete` in interface `IDatatype`Parameters:`ctx` \- The argument consumer to tab completeReturns:A stream representing the strings that can be tab completed. DO NOT INCLUDE SPACES IN ANY STRINGS.See Also:[`IArgConsumer.tabCompleteDatatype(IDatatype)`](../../../../baritone/api/command/argument/IArgConsumer.html#tabCompleteDatatype-T-)