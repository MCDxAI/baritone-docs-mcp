IBaritone (baritone 1.2.15 API)

baritone.api

## Interface IBaritone

- * * *





```
public interface IBaritone
```

Since:9/29/2018

- ### Method Summary

All Methods[Instance Methods](javascript:show(2);)[Abstract Methods](javascript:show(4);)Modifier and TypeMethod and Description`IBuilderProcess``getBuilderProcess()``ICommandManager``getCommandManager()``ICustomGoalProcess``getCustomGoalProcess()``IExploreProcess``getExploreProcess()``IFarmProcess``getFarmProcess()``IFollowProcess``getFollowProcess()``IEventBus``getGameEventHandler()``IGetToBlockProcess``getGetToBlockProcess()``IInputOverrideHandler``getInputOverrideHandler()``ILookBehavior``getLookBehavior()``IMineProcess``getMineProcess()``IPathingBehavior``getPathingBehavior()``IPathingControlManager``getPathingControlManager()`

Returns the [`IPathingControlManager`](../../baritone/api/pathing/calc/IPathingControlManager.html "interface in baritone.api.pathing.calc") for this [`IBaritone`](../../baritone/api/IBaritone.html "interface in baritone.api") instance, which is responsible
for managing the [`IBaritoneProcess`](../../baritone/api/process/IBaritoneProcess.html "interface in baritone.api.process") es which control the [`IPathingBehavior`](../../baritone/api/behavior/IPathingBehavior.html "interface in baritone.api.behavior") state.

`IPlayerContext``getPlayerContext()``ISelectionManager``getSelectionManager()``IWorldProvider``getWorldProvider()``void``openClick()`

Open click

- ### Method Detail



  - #### getPathingBehavior



    ```
    IPathingBehavior getPathingBehavior()
    ```

    Returns:The [`IPathingBehavior`](../../baritone/api/behavior/IPathingBehavior.html "interface in baritone.api.behavior") instanceSee Also:[`IPathingBehavior`](../../baritone/api/behavior/IPathingBehavior.html "interface in baritone.api.behavior")

  - #### getLookBehavior



    ```
    ILookBehavior getLookBehavior()
    ```

    Returns:The [`ILookBehavior`](../../baritone/api/behavior/ILookBehavior.html "interface in baritone.api.behavior") instanceSee Also:[`ILookBehavior`](../../baritone/api/behavior/ILookBehavior.html "interface in baritone.api.behavior")

  - #### getFollowProcess



    ```
    IFollowProcess getFollowProcess()
    ```

    Returns:The [`IFollowProcess`](../../baritone/api/process/IFollowProcess.html "interface in baritone.api.process") instanceSee Also:[`IFollowProcess`](../../baritone/api/process/IFollowProcess.html "interface in baritone.api.process")

  - #### getMineProcess



    ```
    IMineProcess getMineProcess()
    ```

    Returns:The [`IMineProcess`](../../baritone/api/process/IMineProcess.html "interface in baritone.api.process") instanceSee Also:[`IMineProcess`](../../baritone/api/process/IMineProcess.html "interface in baritone.api.process")

  - #### getBuilderProcess



    ```
    IBuilderProcess getBuilderProcess()
    ```

    Returns:The [`IBuilderProcess`](../../baritone/api/process/IBuilderProcess.html "interface in baritone.api.process") instanceSee Also:[`IBuilderProcess`](../../baritone/api/process/IBuilderProcess.html "interface in baritone.api.process")

  - #### getExploreProcess



    ```
    IExploreProcess getExploreProcess()
    ```

    Returns:The [`IExploreProcess`](../../baritone/api/process/IExploreProcess.html "interface in baritone.api.process") instanceSee Also:[`IExploreProcess`](../../baritone/api/process/IExploreProcess.html "interface in baritone.api.process")

  - #### getFarmProcess



    ```
    IFarmProcess getFarmProcess()
    ```

    Returns:The [`IFarmProcess`](../../baritone/api/process/IFarmProcess.html "interface in baritone.api.process") instanceSee Also:[`IFarmProcess`](../../baritone/api/process/IFarmProcess.html "interface in baritone.api.process")

  - #### getCustomGoalProcess



    ```
    ICustomGoalProcess getCustomGoalProcess()
    ```

    Returns:The [`ICustomGoalProcess`](../../baritone/api/process/ICustomGoalProcess.html "interface in baritone.api.process") instanceSee Also:[`ICustomGoalProcess`](../../baritone/api/process/ICustomGoalProcess.html "interface in baritone.api.process")

  - #### getGetToBlockProcess



    ```
    IGetToBlockProcess getGetToBlockProcess()
    ```

    Returns:The [`IGetToBlockProcess`](../../baritone/api/process/IGetToBlockProcess.html "interface in baritone.api.process") instanceSee Also:[`IGetToBlockProcess`](../../baritone/api/process/IGetToBlockProcess.html "interface in baritone.api.process")

  - #### getWorldProvider



    ```
    IWorldProvider getWorldProvider()
    ```

    Returns:The [`IWorldProvider`](../../baritone/api/cache/IWorldProvider.html "interface in baritone.api.cache") instanceSee Also:[`IWorldProvider`](../../baritone/api/cache/IWorldProvider.html "interface in baritone.api.cache")

  - #### getPathingControlManager



    ```
    IPathingControlManager getPathingControlManager()
    ```


    Returns the [`IPathingControlManager`](../../baritone/api/pathing/calc/IPathingControlManager.html "interface in baritone.api.pathing.calc") for this [`IBaritone`](../../baritone/api/IBaritone.html "interface in baritone.api") instance, which is responsible
     for managing the [`IBaritoneProcess`](../../baritone/api/process/IBaritoneProcess.html "interface in baritone.api.process") es which control the [`IPathingBehavior`](../../baritone/api/behavior/IPathingBehavior.html "interface in baritone.api.behavior") state.
    Returns:The [`IPathingControlManager`](../../baritone/api/pathing/calc/IPathingControlManager.html "interface in baritone.api.pathing.calc") instanceSee Also:[`IPathingControlManager`](../../baritone/api/pathing/calc/IPathingControlManager.html "interface in baritone.api.pathing.calc")

  - #### getInputOverrideHandler



    ```
    IInputOverrideHandler getInputOverrideHandler()
    ```

    Returns:The [`IInputOverrideHandler`](../../baritone/api/utils/IInputOverrideHandler.html "interface in baritone.api.utils") instanceSee Also:[`IInputOverrideHandler`](../../baritone/api/utils/IInputOverrideHandler.html "interface in baritone.api.utils")

  - #### getPlayerContext



    ```
    IPlayerContext getPlayerContext()
    ```

    Returns:The [`IPlayerContext`](../../baritone/api/utils/IPlayerContext.html "interface in baritone.api.utils") instanceSee Also:[`IPlayerContext`](../../baritone/api/utils/IPlayerContext.html "interface in baritone.api.utils")

  - #### getGameEventHandler



    ```
    IEventBus getGameEventHandler()
    ```

    Returns:The [`IEventBus`](../../baritone/api/event/listener/IEventBus.html "interface in baritone.api.event.listener") instanceSee Also:[`IEventBus`](../../baritone/api/event/listener/IEventBus.html "interface in baritone.api.event.listener")

  - #### getSelectionManager



    ```
    ISelectionManager getSelectionManager()
    ```

    Returns:The [`ISelectionManager`](../../baritone/api/selection/ISelectionManager.html "interface in baritone.api.selection") instanceSee Also:[`ISelectionManager`](../../baritone/api/selection/ISelectionManager.html "interface in baritone.api.selection")

  - #### getCommandManager



    ```
    ICommandManager getCommandManager()
    ```

    Returns:The [`ICommandManager`](../../baritone/api/command/manager/ICommandManager.html "interface in baritone.api.command.manager") instanceSee Also:[`ICommandManager`](../../baritone/api/command/manager/ICommandManager.html "interface in baritone.api.command.manager")

  - #### openClick



    ```
    void openClick()
    ```


    Open click