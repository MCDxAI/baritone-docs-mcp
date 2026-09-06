IArgParserManager (baritone 1.2.15 API)

baritone.api.command.argparser

## Interface IArgParserManager

- * * *





```
public interface IArgParserManager
```


Used to retrieve [`IArgParser`](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser") instances from the registry, by their target class.
It can be assumed that a [`IArgParser`](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser") exists for `Integer`, `Long`,
`Float`, `Double` and `Boolean`.
Since:10/4/2019

- ### Method Summary

All Methods[Instance Methods](javascript:show(2);)[Abstract Methods](javascript:show(4);)Modifier and TypeMethod and Description`<T,S> IArgParser.Stated<T,S>``getParserStated(java.lang.Class<T> type,
                 java.lang.Class<S> stateKlass)``<T> IArgParser.Stateless<T>``getParserStateless(java.lang.Class<T> type)``Registry<IArgParser>``getRegistry()``<T,S> T``parseStated(java.lang.Class<T> type,
             java.lang.Class<S> stateKlass,
             ICommandArgument arg,
             S state)`

Attempt to parse the specified argument with a stated [`IArgParser`](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser") that outputs the specified class.

`<T> T``parseStateless(java.lang.Class<T> type,
                ICommandArgument arg)`

Attempt to parse the specified argument with a stateless [`IArgParser`](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser") that outputs the specified class.

- ### Method Detail



  - #### getParserStateless



    ```
    <T> IArgParser.Stateless<T> getParserStateless(java.lang.Class<T> type)
    ```

    Parameters:`type` \- The type trying to be parsedReturns:A parser that can parse arguments into this class, if found.

  - #### getParserStated



    ```
    <T,S> IArgParser.Stated<T,S> getParserStated(java.lang.Class<T> type,
                                                 java.lang.Class<S> stateKlass)
    ```

    Parameters:`type` \- The type trying to be parsedReturns:A parser that can parse arguments into this class, if found.

  - #### parseStateless



    ```
    <T> T parseStateless(java.lang.Class<T> type,
                         ICommandArgument arg)
                  throws CommandInvalidTypeException
    ```


    Attempt to parse the specified argument with a stateless [`IArgParser`](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser") that outputs the specified class.
    Parameters:`type` \- The type to try and parse the argument into.`arg` \- The argument to parse.Returns:An instance of the specified class.Throws:`CommandInvalidTypeException` \- If the parsing failed

  - #### parseStated



    ```
    <T,S> T parseStated(java.lang.Class<T> type,
                        java.lang.Class<S> stateKlass,
                        ICommandArgument arg,
                        S state)
                 throws CommandInvalidTypeException
    ```


    Attempt to parse the specified argument with a stated [`IArgParser`](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser") that outputs the specified class.
    Parameters:`type` \- The type to try and parse the argument into.`arg` \- The argument to parse.`state` \- The state to pass to the [`IArgParser.Stated`](../../../../baritone/api/command/argparser/IArgParser.Stated.html "interface in baritone.api.command.argparser").Returns:An instance of the specified class.Throws:`CommandInvalidTypeException` \- If the parsing failedSee Also:[`IArgParser.Stated`](../../../../baritone/api/command/argparser/IArgParser.Stated.html "interface in baritone.api.command.argparser")

  - #### getRegistry



    ```
    Registry<IArgParser> getRegistry()
    ```