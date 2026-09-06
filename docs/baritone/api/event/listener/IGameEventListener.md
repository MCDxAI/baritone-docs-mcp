IGameEventListener (baritone 1.2.15 API)

baritone.api.event.listener

## Interface IGameEventListener

- All Known Subinterfaces:[AbstractGameEventListener](../../../../baritone/api/event/listener/AbstractGameEventListener.html "interface in baritone.api.event.listener"), [IBehavior](../../../../baritone/api/behavior/IBehavior.html "interface in baritone.api.behavior"), [IEventBus](../../../../baritone/api/event/listener/IEventBus.html "interface in baritone.api.event.listener"), [IInputOverrideHandler](../../../../baritone/api/utils/IInputOverrideHandler.html "interface in baritone.api.utils"), [ILookBehavior](../../../../baritone/api/behavior/ILookBehavior.html "interface in baritone.api.behavior"), [IPathingBehavior](../../../../baritone/api/behavior/IPathingBehavior.html "interface in baritone.api.behavior")

* * *





```
public interface IGameEventListener
```

Since:7/31/2018

- ### Method Summary

All Methods[Instance Methods](javascript:show(2);)[Abstract Methods](javascript:show(4);)Modifier and TypeMethod and Description`void``onBlockInteract(BlockInteractEvent event)`

Called when the local player interacts with a block, whether it is breaking or opening/placing.

`void``onChunkEvent(ChunkEvent event)`

Runs before and after whenever a chunk is either loaded, unloaded, or populated.

`void``onPathEvent(PathEvent event)`

When the pathfinder's state changes

`void``onPlayerDeath()`

Called when the local player dies, as indicated by the creation of the `GuiGameOver` screen.

`void``onPlayerRotationMove(RotationMoveEvent event)`

Run once per game tick from before and after the player's moveRelative method is called
and before and after the player jumps.

`void``onPlayerSprintState(SprintStateEvent event)`

Called whenever the sprint keybind state is checked in `EntityPlayerSP.onLivingUpdate()`

`void``onPlayerUpdate(PlayerUpdateEvent event)`

Run once per game tick from before and after the player rotation is sent to the server.

`void``onPreTabComplete(TabCompleteEvent event)`

Runs whenever the client player tries to tab complete in chat.

`void``onReceivePacket(PacketEvent event)`

Runs before an inbound packet is processed

`void``onRenderPass(RenderEvent event)`

Runs once per world render pass.

`void``onSendChatMessage(ChatEvent event)`

Runs whenever the client player sends a message to the server.

`void``onSendPacket(PacketEvent event)`

Runs before a outbound packet is sent

`void``onTick(TickEvent event)`

Run once per game tick before screen input is handled.

`void``onWorldEvent(WorldEvent event)`

Runs before and after whenever a new world is loaded

- ### Method Detail



  - #### onTick



    ```
    void onTick(TickEvent event)
    ```


    Run once per game tick before screen input is handled.
    Parameters:`event` \- The eventSee Also:`Minecraft.runTick()`

  - #### onPlayerUpdate



    ```
    void onPlayerUpdate(PlayerUpdateEvent event)
    ```


    Run once per game tick from before and after the player rotation is sent to the server.
    Parameters:`event` \- The eventSee Also:`EntityPlayerSP.onUpdate()`

  - #### onSendChatMessage



    ```
    void onSendChatMessage(ChatEvent event)
    ```


    Runs whenever the client player sends a message to the server.
    Parameters:`event` \- The eventSee Also:`EntityPlayerSP.sendChatMessage(String)`

  - #### onPreTabComplete



    ```
    void onPreTabComplete(TabCompleteEvent event)
    ```


    Runs whenever the client player tries to tab complete in chat.
    Parameters:`event` \- The event

  - #### onChunkEvent



    ```
    void onChunkEvent(ChunkEvent event)
    ```


    Runs before and after whenever a chunk is either loaded, unloaded, or populated.
    Parameters:`event` \- The eventSee Also:`WorldClient.doPreChunk(int, int, boolean)`

  - #### onRenderPass



    ```
    void onRenderPass(RenderEvent event)
    ```


    Runs once per world render pass. Two passes are made when `GameSettings.anaglyph` is on.


    **Note:** `GameSettings.anaglyph` has been removed in Minecraft 1.13


    Parameters:`event` \- The event

  - #### onWorldEvent



    ```
    void onWorldEvent(WorldEvent event)
    ```


    Runs before and after whenever a new world is loaded
    Parameters:`event` \- The eventSee Also:`Minecraft.loadWorld(WorldClient, String)`

  - #### onSendPacket



    ```
    void onSendPacket(PacketEvent event)
    ```


    Runs before a outbound packet is sent
    Parameters:`event` \- The eventSee Also:`Packet`,
    `GenericFutureListener`

  - #### onReceivePacket



    ```
    void onReceivePacket(PacketEvent event)
    ```


    Runs before an inbound packet is processed
    Parameters:`event` \- The eventSee Also:`Packet`,
    `GenericFutureListener`

  - #### onPlayerRotationMove



    ```
    void onPlayerRotationMove(RotationMoveEvent event)
    ```


    Run once per game tick from before and after the player's moveRelative method is called
     and before and after the player jumps.
    Parameters:`event` \- The eventSee Also:`Entity.moveRelative(float, float, float, float)`

  - #### onPlayerSprintState



    ```
    void onPlayerSprintState(SprintStateEvent event)
    ```


    Called whenever the sprint keybind state is checked in `EntityPlayerSP.onLivingUpdate()`
    Parameters:`event` \- The eventSee Also:`EntityPlayerSP.onLivingUpdate()`

  - #### onBlockInteract



    ```
    void onBlockInteract(BlockInteractEvent event)
    ```


    Called when the local player interacts with a block, whether it is breaking or opening/placing.
    Parameters:`event` \- The event

  - #### onPlayerDeath



    ```
    void onPlayerDeath()
    ```


    Called when the local player dies, as indicated by the creation of the `GuiGameOver` screen.
    See Also:`GuiGameOver`

  - #### onPathEvent



    ```
    void onPathEvent(PathEvent event)
    ```


    When the pathfinder's state changes
    Parameters:`event` \- The event