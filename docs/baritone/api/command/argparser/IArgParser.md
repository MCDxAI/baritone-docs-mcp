IArgParser (baritone 1.2.15 API)

baritone.api.command.argparser

## Interface IArgParser<T>

- All Known Subinterfaces:[IArgParser.Stated](../../../../baritone/api/command/argparser/IArgParser.Stated.html "interface in baritone.api.command.argparser") <T,S>, [IArgParser.Stateless](../../../../baritone/api/command/argparser/IArgParser.Stateless.html "interface in baritone.api.command.argparser") <T>

* * *





```
public interface IArgParser<T>
```


- ### Nested Class Summary

Nested ClassesModifier and TypeInterface and Description`static interface ``IArgParser.Stated<T,S>`

A stated argument parser is similar to a stateless one.

`static interface ``IArgParser.Stateless<T>`

A stateless argument parser is just that.


- ### Method Summary

All Methods[Instance Methods](javascript:show(2);)[Abstract Methods](javascript:show(4);)Modifier and TypeMethod and Description`java.lang.Class<T>``getTarget()`

- ### Method Detail


  - #### getTarget



    ```
    java.lang.Class<T> getTarget()
    ```

    Returns:the class of this parser.