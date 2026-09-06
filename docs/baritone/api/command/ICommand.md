ICommand (baritone 1.2.15 API)

baritone.api.command

## Interface ICommand

- All Superinterfaces:[Helper](../../../baritone/api/utils/Helper.html "interface in baritone.api.utils")All Known Implementing Classes:[Command](../../../baritone/api/command/Command.html "class in baritone.api.command")

* * *





```
public interface ICommand
extends Helper
```


The base for a command.
Since:10/7/2019

- ### Field Summary


  - ### Fields inherited from interface baritone.api.utils. [Helper](../../../baritone/api/utils/Helper.html "interface in baritone.api.utils")

     `HELPER, mc`

- ### Method Summary

All Methods[Instance Methods](javascript:show(2);)[Abstract Methods](javascript:show(4);)[Default Methods](javascript:show(16);)Modifier and TypeMethod and Description`void``execute(java.lang.String label,
         IArgConsumer args)`

Called when this command is executed.

`java.util.List<java.lang.String>``getLongDesc()``java.util.List<java.lang.String>``getNames()``java.lang.String``getShortDesc()``default boolean``hiddenFromHelp()``java.util.stream.Stream<java.lang.String>``tabComplete(java.lang.String label,
             IArgConsumer args)`

Called when the command needs to tab complete.


  - ### Methods inherited from interface baritone.api.utils. [Helper](../../../baritone/api/utils/Helper.html "interface in baritone.api.utils")

     `getPrefix, logDebug, logDirect, logDirect, logDirect, logDirect, logDirect, logDirect, logNotification, logNotification, logNotificationDirect, logNotificationDirect, logToast, logToast, logToast`

- ### Method Detail



  - #### execute



    ```
    void execute(java.lang.String label,
                 IArgConsumer args)
          throws CommandException
    ```


    Called when this command is executed.
    Throws:`CommandException`

  - #### tabComplete



    ```
    java.util.stream.Stream<java.lang.String> tabComplete(java.lang.String label,
                                                          IArgConsumer args)
                                                   throws CommandException
    ```


    Called when the command needs to tab complete. Return a Stream representing the entries to put in the completions
     list.
    Throws:`CommandException`

  - #### getShortDesc



    ```
    java.lang.String getShortDesc()
    ```

    Returns:A **single-line** string containing a short description of this command's purpose.

  - #### getLongDesc



    ```
    java.util.List<java.lang.String> getLongDesc()
    ```

    Returns:A list of lines that will be printed by the help command when the user wishes to view them.

  - #### getNames



    ```
    java.util.List<java.lang.String> getNames()
    ```

    Returns:A list of the names that can be accepted to have arguments passed to this command

  - #### hiddenFromHelp



    ```
    default boolean hiddenFromHelp()
    ```

    Returns:`true` if this command should be hidden from the help menu