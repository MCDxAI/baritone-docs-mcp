CommandInvalidStateException (baritone 1.2.15 API)

baritone.api.command.exception

## Class CommandInvalidStateException

- java.lang.Object
  - java.lang.Throwable
    - java.lang.Exception
      - [baritone.api.command.exception.CommandException](../../../../baritone/api/command/exception/CommandException.html "class in baritone.api.command.exception")
        - [baritone.api.command.exception.CommandErrorMessageException](../../../../baritone/api/command/exception/CommandErrorMessageException.html "class in baritone.api.command.exception")
          - baritone.api.command.exception.CommandInvalidStateException

- All Implemented Interfaces:[ICommandException](../../../../baritone/api/command/exception/ICommandException.html "interface in baritone.api.command.exception"), java.io.Serializable

* * *





```
public class CommandInvalidStateException
extends CommandErrorMessageException
```

See Also:[Serialized Form](../../../../serialized-form.html#baritone.api.command.exception.CommandInvalidStateException)

- ### Constructor Summary

ConstructorsConstructor and Description`CommandInvalidStateException(java.lang.String reason)`

- ### Method Summary



  - ### Methods inherited from class java.lang.Throwable

     `addSuppressed, fillInStackTrace, getCause, getLocalizedMessage, getMessage, getStackTrace, getSuppressed, initCause, printStackTrace, printStackTrace, printStackTrace, setStackTrace, toString`

  - ### Methods inherited from class java.lang.Object

     `clone, equals, finalize, getClass, hashCode, notify, notifyAll, wait, wait, wait`

  - ### Methods inherited from interface baritone.api.command.exception. [ICommandException](../../../../baritone/api/command/exception/ICommandException.html "interface in baritone.api.command.exception")

     `getMessage, handle`

- ### Constructor Detail


  - #### CommandInvalidStateException



    ```
    public CommandInvalidStateException(java.lang.String reason)
    ```