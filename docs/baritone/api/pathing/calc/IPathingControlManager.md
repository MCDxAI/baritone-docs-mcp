IPathingControlManager (baritone 1.2.15 API)

baritone.api.pathing.calc

## Interface IPathingControlManager

- * * *





```
public interface IPathingControlManager
```


- ### Method Summary

All Methods[Instance Methods](javascript:show(2);)[Abstract Methods](javascript:show(4);)Modifier and TypeMethod and Description`java.util.Optional<PathingCommand>``mostRecentCommand()``java.util.Optional<IBaritoneProcess>``mostRecentInControl()``void``registerProcess(IBaritoneProcess process)`

Registers a process with this pathing control manager.

- ### Method Detail



  - #### registerProcess



    ```
    void registerProcess(IBaritoneProcess process)
    ```


    Registers a process with this pathing control manager. See [`IBaritoneProcess`](../../../../baritone/api/process/IBaritoneProcess.html "interface in baritone.api.process") for more details.
    Parameters:`process` \- The processSee Also:[`IBaritoneProcess`](../../../../baritone/api/process/IBaritoneProcess.html "interface in baritone.api.process")

  - #### mostRecentInControl



    ```
    java.util.Optional<IBaritoneProcess> mostRecentInControl()
    ```

    Returns:The most recent [`IBaritoneProcess`](../../../../baritone/api/process/IBaritoneProcess.html "interface in baritone.api.process") that had control

  - #### mostRecentCommand



    ```
    java.util.Optional<PathingCommand> mostRecentCommand()
    ```

    Returns:The most recent pathing command executed