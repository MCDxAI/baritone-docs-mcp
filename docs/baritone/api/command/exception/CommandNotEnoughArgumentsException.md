CommandNotEnoughArgumentsException (baritone 1.2.15 API)

baritone.api.command.exception

## Class CommandNotEnoughArgumentsException

- java.lang.Object
  - java.lang.Throwable
    - java.lang.Exception
      - [baritone.api.command.exception.CommandException](../../../../baritone/api/command/exception/CommandException.html "class in baritone.api.command.exception")
        - [baritone.api.command.exception.CommandErrorMessageException](../../../../baritone/api/command/exception/CommandErrorMessageException.html "class in baritone.api.command.exception")
          - baritone.api.command.exception.CommandNotEnoughArgumentsException

- All Implemented Interfaces:[ICommandException](../../../../baritone/api/command/exception/ICommandException.html "interface in baritone.api.command.exception"), java.io.Serializable

* * *





```
public class CommandNotEnoughArgumentsException
extends CommandErrorMessageException
```

See Also:[Serialized Form](../../../../serialized-form.html#baritone.api.command.exception.CommandNotEnoughArgumentsException)

- ### Constructor Summary

ConstructorsConstructor and Description`CommandNotEnoughArgumentsException(int minArgs)`

- ### Method Summary



  - ### Methods inherited from class java.lang.Throwable

     `addSuppressed, fillInStackTrace, getCause, getLocalizedMessage, getMessage, getStackTrace, getSuppressed, initCause, printStackTrace, printStackTrace, printStackTrace, setStackTrace, toString`

  - ### Methods inherited from class java.lang.Object

     `clone, equals, finalize, getClass, hashCode, notify, notifyAll, wait, wait, wait`

  - ### Methods inherited from interface baritone.api.command.exception. [ICommandException](../../../../baritone/api/command/exception/ICommandException.html "interface in baritone.api.command.exception")

     `getMessage, handle`

- ### Constructor Detail


  - #### CommandNotEnoughArgumentsException



    ```
    public CommandNotEnoughArgumentsException(int minArgs)
    ```