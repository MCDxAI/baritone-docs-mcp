ICommandException (baritone 1.2.15 API)

baritone.api.command.exception

## Interface ICommandException

- All Known Implementing Classes:[CommandErrorMessageException](../../../../baritone/api/command/exception/CommandErrorMessageException.html "class in baritone.api.command.exception"), [CommandException](../../../../baritone/api/command/exception/CommandException.html "class in baritone.api.command.exception"), [CommandInvalidArgumentException](../../../../baritone/api/command/exception/CommandInvalidArgumentException.html "class in baritone.api.command.exception"), [CommandInvalidStateException](../../../../baritone/api/command/exception/CommandInvalidStateException.html "class in baritone.api.command.exception"), [CommandInvalidTypeException](../../../../baritone/api/command/exception/CommandInvalidTypeException.html "class in baritone.api.command.exception"), [CommandNoParserForTypeException](../../../../baritone/api/command/exception/CommandNoParserForTypeException.html "class in baritone.api.command.exception"), [CommandNotEnoughArgumentsException](../../../../baritone/api/command/exception/CommandNotEnoughArgumentsException.html "class in baritone.api.command.exception"), [CommandNotFoundException](../../../../baritone/api/command/exception/CommandNotFoundException.html "class in baritone.api.command.exception"), [CommandTooManyArgumentsException](../../../../baritone/api/command/exception/CommandTooManyArgumentsException.html "class in baritone.api.command.exception"), [CommandUnhandledException](../../../../baritone/api/command/exception/CommandUnhandledException.html "class in baritone.api.command.exception")

* * *





```
public interface ICommandException
```


The base for a Baritone Command Exception, checked or unchecked. Provides a
[`handle(ICommand, List)`](../../../../baritone/api/command/exception/ICommandException.html#handle-baritone.api.command.ICommand-java.util.List-) method that is used to provide useful output
to the user for diagnosing issues that may have occurred during execution.



Anything implementing this interface should be assignable to `Exception`.


Since:9/20/2019

- ### Method Summary

All Methods[Instance Methods](javascript:show(2);)[Abstract Methods](javascript:show(4);)[Default Methods](javascript:show(16);)Modifier and TypeMethod and Description`java.lang.String``getMessage()``default void``handle(ICommand command,
        java.util.List<ICommandArgument> args)`

Called when this exception is thrown, to handle the exception.

- ### Method Detail



  - #### getMessage



    ```
    java.lang.String getMessage()
    ```

    Returns:The exception detailsSee Also:`Throwable.getMessage()`

  - #### handle



    ```
    default void handle(ICommand command,
                        java.util.List<ICommandArgument> args)
    ```


    Called when this exception is thrown, to handle the exception.
    Parameters:`command` \- The command that threw it.`args` \- The arguments the command was called with.