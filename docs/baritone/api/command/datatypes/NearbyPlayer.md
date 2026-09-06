NearbyPlayer (baritone 1.2.15 API)

baritone.api.command.datatypes

## Enum NearbyPlayer

- java.lang.Object
  - java.lang.Enum< [NearbyPlayer](../../../../baritone/api/command/datatypes/NearbyPlayer.html "enum in baritone.api.command.datatypes") >
    - baritone.api.command.datatypes.NearbyPlayer

- All Implemented Interfaces:[IDatatype](../../../../baritone/api/command/datatypes/IDatatype.html "interface in baritone.api.command.datatypes"), [IDatatypeFor](../../../../baritone/api/command/datatypes/IDatatypeFor.html "interface in baritone.api.command.datatypes") <net.minecraft.entity.player.EntityPlayer>, java.io.Serializable, java.lang.Comparable< [NearbyPlayer](../../../../baritone/api/command/datatypes/NearbyPlayer.html "enum in baritone.api.command.datatypes") >

* * *





```
public enum NearbyPlayer
extends java.lang.Enum<NearbyPlayer>
implements IDatatypeFor<net.minecraft.entity.player.EntityPlayer>
```


An [`IDatatype`](../../../../baritone/api/command/datatypes/IDatatype.html "interface in baritone.api.command.datatypes") used to resolve nearby players, those within
render distance of the target [`IBaritone`](../../../../baritone/api/IBaritone.html "interface in baritone.api") instance.


- ### Enum Constant Summary

Enum ConstantsEnum Constant and Description`INSTANCE`

- ### Method Summary

All Methods[Static Methods](javascript:show(1);)[Instance Methods](javascript:show(2);)[Concrete Methods](javascript:show(8);)Modifier and TypeMethod and Description`net.minecraft.entity.player.EntityPlayer``get(IDatatypeContext ctx)`

Consumes the desired amount of arguments from the specified [`IDatatypeContext`](../../../../baritone/api/command/datatypes/IDatatypeContext.html "interface in baritone.api.command.datatypes"), and
then returns the parsed value.

`java.util.stream.Stream<java.lang.String>``tabComplete(IDatatypeContext ctx)`

Attempts to complete missing or partial input provided through the [`IArgConsumer`](../../../../baritone/api/command/argument/IArgConsumer.html "interface in baritone.api.command.argument")} provided by
[`IDatatypeContext.getConsumer()`](../../../../baritone/api/command/datatypes/IDatatypeContext.html#getConsumer--) in order to aide the user in executing commands.

`static NearbyPlayer``valueOf(java.lang.String name)`

Returns the enum constant of this type with the specified name.

`static NearbyPlayer[]``values()`

Returns an array containing the constants of this enum type, in
the order they are declared.



  - ### Methods inherited from class java.lang.Enum

     `clone, compareTo, equals, finalize, getDeclaringClass, hashCode, name, ordinal, toString, valueOf`

  - ### Methods inherited from class java.lang.Object

     `getClass, notify, notifyAll, wait, wait, wait`

- ### Enum Constant Detail


  - #### INSTANCE



    ```
    public static final NearbyPlayer INSTANCE
    ```

- ### Method Detail



  - #### values



    ```
    public static NearbyPlayer[] values()
    ```


    Returns an array containing the constants of this enum type, in
    the order they are declared. This method may be used to iterate
    over the constants as follows:


    ```
    for (NearbyPlayer c : NearbyPlayer.values())
        System.out.println(c);

    ```


    Returns:an array containing the constants of this enum type, in the order they are declared

  - #### valueOf



    ```
    public static NearbyPlayer valueOf(java.lang.String name)
    ```


    Returns the enum constant of this type with the specified name.
    The string must match _exactly_ an identifier used to declare an
    enum constant in this type. (Extraneous whitespace characters are
    not permitted.)
    Parameters:`name` \- the name of the enum constant to be returned.Returns:the enum constant with the specified nameThrows:`java.lang.IllegalArgumentException` \- if this enum type has no constant with the specified name`java.lang.NullPointerException` \- if the argument is null

  - #### get



    ```
    public net.minecraft.entity.player.EntityPlayer get(IDatatypeContext ctx)
                                                 throws CommandException
    ```


    Description copied from interface: `IDatatypeFor`

    Consumes the desired amount of arguments from the specified [`IDatatypeContext`](../../../../baritone/api/command/datatypes/IDatatypeContext.html "interface in baritone.api.command.datatypes"), and
     then returns the parsed value. This method will more than likely return a `IllegalArgumentException`
     if the expected input does not conform to a parseable value. As far as a [`CommandException`](../../../../baritone/api/command/exception/CommandException.html "class in baritone.api.command.exception") being
     thrown is concerned, see the note below for specifics.
    Specified by:`get` in interface `IDatatypeFor<net.minecraft.entity.player.EntityPlayer>`Parameters:`ctx` \- The contextReturns:The parsed data-typeThrows:`CommandException` \- If there was an issue parsing using another type or arguments could not be polled.See Also:[`IDatatypeContext`](../../../../baritone/api/command/datatypes/IDatatypeContext.html "interface in baritone.api.command.datatypes")

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