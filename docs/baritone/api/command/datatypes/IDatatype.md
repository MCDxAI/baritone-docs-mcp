IDatatype (baritone 1.2.15 API)

baritone.api.command.datatypes

## Interface IDatatype

- All Known Subinterfaces:[IDatatypeFor](../../../../baritone/api/command/datatypes/IDatatypeFor.html "interface in baritone.api.command.datatypes") <T>, [IDatatypePost](../../../../baritone/api/command/datatypes/IDatatypePost.html "interface in baritone.api.command.datatypes") <T,O>All Known Implementing Classes:[BlockById](../../../../baritone/api/command/datatypes/BlockById.html "enum in baritone.api.command.datatypes"), [EntityClassById](../../../../baritone/api/command/datatypes/EntityClassById.html "enum in baritone.api.command.datatypes"), [ForBlockOptionalMeta](../../../../baritone/api/command/datatypes/ForBlockOptionalMeta.html "enum in baritone.api.command.datatypes"), [ForEnumFacing](../../../../baritone/api/command/datatypes/ForEnumFacing.html "enum in baritone.api.command.datatypes"), [ForWaypoints](../../../../baritone/api/command/datatypes/ForWaypoints.html "enum in baritone.api.command.datatypes"), [NearbyPlayer](../../../../baritone/api/command/datatypes/NearbyPlayer.html "enum in baritone.api.command.datatypes"), [RelativeBlockPos](../../../../baritone/api/command/datatypes/RelativeBlockPos.html "enum in baritone.api.command.datatypes"), [RelativeCoordinate](../../../../baritone/api/command/datatypes/RelativeCoordinate.html "enum in baritone.api.command.datatypes"), [RelativeFile](../../../../baritone/api/command/datatypes/RelativeFile.html "enum in baritone.api.command.datatypes"), [RelativeGoal](../../../../baritone/api/command/datatypes/RelativeGoal.html "enum in baritone.api.command.datatypes"), [RelativeGoalBlock](../../../../baritone/api/command/datatypes/RelativeGoalBlock.html "enum in baritone.api.command.datatypes"), [RelativeGoalXZ](../../../../baritone/api/command/datatypes/RelativeGoalXZ.html "enum in baritone.api.command.datatypes"), [RelativeGoalYLevel](../../../../baritone/api/command/datatypes/RelativeGoalYLevel.html "enum in baritone.api.command.datatypes")

* * *





```
public interface IDatatype
```


An [`IDatatype`](../../../../baritone/api/command/datatypes/IDatatype.html "interface in baritone.api.command.datatypes") is similar to an [`IArgParser`](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser") in the sense that it is capable of consuming an argument
to transform it into a usable form as the code desires.



A fundamental difference is that an [`IDatatype`](../../../../baritone/api/command/datatypes/IDatatype.html "interface in baritone.api.command.datatypes") is capable of consuming multiple arguments. For example,
[`RelativeBlockPos`](../../../../baritone/api/command/datatypes/RelativeBlockPos.html "enum in baritone.api.command.datatypes") is an [`IDatatypePost`](../../../../baritone/api/command/datatypes/IDatatypePost.html "interface in baritone.api.command.datatypes") which requires at least 3 [`RelativeCoordinate`](../../../../baritone/api/command/datatypes/RelativeCoordinate.html "enum in baritone.api.command.datatypes") arguments
to be specified.





Another difference is that an [`IDatatype`](../../../../baritone/api/command/datatypes/IDatatype.html "interface in baritone.api.command.datatypes") can be tab-completed, providing comprehensive auto completion
that can substitute based on existing input or provide possibilities for the next piece of input.


See Also:[`IDatatypeContext`](../../../../baritone/api/command/datatypes/IDatatypeContext.html "interface in baritone.api.command.datatypes"),
[`IDatatypeFor`](../../../../baritone/api/command/datatypes/IDatatypeFor.html "interface in baritone.api.command.datatypes"),
[`IDatatypePost`](../../../../baritone/api/command/datatypes/IDatatypePost.html "interface in baritone.api.command.datatypes")

- ### Method Summary

All Methods[Instance Methods](javascript:show(2);)[Abstract Methods](javascript:show(4);)Modifier and TypeMethod and Description`java.util.stream.Stream<java.lang.String>``tabComplete(IDatatypeContext ctx)`

Attempts to complete missing or partial input provided through the [`IArgConsumer`](../../../../baritone/api/command/argument/IArgConsumer.html "interface in baritone.api.command.argument")} provided by
[`IDatatypeContext.getConsumer()`](../../../../baritone/api/command/datatypes/IDatatypeContext.html#getConsumer--) in order to aide the user in executing commands.

- ### Method Detail


  - #### tabComplete



    ```
    java.util.stream.Stream<java.lang.String> tabComplete(IDatatypeContext ctx)
                                                   throws CommandException
    ```


    Attempts to complete missing or partial input provided through the [`IArgConsumer`](../../../../baritone/api/command/argument/IArgConsumer.html "interface in baritone.api.command.argument")} provided by
     [`IDatatypeContext.getConsumer()`](../../../../baritone/api/command/datatypes/IDatatypeContext.html#getConsumer--) in order to aide the user in executing commands.



    One benefit over datatypes over [`IArgParser`](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser") s is that instead of each command trying to guess what values
    the datatype will accept, or simply not tab completing at all, datatypes that support tab completion can provide
    accurate information using the same methods used to parse arguments in the first place.


    Parameters:`ctx` \- The argument consumer to tab completeReturns:A stream representing the strings that can be tab completed. DO NOT INCLUDE SPACES IN ANY STRINGS.Throws:`CommandException`See Also:[`IArgConsumer.tabCompleteDatatype(IDatatype)`](../../../../baritone/api/command/argument/IArgConsumer.html#tabCompleteDatatype-T-)