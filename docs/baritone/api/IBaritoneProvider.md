IBaritoneProvider (baritone 1.2.15 API)

baritone.api

## Interface IBaritoneProvider

- * * *





```
public interface IBaritoneProvider
```


Provides the present [`IBaritone`](../../baritone/api/IBaritone.html "interface in baritone.api") instances, as well as non-baritone instance related APIs.


- ### Method Summary

All Methods[Instance Methods](javascript:show(2);)[Abstract Methods](javascript:show(4);)[Default Methods](javascript:show(16);)Modifier and TypeMethod and Description`java.util.List<IBaritone>``getAllBaritones()`

Returns all of the active [`IBaritone`](../../baritone/api/IBaritone.html "interface in baritone.api") instances.

`default IBaritone``getBaritoneForPlayer(net.minecraft.client.entity.EntityPlayerSP player)`

Provides the [`IBaritone`](../../baritone/api/IBaritone.html "interface in baritone.api") instance for a given `EntityPlayerSP`.

`ICommandSystem``getCommandSystem()`

Returns the [`ICommandSystem`](../../baritone/api/command/ICommandSystem.html "interface in baritone.api.command") instance.

`IBaritone``getPrimaryBaritone()`

Returns the primary [`IBaritone`](../../baritone/api/IBaritone.html "interface in baritone.api") instance.

`ISchematicSystem``getSchematicSystem()``IWorldScanner``getWorldScanner()`

Returns the [`IWorldScanner`](../../baritone/api/cache/IWorldScanner.html "interface in baritone.api.cache") instance.

- ### Method Detail



  - #### getPrimaryBaritone



    ```
    IBaritone getPrimaryBaritone()
    ```


    Returns the primary [`IBaritone`](../../baritone/api/IBaritone.html "interface in baritone.api") instance. This instance is persistent, and
     is represented by the local player that is created by the game itself, not a "bot"
     player through Baritone.
    Returns:The primary [`IBaritone`](../../baritone/api/IBaritone.html "interface in baritone.api") instance.

  - #### getAllBaritones



    ```
    java.util.List<IBaritone> getAllBaritones()
    ```


    Returns all of the active [`IBaritone`](../../baritone/api/IBaritone.html "interface in baritone.api") instances. This includes the local one
     returned by [`getPrimaryBaritone()`](../../baritone/api/IBaritoneProvider.html#getPrimaryBaritone--).
    Returns:All active [`IBaritone`](../../baritone/api/IBaritone.html "interface in baritone.api") instances.See Also:[`getBaritoneForPlayer(EntityPlayerSP)`](../../baritone/api/IBaritoneProvider.html#getBaritoneForPlayer-net.minecraft.client.entity.EntityPlayerSP-)

  - #### getBaritoneForPlayer



    ```
    default IBaritone getBaritoneForPlayer(net.minecraft.client.entity.EntityPlayerSP player)
    ```


    Provides the [`IBaritone`](../../baritone/api/IBaritone.html "interface in baritone.api") instance for a given `EntityPlayerSP`. This will likely be
     replaced with or be overloaded in addition to `#getBaritoneForUser(IBaritoneUser)` when
     `bot-system` is merged into `master`.
    Parameters:`player` \- The playerReturns:The [`IBaritone`](../../baritone/api/IBaritone.html "interface in baritone.api") instance.

  - #### getWorldScanner



    ```
    IWorldScanner getWorldScanner()
    ```


    Returns the [`IWorldScanner`](../../baritone/api/cache/IWorldScanner.html "interface in baritone.api.cache") instance. This is not a type returned by
     [`IBaritone`](../../baritone/api/IBaritone.html "interface in baritone.api") implementation, because it is not linked with [`IBaritone`](../../baritone/api/IBaritone.html "interface in baritone.api").
    Returns:The [`IWorldScanner`](../../baritone/api/cache/IWorldScanner.html "interface in baritone.api.cache") instance.

  - #### getCommandSystem



    ```
    ICommandSystem getCommandSystem()
    ```


    Returns the [`ICommandSystem`](../../baritone/api/command/ICommandSystem.html "interface in baritone.api.command") instance. This is not bound to a specific [`IBaritone`](../../baritone/api/IBaritone.html "interface in baritone.api")
     instance because [`ICommandSystem`](../../baritone/api/command/ICommandSystem.html "interface in baritone.api.command") itself controls global behavior for [`ICommand`](../../baritone/api/command/ICommand.html "interface in baritone.api.command") s.
    Returns:The [`ICommandSystem`](../../baritone/api/command/ICommandSystem.html "interface in baritone.api.command") instance.

  - #### getSchematicSystem



    ```
    ISchematicSystem getSchematicSystem()
    ```

    Returns:The [`ISchematicSystem`](../../baritone/api/schematic/ISchematicSystem.html "interface in baritone.api.schematic") instance.