ICommandManager (baritone 1.2.15 API)

baritone.api.command.manager

## Interface ICommandManager

- * * *





```
public interface ICommandManager
```

Since:9/21/2019

- ### Method Summary

All Methods[Instance Methods](javascript:show(2);)[Abstract Methods](javascript:show(4);)Modifier and TypeMethod and Description`boolean``execute(java.lang.String string)``boolean``execute(net.minecraft.util.Tuple<java.lang.String,java.util.List<ICommandArgument>> expanded)``IBaritone``getBaritone()``ICommand``getCommand(java.lang.String name)``Registry<ICommand>``getRegistry()``java.util.stream.Stream<java.lang.String>``tabComplete(java.lang.String prefix)``java.util.stream.Stream<java.lang.String>``tabComplete(net.minecraft.util.Tuple<java.lang.String,java.util.List<ICommandArgument>> expanded)`

- ### Method Detail



  - #### getBaritone



    ```
    IBaritone getBaritone()
    ```


  - #### getRegistry



    ```
    Registry<ICommand> getRegistry()
    ```


  - #### getCommand



    ```
    ICommand getCommand(java.lang.String name)
    ```

    Parameters:`name` \- The command name to search for.Returns:The command, if found.

  - #### execute



    ```
    boolean execute(java.lang.String string)
    ```


  - #### execute



    ```
    boolean execute(net.minecraft.util.Tuple<java.lang.String,java.util.List<ICommandArgument>> expanded)
    ```


  - #### tabComplete



    ```
    java.util.stream.Stream<java.lang.String> tabComplete(net.minecraft.util.Tuple<java.lang.String,java.util.List<ICommandArgument>> expanded)
    ```


  - #### tabComplete



    ```
    java.util.stream.Stream<java.lang.String> tabComplete(java.lang.String prefix)
    ```