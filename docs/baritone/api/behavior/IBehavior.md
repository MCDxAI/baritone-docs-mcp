IBehavior (baritone 1.2.15 API)

baritone.api.behavior

## Interface IBehavior

- All Superinterfaces:[AbstractGameEventListener](../../../baritone/api/event/listener/AbstractGameEventListener.html "interface in baritone.api.event.listener"), [IGameEventListener](../../../baritone/api/event/listener/IGameEventListener.html "interface in baritone.api.event.listener")All Known Subinterfaces:[IInputOverrideHandler](../../../baritone/api/utils/IInputOverrideHandler.html "interface in baritone.api.utils"), [ILookBehavior](../../../baritone/api/behavior/ILookBehavior.html "interface in baritone.api.behavior"), [IPathingBehavior](../../../baritone/api/behavior/IPathingBehavior.html "interface in baritone.api.behavior")

* * *





```
public interface IBehavior
extends AbstractGameEventListener
```


A behavior is simply a type that is able to listen to events.
Since:9/23/2018See Also:[`IGameEventListener`](../../../baritone/api/event/listener/IGameEventListener.html "interface in baritone.api.event.listener")

- ### Method Summary


  - ### Methods inherited from interface baritone.api.event.listener. [AbstractGameEventListener](../../../baritone/api/event/listener/AbstractGameEventListener.html "interface in baritone.api.event.listener")

     `onBlockInteract, onChunkEvent, onPathEvent, onPlayerDeath, onPlayerRotationMove, onPlayerSprintState, onPlayerUpdate, onPreTabComplete, onReceivePacket, onRenderPass, onSendChatMessage, onSendPacket, onTick, onWorldEvent`