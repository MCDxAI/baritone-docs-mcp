CommandUnhandledException (baritone 1.2.15 API)

baritone.api.command.exception

## Class CommandUnhandledException

- java.lang.Object
  - java.lang.Throwable
    - java.lang.Exception
      - java.lang.RuntimeException
        - baritone.api.command.exception.CommandUnhandledException

- All Implemented Interfaces:[ICommandException](../../../../baritone/api/command/exception/ICommandException.html "interface in baritone.api.command.exception"), java.io.SerializableDirect Known Subclasses:[CommandNoParserForTypeException](../../../../baritone/api/command/exception/CommandNoParserForTypeException.html "class in baritone.api.command.exception")

* * *





```
public class CommandUnhandledException
extends java.lang.RuntimeException
implements ICommandException
```

See Also:[Serialized Form](../../../../serialized-form.html#baritone.api.command.exception.CommandUnhandledException)

- ### Constructor Summary

ConstructorsConstructor and Description`CommandUnhandledException(java.lang.String message)``CommandUnhandledException(java.lang.Throwable cause)`

- ### Method Summary

All Methods[Instance Methods](javascript:show(2);)[Concrete Methods](javascript:show(8);)Modifier and TypeMethod and Description`void``handle(ICommand command,
        java.util.List<ICommandArgument> args)`

Called when this exception is thrown, to handle the exception.



  - ### Methods inherited from class java.lang.Throwable

     `addSuppressed, fillInStackTrace, getCause, getLocalizedMessage, getMessage, getStackTrace, getSuppressed, initCause, printStackTrace, printStackTrace, printStackTrace, setStackTrace, toString`

  - ### Methods inherited from class java.lang.Object

     `clone, equals, finalize, getClass, hashCode, notify, notifyAll, wait, wait, wait`

  - ### Methods inherited from interface baritone.api.command.exception. [ICommandException](../../../../baritone/api/command/exception/ICommandException.html "interface in baritone.api.command.exception")

     `getMessage`

- ### Constructor Detail



  - #### CommandUnhandledException



    ```
    public CommandUnhandledException(java.lang.String message)
    ```


  - #### CommandUnhandledException



    ```
    public CommandUnhandledException(java.lang.Throwable cause)
    ```

- ### Method Detail


  - #### handle



    ```
    public void handle(ICommand command,
                       java.util.List<ICommandArgument> args)
    ```


    Description copied from interface: `ICommandException`

    Called when this exception is thrown, to handle the exception.
    Specified by:`handle` in interface `ICommandException`Parameters:`command` \- The command that threw it.`args` \- The arguments the command was called with.