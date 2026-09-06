ILookBehavior (baritone 1.2.15 API)

baritone.api.behavior

## Interface ILookBehavior

- All Superinterfaces:[AbstractGameEventListener](../../../baritone/api/event/listener/AbstractGameEventListener.html "interface in baritone.api.event.listener"), [IBehavior](../../../baritone/api/behavior/IBehavior.html "interface in baritone.api.behavior"), [IGameEventListener](../../../baritone/api/event/listener/IGameEventListener.html "interface in baritone.api.event.listener")

* * *





```
public interface ILookBehavior
extends IBehavior
```

Since:9/23/2018

- ### Method Summary

All Methods[Instance Methods](javascript:show(2);)[Abstract Methods](javascript:show(4);)Modifier and TypeMethod and Description`void``updateTarget(Rotation rotation,
              boolean force)`

Updates the current [`ILookBehavior`](../../../baritone/api/behavior/ILookBehavior.html "interface in baritone.api.behavior") target to target
the specified rotations on the next tick.


  - ### Methods inherited from interface baritone.api.event.listener. [AbstractGameEventListener](../../../baritone/api/event/listener/AbstractGameEventListener.html "interface in baritone.api.event.listener")

     `onBlockInteract, onChunkEvent, onPathEvent, onPlayerDeath, onPlayerRotationMove, onPlayerSprintState, onPlayerUpdate, onPreTabComplete, onReceivePacket, onRenderPass, onSendChatMessage, onSendPacket, onTick, onWorldEvent`

- ### Method Detail


  - #### updateTarget



    ```
    void updateTarget(Rotation rotation,
                      boolean force)
    ```


    Updates the current [`ILookBehavior`](../../../baritone/api/behavior/ILookBehavior.html "interface in baritone.api.behavior") target to target
     the specified rotations on the next tick. If force is `true`,
     then freeLook will be overriden and angles will be set regardless.
     If any sort of block interaction is required, force should be `true`,
     otherwise, it should be `false`;
    Parameters:`rotation` \- The target rotations`force` \- Whether or not to "force" the rotations