Command (baritone 1.2.15 API)

baritone.api.command

## Class Command

- java.lang.Object
  - baritone.api.command.Command

- All Implemented Interfaces:[ICommand](../../../baritone/api/command/ICommand.html "interface in baritone.api.command"), [Helper](../../../baritone/api/utils/Helper.html "interface in baritone.api.utils")

* * *





```
public abstract class Command
extends java.lang.Object
implements ICommand
```


A default implementation of [`ICommand`](../../../baritone/api/command/ICommand.html "interface in baritone.api.command") which provides easy access to the
command's bound [`IBaritone`](../../../baritone/api/IBaritone.html "interface in baritone.api") instance, [`IPlayerContext`](../../../baritone/api/utils/IPlayerContext.html "interface in baritone.api.utils") and an easy
way to provide multiple valid command execution names through the default constructor.



So basically, you should use it because it provides a small amount of boilerplate,
but you're not forced to use it.


See Also:[`ICommand`](../../../baritone/api/command/ICommand.html "interface in baritone.api.command")

- ### Field Summary

FieldsModifier and TypeField and Description`protected IBaritone``baritone``protected IPlayerContext``ctx``protected java.util.List<java.lang.String>``names`

The names of this command.


  - ### Fields inherited from interface baritone.api.utils. [Helper](../../../baritone/api/utils/Helper.html "interface in baritone.api.utils")

     `HELPER, mc`

- ### Constructor Summary

ConstructorsModifierConstructor and Description`protected ``Command(IBaritone baritone,
         java.lang.String... names)`

Creates a new Baritone control command.


- ### Method Summary

All Methods[Instance Methods](javascript:show(2);)[Concrete Methods](javascript:show(8);)Modifier and TypeMethod and Description`java.util.List<java.lang.String>``getNames()`

  - ### Methods inherited from class java.lang.Object

     `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

  - ### Methods inherited from interface baritone.api.command. [ICommand](../../../baritone/api/command/ICommand.html "interface in baritone.api.command")

     `execute, getLongDesc, getShortDesc, hiddenFromHelp, tabComplete`

  - ### Methods inherited from interface baritone.api.utils. [Helper](../../../baritone/api/utils/Helper.html "interface in baritone.api.utils")

     `getPrefix, logDebug, logDirect, logDirect, logDirect, logDirect, logDirect, logDirect, logNotification, logNotification, logNotificationDirect, logNotificationDirect, logToast, logToast, logToast`

- ### Field Detail



  - #### baritone



    ```
    protected IBaritone baritone
    ```


  - #### ctx



    ```
    protected IPlayerContext ctx
    ```


  - #### names



    ```
    protected final java.util.List<java.lang.String> names
    ```


    The names of this command. This is what you put after the command prefix.

- ### Constructor Detail


  - #### Command



    ```
    protected Command(IBaritone baritone,
                      java.lang.String... names)
    ```


    Creates a new Baritone control command.
    Parameters:`names` \- The names of this command. This is what you put after the command prefix.

- ### Method Detail


  - #### getNames



    ```
    public final java.util.List<java.lang.String> getNames()
    ```

    Specified by:`getNames` in interface `ICommand`Returns:A list of the names that can be accepted to have arguments passed to this command