AbstractGameEventListener (baritone 1.2.15 API)

baritone.api.event.listener

## Interface AbstractGameEventListener

- All Superinterfaces:[IGameEventListener](../../../../baritone/api/event/listener/IGameEventListener.html "interface in baritone.api.event.listener")All Known Subinterfaces:[IBehavior](../../../../baritone/api/behavior/IBehavior.html "interface in baritone.api.behavior"), [IInputOverrideHandler](../../../../baritone/api/utils/IInputOverrideHandler.html "interface in baritone.api.utils"), [ILookBehavior](../../../../baritone/api/behavior/ILookBehavior.html "interface in baritone.api.behavior"), [IPathingBehavior](../../../../baritone/api/behavior/IPathingBehavior.html "interface in baritone.api.behavior")

* * *





```
public interface AbstractGameEventListener
extends IGameEventListener
```


An implementation of [`IGameEventListener`](../../../../baritone/api/event/listener/IGameEventListener.html "interface in baritone.api.event.listener") that has all methods
overridden with empty bodies, allowing inheritors of this class to choose
which events they would like to listen in on.
Since:8/1/2018See Also:[`IGameEventListener`](../../../../baritone/api/event/listener/IGameEventListener.html "interface in baritone.api.event.listener")

- ### Method Summary

All Methods[Instance Methods](javascript:show(2);)[Default Methods](javascript:show(16);)Modifier and TypeMethod and Description`default void``onBlockInteract(BlockInteractEvent event)`

Called when the local player interacts with a block, whether it is breaking or opening/placing.

`default void``onChunkEvent(ChunkEvent event)`

Runs before and after whenever a chunk is either loaded, unloaded, or populated.

`default void``onPathEvent(PathEvent event)`

When the pathfinder's state changes

`default void``onPlayerDeath()`

Called when the local player dies, as indicated by the creation of the `GuiGameOver` screen.

`default void``onPlayerRotationMove(RotationMoveEvent event)`

Run once per game tick from before and after the player's moveRelative method is called
and before and after the player jumps.

`default void``onPlayerSprintState(SprintStateEvent event)`

Called whenever the sprint keybind state is checked in `EntityPlayerSP.onLivingUpdate()`

`default void``onPlayerUpdate(PlayerUpdateEvent event)`

Run once per game tick from before and after the player rotation is sent to the server.

`default void``onPreTabComplete(TabCompleteEvent event)`

Runs whenever the client player tries to tab complete in chat.

`default void``onReceivePacket(PacketEvent event)`

Runs before an inbound packet is processed

`default void``onRenderPass(RenderEvent event)`

Runs once per world render pass.

`default void``onSendChatMessage(ChatEvent event)`

Runs whenever the client player sends a message to the server.

`default void``onSendPacket(PacketEvent event)`

Runs before a outbound packet is sent

`default void``onTick(TickEvent event)`

Run once per game tick before screen input is handled.

`default void``onWorldEvent(WorldEvent event)`

Runs before and after whenever a new world is loaded

- ### Method Detail



  - #### onTick



    ```
    default void onTick(TickEvent event)
    ```


    Description copied from interface: `IGameEventListener`

    Run once per game tick before screen input is handled.
    Specified by:`onTick` in interface `IGameEventListener`Parameters:`event` \- The eventSee Also:`Minecraft.runTick()`

  - #### onPlayerUpdate



    ```
    default void onPlayerUpdate(PlayerUpdateEvent event)
    ```


    Description copied from interface: `IGameEventListener`

    Run once per game tick from before and after the player rotation is sent to the server.
    Specified by:`onPlayerUpdate` in interface `IGameEventListener`Parameters:`event` \- The eventSee Also:`EntityPlayerSP.onUpdate()`

  - #### onSendChatMessage



    ```
    default void onSendChatMessage(ChatEvent event)
    ```


    Description copied from interface: `IGameEventListener`

    Runs whenever the client player sends a message to the server.
    Specified by:`onSendChatMessage` in interface `IGameEventListener`Parameters:`event` \- The eventSee Also:`EntityPlayerSP.sendChatMessage(String)`

  - #### onPreTabComplete



    ```
    default void onPreTabComplete(TabCompleteEvent event)
    ```


    Description copied from interface: `IGameEventListener`

    Runs whenever the client player tries to tab complete in chat.
    Specified by:`onPreTabComplete` in interface `IGameEventListener`Parameters:`event` \- The event

  - #### onChunkEvent



    ```
    default void onChunkEvent(ChunkEvent event)
    ```


    Description copied from interface: `IGameEventListener`

    Runs before and after whenever a chunk is either loaded, unloaded, or populated.
    Specified by:`onChunkEvent` in interface `IGameEventListener`Parameters:`event` \- The eventSee Also:`WorldClient.doPreChunk(int, int, boolean)`

  - #### onRenderPass



    ```
    default void onRenderPass(RenderEvent event)
    ```


    Description copied from interface: `IGameEventListener`

    Runs once per world render pass. Two passes are made when `GameSettings.anaglyph` is on.


    **Note:** `GameSettings.anaglyph` has been removed in Minecraft 1.13


    Specified by:`onRenderPass` in interface `IGameEventListener`Parameters:`event` \- The event

  - #### onWorldEvent



    ```
    default void onWorldEvent(WorldEvent event)
    ```


    Description copied from interface: `IGameEventListener`

    Runs before and after whenever a new world is loaded
    Specified by:`onWorldEvent` in interface `IGameEventListener`Parameters:`event` \- The eventSee Also:`Minecraft.loadWorld(WorldClient, String)`

  - #### onSendPacket



    ```
    default void onSendPacket(PacketEvent event)
    ```


    Description copied from interface: `IGameEventListener`

    Runs before a outbound packet is sent
    Specified by:`onSendPacket` in interface `IGameEventListener`Parameters:`event` \- The eventSee Also:`Packet`,
    `GenericFutureListener`

  - #### onReceivePacket



    ```
    default void onReceivePacket(PacketEvent event)
    ```


    Description copied from interface: `IGameEventListener`

    Runs before an inbound packet is processed
    Specified by:`onReceivePacket` in interface `IGameEventListener`Parameters:`event` \- The eventSee Also:`Packet`,
    `GenericFutureListener`

  - #### onPlayerRotationMove



    ```
    default void onPlayerRotationMove(RotationMoveEvent event)
    ```


    Description copied from interface: `IGameEventListener`

    Run once per game tick from before and after the player's moveRelative method is called
     and before and after the player jumps.
    Specified by:`onPlayerRotationMove` in interface `IGameEventListener`Parameters:`event` \- The eventSee Also:`Entity.moveRelative(float, float, float, float)`

  - #### onPlayerSprintState



    ```
    default void onPlayerSprintState(SprintStateEvent event)
    ```


    Description copied from interface: `IGameEventListener`

    Called whenever the sprint keybind state is checked in `EntityPlayerSP.onLivingUpdate()`
    Specified by:`onPlayerSprintState` in interface `IGameEventListener`Parameters:`event` \- The eventSee Also:`EntityPlayerSP.onLivingUpdate()`

  - #### onBlockInteract



    ```
    default void onBlockInteract(BlockInteractEvent event)
    ```


    Description copied from interface: `IGameEventListener`

    Called when the local player interacts with a block, whether it is breaking or opening/placing.
    Specified by:`onBlockInteract` in interface `IGameEventListener`Parameters:`event` \- The event

  - #### onPlayerDeath



    ```
    default void onPlayerDeath()
    ```


    Description copied from interface: `IGameEventListener`

    Called when the local player dies, as indicated by the creation of the `GuiGameOver` screen.
    Specified by:`onPlayerDeath` in interface `IGameEventListener`See Also:`GuiGameOver`

  - #### onPathEvent



    ```
    default void onPathEvent(PathEvent event)
    ```


    Description copied from interface: `IGameEventListener`

    When the pathfinder's state changes
    Specified by:`onPathEvent` in interface `IGameEventListener`Parameters:`event` \- The event