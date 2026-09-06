CommandNotFoundException (baritone 1.2.15 API)

baritone.api.command.exception

## Class CommandNotFoundException

- java.lang.Object
  - java.lang.Throwable
    - java.lang.Exception
      - [baritone.api.command.exception.CommandException](../../../../baritone/api/command/exception/CommandException.html "class in baritone.api.command.exception")
        - baritone.api.command.exception.CommandNotFoundException

- All Implemented Interfaces:[ICommandException](../../../../baritone/api/command/exception/ICommandException.html "interface in baritone.api.command.exception"), java.io.Serializable

* * *





```
public class CommandNotFoundException
extends CommandException
```

See Also:[Serialized Form](../../../../serialized-form.html#baritone.api.command.exception.CommandNotFoundException)

- ### Field Summary

FieldsModifier and TypeField and Description`java.lang.String``command`

- ### Constructor Summary

ConstructorsConstructor and Description`CommandNotFoundException(java.lang.String command)`

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

- ### Field Detail


  - #### command



    ```
    public final java.lang.String command
    ```

- ### Constructor Detail


  - #### CommandNotFoundException



    ```
    public CommandNotFoundException(java.lang.String command)
    ```

- ### Method Detail


  - #### handle



    ```
    public void handle(ICommand command,
                       java.util.List<ICommandArgument> args)
    ```


    Description copied from interface: `ICommandException`

    Called when this exception is thrown, to handle the exception.
    Parameters:`command` \- The command that threw it.`args` \- The arguments the command was called with.