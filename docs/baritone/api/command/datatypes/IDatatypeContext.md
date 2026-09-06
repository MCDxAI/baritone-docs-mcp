IDatatypeContext (baritone 1.2.15 API)

baritone.api.command.datatypes

## Interface IDatatypeContext

- * * *





```
public interface IDatatypeContext
```


Provides an [`IDatatype`](../../../../baritone/api/command/datatypes/IDatatype.html "interface in baritone.api.command.datatypes") with contextual information so
that it can perform the desired operation on the target level.
Since:9/26/2019See Also:[`IDatatype`](../../../../baritone/api/command/datatypes/IDatatype.html "interface in baritone.api.command.datatypes")

- ### Method Summary

All Methods[Instance Methods](javascript:show(2);)[Abstract Methods](javascript:show(4);)Modifier and TypeMethod and Description`IBaritone``getBaritone()`

Provides the [`IBaritone`](../../../../baritone/api/IBaritone.html "interface in baritone.api") instance that is associated with the action relating to datatype handling.

`IArgConsumer``getConsumer()`

Provides the [`IArgConsumer`](../../../../baritone/api/command/argument/IArgConsumer.html "interface in baritone.api.command.argument")} to fetch input information from.

- ### Method Detail



  - #### getBaritone



    ```
    IBaritone getBaritone()
    ```


    Provides the [`IBaritone`](../../../../baritone/api/IBaritone.html "interface in baritone.api") instance that is associated with the action relating to datatype handling.
    Returns:The context [`IBaritone`](../../../../baritone/api/IBaritone.html "interface in baritone.api") instance.

  - #### getConsumer



    ```
    IArgConsumer getConsumer()
    ```


    Provides the [`IArgConsumer`](../../../../baritone/api/command/argument/IArgConsumer.html "interface in baritone.api.command.argument")} to fetch input information from.
    Returns:The context [`IArgConsumer`](../../../../baritone/api/command/argument/IArgConsumer.html "interface in baritone.api.command.argument")}.