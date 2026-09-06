CommandInvalidArgumentException (baritone 1.2.15 API)

baritone.api.command.exception

## Class CommandInvalidArgumentException

- java.lang.Object
  - java.lang.Throwable
    - java.lang.Exception
      - [baritone.api.command.exception.CommandException](../../../../baritone/api/command/exception/CommandException.html "class in baritone.api.command.exception")
        - [baritone.api.command.exception.CommandErrorMessageException](../../../../baritone/api/command/exception/CommandErrorMessageException.html "class in baritone.api.command.exception")
          - baritone.api.command.exception.CommandInvalidArgumentException

- All Implemented Interfaces:[ICommandException](../../../../baritone/api/command/exception/ICommandException.html "interface in baritone.api.command.exception"), java.io.SerializableDirect Known Subclasses:[CommandInvalidTypeException](../../../../baritone/api/command/exception/CommandInvalidTypeException.html "class in baritone.api.command.exception")

* * *





```
public abstract class CommandInvalidArgumentException
extends CommandErrorMessageException
```

See Also:[Serialized Form](../../../../serialized-form.html#baritone.api.command.exception.CommandInvalidArgumentException)

- ### Field Summary

FieldsModifier and TypeField and Description`ICommandArgument``arg`

- ### Constructor Summary

ConstructorsModifierConstructor and Description`protected ``CommandInvalidArgumentException(ICommandArgument arg,
                                 java.lang.String message)``protected ``CommandInvalidArgumentException(ICommandArgument arg,
                                 java.lang.String message,
                                 java.lang.Throwable cause)`

- ### Method Summary



  - ### Methods inherited from class java.lang.Throwable

     `addSuppressed, fillInStackTrace, getCause, getLocalizedMessage, getMessage, getStackTrace, getSuppressed, initCause, printStackTrace, printStackTrace, printStackTrace, setStackTrace, toString`

  - ### Methods inherited from class java.lang.Object

     `clone, equals, finalize, getClass, hashCode, notify, notifyAll, wait, wait, wait`

  - ### Methods inherited from interface baritone.api.command.exception. [ICommandException](../../../../baritone/api/command/exception/ICommandException.html "interface in baritone.api.command.exception")

     `getMessage, handle`

- ### Field Detail


  - #### arg



    ```
    public final ICommandArgument arg
    ```

- ### Constructor Detail



  - #### CommandInvalidArgumentException



    ```
    protected CommandInvalidArgumentException(ICommandArgument arg,
                                              java.lang.String message)
    ```


  - #### CommandInvalidArgumentException



    ```
    protected CommandInvalidArgumentException(ICommandArgument arg,
                                              java.lang.String message,
                                              java.lang.Throwable cause)
    ```