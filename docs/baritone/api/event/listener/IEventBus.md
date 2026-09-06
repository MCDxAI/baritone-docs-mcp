IEventBus (baritone 1.2.15 API)

baritone.api.event.listener

## Interface IEventBus

- All Superinterfaces:[IGameEventListener](../../../../baritone/api/event/listener/IGameEventListener.html "interface in baritone.api.event.listener")

* * *





```
public interface IEventBus
extends IGameEventListener
```


A type of [`IGameEventListener`](../../../../baritone/api/event/listener/IGameEventListener.html "interface in baritone.api.event.listener") that can have additional listeners
registered so that they receive the events that are dispatched to this
listener.
Since:11/14/2018

- ### Method Summary

All Methods[Instance Methods](javascript:show(2);)[Abstract Methods](javascript:show(4);)Modifier and TypeMethod and Description`void``registerEventListener(IGameEventListener listener)`

Registers the specified [`IGameEventListener`](../../../../baritone/api/event/listener/IGameEventListener.html "interface in baritone.api.event.listener") to this event bus


  - ### Methods inherited from interface baritone.api.event.listener. [IGameEventListener](../../../../baritone/api/event/listener/IGameEventListener.html "interface in baritone.api.event.listener")

     `onBlockInteract, onChunkEvent, onPathEvent, onPlayerDeath, onPlayerRotationMove, onPlayerSprintState, onPlayerUpdate, onPreTabComplete, onReceivePacket, onRenderPass, onSendChatMessage, onSendPacket, onTick, onWorldEvent`

- ### Method Detail


  - #### registerEventListener



    ```
    void registerEventListener(IGameEventListener listener)
    ```


    Registers the specified [`IGameEventListener`](../../../../baritone/api/event/listener/IGameEventListener.html "interface in baritone.api.event.listener") to this event bus
    Parameters:`listener` \- The listener