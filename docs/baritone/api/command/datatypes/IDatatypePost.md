IDatatypePost (baritone 1.2.15 API)

baritone.api.command.datatypes

## Interface IDatatypePost<T,O>

- All Superinterfaces:[IDatatype](../../../../baritone/api/command/datatypes/IDatatype.html "interface in baritone.api.command.datatypes")All Known Implementing Classes:[RelativeBlockPos](../../../../baritone/api/command/datatypes/RelativeBlockPos.html "enum in baritone.api.command.datatypes"), [RelativeCoordinate](../../../../baritone/api/command/datatypes/RelativeCoordinate.html "enum in baritone.api.command.datatypes"), [RelativeFile](../../../../baritone/api/command/datatypes/RelativeFile.html "enum in baritone.api.command.datatypes"), [RelativeGoal](../../../../baritone/api/command/datatypes/RelativeGoal.html "enum in baritone.api.command.datatypes"), [RelativeGoalBlock](../../../../baritone/api/command/datatypes/RelativeGoalBlock.html "enum in baritone.api.command.datatypes"), [RelativeGoalXZ](../../../../baritone/api/command/datatypes/RelativeGoalXZ.html "enum in baritone.api.command.datatypes"), [RelativeGoalYLevel](../../../../baritone/api/command/datatypes/RelativeGoalYLevel.html "enum in baritone.api.command.datatypes")

* * *





```
public interface IDatatypePost<T,O>
extends IDatatype
```


An [`IDatatype`](../../../../baritone/api/command/datatypes/IDatatype.html "interface in baritone.api.command.datatypes") which acts as a `Function`, in essence. The only difference
is that it requires an [`IDatatypeContext`](../../../../baritone/api/command/datatypes/IDatatypeContext.html "interface in baritone.api.command.datatypes") to be provided due to the expectation that
implementations of [`IDatatype`](../../../../baritone/api/command/datatypes/IDatatype.html "interface in baritone.api.command.datatypes") are singletons.


- ### Method Summary

All Methods[Instance Methods](javascript:show(2);)[Abstract Methods](javascript:show(4);)Modifier and TypeMethod and Description`T``apply(IDatatypeContext ctx,
       O original)`

Takes the expected input and transforms it based on the value held by `original`.


  - ### Methods inherited from interface baritone.api.command.datatypes. [IDatatype](../../../../baritone/api/command/datatypes/IDatatype.html "interface in baritone.api.command.datatypes")

     `tabComplete`

- ### Method Detail


  - #### apply



    ```
    T apply(IDatatypeContext ctx,
            O original)
     throws CommandException
    ```


    Takes the expected input and transforms it based on the value held by `original`. If `original`
     is null, it is expected that the implementation of this method has a case to handle it, such that a
     `NullPointerException` will never be thrown as a result.
    Parameters:`ctx` \- The datatype context`original` \- The transformable valueReturns:The transformed valueThrows:`CommandException`