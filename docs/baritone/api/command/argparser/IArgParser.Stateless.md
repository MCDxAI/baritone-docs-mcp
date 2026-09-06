IArgParser.Stateless (baritone 1.2.15 API)

baritone.api.command.argparser

## Interface IArgParser.Stateless<T>

- All Superinterfaces:[IArgParser](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser") <T>Enclosing interface:[IArgParser](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser") < [T](../../../../baritone/api/command/argparser/IArgParser.html "type parameter in IArgParser") >

* * *





```
public static interface IArgParser.Stateless<T>
extends IArgParser<T>
```


A stateless argument parser is just that. It takes a [`ICommandArgument`](../../../../baritone/api/command/argument/ICommandArgument.html "interface in baritone.api.command.argument") and outputs its type.


- ### Nested Class Summary


  - ### Nested classes/interfaces inherited from interface baritone.api.command.argparser. [IArgParser](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser")

     `IArgParser.Stated<T,S>, IArgParser.Stateless<T>`

- ### Method Summary

All Methods[Instance Methods](javascript:show(2);)[Abstract Methods](javascript:show(4);)Modifier and TypeMethod and Description`T``parseArg(ICommandArgument arg)`
  - ### Methods inherited from interface baritone.api.command.argparser. [IArgParser](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser")

     `getTarget`

- ### Method Detail


  - #### parseArg



    ```
    T parseArg(ICommandArgument arg)
        throws java.lang.Exception
    ```

    Parameters:`arg` \- The argument to parse.Returns:What it was parsed into.Throws:`java.lang.RuntimeException` \- if you want the parsing to fail. The exception will be caught and turned into an
     appropriate error.`java.lang.Exception`