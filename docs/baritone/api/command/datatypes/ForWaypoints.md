ForWaypoints (baritone 1.2.15 API)

baritone.api.command.datatypes

## Enum ForWaypoints

- java.lang.Object
  - java.lang.Enum< [ForWaypoints](../../../../baritone/api/command/datatypes/ForWaypoints.html "enum in baritone.api.command.datatypes") >
    - baritone.api.command.datatypes.ForWaypoints

- All Implemented Interfaces:[IDatatype](../../../../baritone/api/command/datatypes/IDatatype.html "interface in baritone.api.command.datatypes"), [IDatatypeFor](../../../../baritone/api/command/datatypes/IDatatypeFor.html "interface in baritone.api.command.datatypes") < [IWaypoint](../../../../baritone/api/cache/IWaypoint.html "interface in baritone.api.cache")\[\]>, java.io.Serializable, java.lang.Comparable< [ForWaypoints](../../../../baritone/api/command/datatypes/ForWaypoints.html "enum in baritone.api.command.datatypes") >

* * *





```
public enum ForWaypoints
extends java.lang.Enum<ForWaypoints>
implements IDatatypeFor<IWaypoint[]>
```


- ### Enum Constant Summary

Enum ConstantsEnum Constant and Description`INSTANCE`

- ### Method Summary

All Methods[Static Methods](javascript:show(1);)[Instance Methods](javascript:show(2);)[Concrete Methods](javascript:show(8);)Modifier and TypeMethod and Description`IWaypoint[]``get(IDatatypeContext ctx)`

Consumes the desired amount of arguments from the specified [`IDatatypeContext`](../../../../baritone/api/command/datatypes/IDatatypeContext.html "interface in baritone.api.command.datatypes"), and
then returns the parsed value.

`static java.lang.String[]``getWaypointNames(IBaritone baritone)``static IWaypoint[]``getWaypoints(IBaritone baritone)``static IWaypoint[]``getWaypointsByName(IBaritone baritone,
                    java.lang.String name)``static IWaypoint[]``getWaypointsByTag(IBaritone baritone,
                   IWaypoint.Tag tag)``java.util.stream.Stream<java.lang.String>``tabComplete(IDatatypeContext ctx)`

Attempts to complete missing or partial input provided through the [`IArgConsumer`](../../../../baritone/api/command/argument/IArgConsumer.html "interface in baritone.api.command.argument")} provided by
[`IDatatypeContext.getConsumer()`](../../../../baritone/api/command/datatypes/IDatatypeContext.html#getConsumer--) in order to aide the user in executing commands.

`static ForWaypoints``valueOf(java.lang.String name)`

Returns the enum constant of this type with the specified name.

`static ForWaypoints[]``values()`

Returns an array containing the constants of this enum type, in
the order they are declared.

`static IWaypointCollection``waypoints(IBaritone baritone)`

  - ### Methods inherited from class java.lang.Enum

     `clone, compareTo, equals, finalize, getDeclaringClass, hashCode, name, ordinal, toString, valueOf`

  - ### Methods inherited from class java.lang.Object

     `getClass, notify, notifyAll, wait, wait, wait`

- ### Enum Constant Detail


  - #### INSTANCE



    ```
    public static final ForWaypoints INSTANCE
    ```

- ### Method Detail



  - #### values



    ```
    public static ForWaypoints[] values()
    ```


    Returns an array containing the constants of this enum type, in
    the order they are declared. This method may be used to iterate
    over the constants as follows:


    ```
    for (ForWaypoints c : ForWaypoints.values())
        System.out.println(c);

    ```


    Returns:an array containing the constants of this enum type, in the order they are declared

  - #### valueOf



    ```
    public static ForWaypoints valueOf(java.lang.String name)
    ```


    Returns the enum constant of this type with the specified name.
    The string must match _exactly_ an identifier used to declare an
    enum constant in this type. (Extraneous whitespace characters are
    not permitted.)
    Parameters:`name` \- the name of the enum constant to be returned.Returns:the enum constant with the specified nameThrows:`java.lang.IllegalArgumentException` \- if this enum type has no constant with the specified name`java.lang.NullPointerException` \- if the argument is null

  - #### get



    ```
    public IWaypoint[] get(IDatatypeContext ctx)
                    throws CommandException
    ```


    Description copied from interface: `IDatatypeFor`

    Consumes the desired amount of arguments from the specified [`IDatatypeContext`](../../../../baritone/api/command/datatypes/IDatatypeContext.html "interface in baritone.api.command.datatypes"), and
     then returns the parsed value. This method will more than likely return a `IllegalArgumentException`
     if the expected input does not conform to a parseable value. As far as a [`CommandException`](../../../../baritone/api/command/exception/CommandException.html "class in baritone.api.command.exception") being
     thrown is concerned, see the note below for specifics.
    Specified by:`get` in interface `IDatatypeFor<IWaypoint[]>`Parameters:`ctx` \- The contextReturns:The parsed data-typeThrows:`CommandException` \- If there was an issue parsing using another type or arguments could not be polled.See Also:[`IDatatypeContext`](../../../../baritone/api/command/datatypes/IDatatypeContext.html "interface in baritone.api.command.datatypes")

  - #### tabComplete



    ```
    public java.util.stream.Stream<java.lang.String> tabComplete(IDatatypeContext ctx)
                                                          throws CommandException
    ```


    Description copied from interface: `IDatatype`

    Attempts to complete missing or partial input provided through the [`IArgConsumer`](../../../../baritone/api/command/argument/IArgConsumer.html "interface in baritone.api.command.argument")} provided by
     [`IDatatypeContext.getConsumer()`](../../../../baritone/api/command/datatypes/IDatatypeContext.html#getConsumer--) in order to aide the user in executing commands.



    One benefit over datatypes over [`IArgParser`](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser") s is that instead of each command trying to guess what values
    the datatype will accept, or simply not tab completing at all, datatypes that support tab completion can provide
    accurate information using the same methods used to parse arguments in the first place.


    Specified by:`tabComplete` in interface `IDatatype`Parameters:`ctx` \- The argument consumer to tab completeReturns:A stream representing the strings that can be tab completed. DO NOT INCLUDE SPACES IN ANY STRINGS.Throws:`CommandException`See Also:[`IArgConsumer.tabCompleteDatatype(IDatatype)`](../../../../baritone/api/command/argument/IArgConsumer.html#tabCompleteDatatype-T-)

  - #### waypoints



    ```
    public static IWaypointCollection waypoints(IBaritone baritone)
    ```


  - #### getWaypoints



    ```
    public static IWaypoint[] getWaypoints(IBaritone baritone)
    ```


  - #### getWaypointNames



    ```
    public static java.lang.String[] getWaypointNames(IBaritone baritone)
    ```


  - #### getWaypointsByTag



    ```
    public static IWaypoint[] getWaypointsByTag(IBaritone baritone,
                                                IWaypoint.Tag tag)
    ```


  - #### getWaypointsByName



    ```
    public static IWaypoint[] getWaypointsByName(IBaritone baritone,
                                                 java.lang.String name)
    ```