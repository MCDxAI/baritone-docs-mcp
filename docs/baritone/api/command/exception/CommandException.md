CommandException (baritone 1.2.15 API)

baritone.api.command.exception

## Class CommandException

- java.lang.Object
  - java.lang.Throwable
    - java.lang.Exception
      - baritone.api.command.exception.CommandException

- All Implemented Interfaces:[ICommandException](../../../../baritone/api/command/exception/ICommandException.html "interface in baritone.api.command.exception"), java.io.SerializableDirect Known Subclasses:[CommandErrorMessageException](../../../../baritone/api/command/exception/CommandErrorMessageException.html "class in baritone.api.command.exception"), [CommandNotFoundException](../../../../baritone/api/command/exception/CommandNotFoundException.html "class in baritone.api.command.exception")

* * *





```
public abstract class CommandException
extends java.lang.Exception
implements ICommandException
```

See Also:[Serialized Form](../../../../serialized-form.html#baritone.api.command.exception.CommandException)

- ### Constructor Summary

ConstructorsModifierConstructor and Description`protected ``CommandException(java.lang.String reason)``protected ``CommandException(java.lang.String reason,
                  java.lang.Throwable cause)`

- ### Method Summary



  - ### Methods inherited from class java.lang.Throwable

     `addSuppressed, fillInStackTrace, getCause, getLocalizedMessage, getMessage, getStackTrace, getSuppressed, initCause, printStackTrace, printStackTrace, printStackTrace, setStackTrace, toString`

  - ### Methods inherited from class java.lang.Object

     `clone, equals, finalize, getClass, hashCode, notify, notifyAll, wait, wait, wait`

  - ### Methods inherited from interface baritone.api.command.exception. [ICommandException](../../../../baritone/api/command/exception/ICommandException.html "interface in baritone.api.command.exception")

     `getMessage, handle`

- ### Constructor Detail



  - #### CommandException



    ```
    protected CommandException(java.lang.String reason)
    ```


  - #### CommandException



    ```
    protected CommandException(java.lang.String reason,
                               java.lang.Throwable cause)
    ```