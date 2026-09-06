CommandErrorMessageException (baritone 1.2.15 API)

baritone.api.command.exception

## Class CommandErrorMessageException

- java.lang.Object
  - java.lang.Throwable
    - java.lang.Exception
      - [baritone.api.command.exception.CommandException](../../../../baritone/api/command/exception/CommandException.html "class in baritone.api.command.exception")
        - baritone.api.command.exception.CommandErrorMessageException

- All Implemented Interfaces:[ICommandException](../../../../baritone/api/command/exception/ICommandException.html "interface in baritone.api.command.exception"), java.io.SerializableDirect Known Subclasses:[CommandInvalidArgumentException](../../../../baritone/api/command/exception/CommandInvalidArgumentException.html "class in baritone.api.command.exception"), [CommandInvalidStateException](../../../../baritone/api/command/exception/CommandInvalidStateException.html "class in baritone.api.command.exception"), [CommandNotEnoughArgumentsException](../../../../baritone/api/command/exception/CommandNotEnoughArgumentsException.html "class in baritone.api.command.exception"), [CommandTooManyArgumentsException](../../../../baritone/api/command/exception/CommandTooManyArgumentsException.html "class in baritone.api.command.exception")

* * *





```
public abstract class CommandErrorMessageException
extends CommandException
```

See Also:[Serialized Form](../../../../serialized-form.html#baritone.api.command.exception.CommandErrorMessageException)

- ### Constructor Summary

ConstructorsModifierConstructor and Description`protected ``CommandErrorMessageException(java.lang.String reason)``protected ``CommandErrorMessageException(java.lang.String reason,
                              java.lang.Throwable cause)`

- ### Method Summary



  - ### Methods inherited from class java.lang.Throwable

     `addSuppressed, fillInStackTrace, getCause, getLocalizedMessage, getMessage, getStackTrace, getSuppressed, initCause, printStackTrace, printStackTrace, printStackTrace, setStackTrace, toString`

  - ### Methods inherited from class java.lang.Object

     `clone, equals, finalize, getClass, hashCode, notify, notifyAll, wait, wait, wait`

  - ### Methods inherited from interface baritone.api.command.exception. [ICommandException](../../../../baritone/api/command/exception/ICommandException.html "interface in baritone.api.command.exception")

     `getMessage, handle`

- ### Constructor Detail



  - #### CommandErrorMessageException



    ```
    protected CommandErrorMessageException(java.lang.String reason)
    ```


  - #### CommandErrorMessageException



    ```
    protected CommandErrorMessageException(java.lang.String reason,
                                           java.lang.Throwable cause)
    ```