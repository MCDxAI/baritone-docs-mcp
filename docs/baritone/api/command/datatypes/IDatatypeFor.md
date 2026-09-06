IDatatypeFor (baritone 1.2.15 API)

baritone.api.command.datatypes

## Interface IDatatypeFor<T>

- All Superinterfaces:[IDatatype](../../../../baritone/api/command/datatypes/IDatatype.html "interface in baritone.api.command.datatypes")All Known Implementing Classes:[BlockById](../../../../baritone/api/command/datatypes/BlockById.html "enum in baritone.api.command.datatypes"), [EntityClassById](../../../../baritone/api/command/datatypes/EntityClassById.html "enum in baritone.api.command.datatypes"), [ForBlockOptionalMeta](../../../../baritone/api/command/datatypes/ForBlockOptionalMeta.html "enum in baritone.api.command.datatypes"), [ForEnumFacing](../../../../baritone/api/command/datatypes/ForEnumFacing.html "enum in baritone.api.command.datatypes"), [ForWaypoints](../../../../baritone/api/command/datatypes/ForWaypoints.html "enum in baritone.api.command.datatypes"), [NearbyPlayer](../../../../baritone/api/command/datatypes/NearbyPlayer.html "enum in baritone.api.command.datatypes")

* * *





```
public interface IDatatypeFor<T>
extends IDatatype
```


An [`IDatatype`](../../../../baritone/api/command/datatypes/IDatatype.html "interface in baritone.api.command.datatypes") which acts as a `Supplier`, in essence. The only difference
is that it requires an [`IDatatypeContext`](../../../../baritone/api/command/datatypes/IDatatypeContext.html "interface in baritone.api.command.datatypes") to be provided due to the expectation that
implementations of [`IDatatype`](../../../../baritone/api/command/datatypes/IDatatype.html "interface in baritone.api.command.datatypes") are singletons.


- ### Method Summary

All Methods[Instance Methods](javascript:show(2);)[Abstract Methods](javascript:show(4);)Modifier and TypeMethod and Description`T``get(IDatatypeContext ctx)`

Consumes the desired amount of arguments from the specified [`IDatatypeContext`](../../../../baritone/api/command/datatypes/IDatatypeContext.html "interface in baritone.api.command.datatypes"), and
then returns the parsed value.


  - ### Methods inherited from interface baritone.api.command.datatypes. [IDatatype](../../../../baritone/api/command/datatypes/IDatatype.html "interface in baritone.api.command.datatypes")

     `tabComplete`

- ### Method Detail


  - #### get



    ```
    T get(IDatatypeContext ctx)
    throws CommandException
    ```


    Consumes the desired amount of arguments from the specified [`IDatatypeContext`](../../../../baritone/api/command/datatypes/IDatatypeContext.html "interface in baritone.api.command.datatypes"), and
     then returns the parsed value. This method will more than likely return a `IllegalArgumentException`
     if the expected input does not conform to a parseable value. As far as a [`CommandException`](../../../../baritone/api/command/exception/CommandException.html "class in baritone.api.command.exception") being
     thrown is concerned, see the note below for specifics.
    Parameters:`ctx` \- The contextReturns:The parsed data-typeThrows:`CommandException` \- If there was an issue parsing using another type or arguments could not be polled.See Also:[`IDatatypeContext`](../../../../baritone/api/command/datatypes/IDatatypeContext.html "interface in baritone.api.command.datatypes")