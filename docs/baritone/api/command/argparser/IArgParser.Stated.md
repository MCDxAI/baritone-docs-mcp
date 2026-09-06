IArgParser.Stated (baritone 1.2.15 API)

baritone.api.command.argparser

## Interface IArgParser.Stated<T,S>

- All Superinterfaces:[IArgParser](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser") <T>Enclosing interface:[IArgParser](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser") < [T](../../../../baritone/api/command/argparser/IArgParser.html "type parameter in IArgParser") >

* * *





```
public static interface IArgParser.Stated<T,S>
extends IArgParser<T>
```


A stated argument parser is similar to a stateless one. It also takes a [`ICommandArgument`](../../../../baritone/api/command/argument/ICommandArgument.html "interface in baritone.api.command.argument"), but it also
takes a second argument that can be any type, referred to as the state.


- ### Nested Class Summary


  - ### Nested classes/interfaces inherited from interface baritone.api.command.argparser. [IArgParser](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser")

     `IArgParser.Stated<T,S>, IArgParser.Stateless<T>`

- ### Method Summary

All Methods[Instance Methods](javascript:show(2);)[Abstract Methods](javascript:show(4);)Modifier and TypeMethod and Description`java.lang.Class<S>``getStateType()``T``parseArg(ICommandArgument arg,
          S state)`
  - ### Methods inherited from interface baritone.api.command.argparser. [IArgParser](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser")

     `getTarget`

- ### Method Detail



  - #### getStateType



    ```
    java.lang.Class<S> getStateType()
    ```


  - #### parseArg



    ```
    T parseArg(ICommandArgument arg,
               S state)
        throws java.lang.Exception
    ```

    Parameters:`arg` \- The argument to parse.`state` \- Can be anything.Returns:What it was parsed into.Throws:`java.lang.RuntimeException` \- if you want the parsing to fail. The exception will be caught and turned into an
     appropriate error.`java.lang.Exception`