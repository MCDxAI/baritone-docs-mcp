CommandNoParserForTypeException (baritone 1.2.15 API)

baritone.api.command.exception

## Class CommandNoParserForTypeException

- java.lang.Object
  - java.lang.Throwable
    - java.lang.Exception
      - java.lang.RuntimeException
        - [baritone.api.command.exception.CommandUnhandledException](../../../../baritone/api/command/exception/CommandUnhandledException.html "class in baritone.api.command.exception")
          - baritone.api.command.exception.CommandNoParserForTypeException

- All Implemented Interfaces:[ICommandException](../../../../baritone/api/command/exception/ICommandException.html "interface in baritone.api.command.exception"), java.io.Serializable

* * *





```
public class CommandNoParserForTypeException
extends CommandUnhandledException
```

See Also:[Serialized Form](../../../../serialized-form.html#baritone.api.command.exception.CommandNoParserForTypeException)

- ### Constructor Summary

ConstructorsConstructor and Description`CommandNoParserForTypeException(java.lang.Class<?> klass)`

- ### Method Summary



  - ### Methods inherited from class baritone.api.command.exception. [CommandUnhandledException](../../../../baritone/api/command/exception/CommandUnhandledException.html "class in baritone.api.command.exception")

     `handle`

  - ### Methods inherited from class java.lang.Throwable

     `addSuppressed, fillInStackTrace, getCause, getLocalizedMessage, getMessage, getStackTrace, getSuppressed, initCause, printStackTrace, printStackTrace, printStackTrace, setStackTrace, toString`

  - ### Methods inherited from class java.lang.Object

     `clone, equals, finalize, getClass, hashCode, notify, notifyAll, wait, wait, wait`

  - ### Methods inherited from interface baritone.api.command.exception. [ICommandException](../../../../baritone/api/command/exception/ICommandException.html "interface in baritone.api.command.exception")

     `getMessage`

- ### Constructor Detail


  - #### CommandNoParserForTypeException



    ```
    public CommandNoParserForTypeException(java.lang.Class<?> klass)
    ```