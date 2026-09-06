CommandInvalidTypeException (baritone 1.2.15 API)

baritone.api.command.exception

## Class CommandInvalidTypeException

- java.lang.Object
  - java.lang.Throwable
    - java.lang.Exception
      - [baritone.api.command.exception.CommandException](../../../../baritone/api/command/exception/CommandException.html "class in baritone.api.command.exception")
        - [baritone.api.command.exception.CommandErrorMessageException](../../../../baritone/api/command/exception/CommandErrorMessageException.html "class in baritone.api.command.exception")
          - [baritone.api.command.exception.CommandInvalidArgumentException](../../../../baritone/api/command/exception/CommandInvalidArgumentException.html "class in baritone.api.command.exception")
            - baritone.api.command.exception.CommandInvalidTypeException

- All Implemented Interfaces:[ICommandException](../../../../baritone/api/command/exception/ICommandException.html "interface in baritone.api.command.exception"), java.io.Serializable

* * *





```
public class CommandInvalidTypeException
extends CommandInvalidArgumentException
```

See Also:[Serialized Form](../../../../serialized-form.html#baritone.api.command.exception.CommandInvalidTypeException)

- ### Field Summary


  - ### Fields inherited from class baritone.api.command.exception. [CommandInvalidArgumentException](../../../../baritone/api/command/exception/CommandInvalidArgumentException.html "class in baritone.api.command.exception")

     `arg`

- ### Constructor Summary

ConstructorsConstructor and Description`CommandInvalidTypeException(ICommandArgument arg,
                             java.lang.String expected)``CommandInvalidTypeException(ICommandArgument arg,
                             java.lang.String expected,
                             java.lang.String got)``CommandInvalidTypeException(ICommandArgument arg,
                             java.lang.String expected,
                             java.lang.String got,
                             java.lang.Throwable cause)``CommandInvalidTypeException(ICommandArgument arg,
                             java.lang.String expected,
                             java.lang.Throwable cause)`

- ### Method Summary



  - ### Methods inherited from class java.lang.Throwable

     `addSuppressed, fillInStackTrace, getCause, getLocalizedMessage, getMessage, getStackTrace, getSuppressed, initCause, printStackTrace, printStackTrace, printStackTrace, setStackTrace, toString`

  - ### Methods inherited from class java.lang.Object

     `clone, equals, finalize, getClass, hashCode, notify, notifyAll, wait, wait, wait`

  - ### Methods inherited from interface baritone.api.command.exception. [ICommandException](../../../../baritone/api/command/exception/ICommandException.html "interface in baritone.api.command.exception")

     `getMessage, handle`

- ### Constructor Detail



  - #### CommandInvalidTypeException



    ```
    public CommandInvalidTypeException(ICommandArgument arg,
                                       java.lang.String expected)
    ```


  - #### CommandInvalidTypeException



    ```
    public CommandInvalidTypeException(ICommandArgument arg,
                                       java.lang.String expected,
                                       java.lang.Throwable cause)
    ```


  - #### CommandInvalidTypeException



    ```
    public CommandInvalidTypeException(ICommandArgument arg,
                                       java.lang.String expected,
                                       java.lang.String got)
    ```


  - #### CommandInvalidTypeException



    ```
    public CommandInvalidTypeException(ICommandArgument arg,
                                       java.lang.String expected,
                                       java.lang.String got,
                                       java.lang.Throwable cause)
    ```