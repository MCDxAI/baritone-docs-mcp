IInputOverrideHandler (baritone 1.2.15 API)

baritone.api.utils

## Interface IInputOverrideHandler

- All Superinterfaces:[AbstractGameEventListener](../../../baritone/api/event/listener/AbstractGameEventListener.html "interface in baritone.api.event.listener"), [IBehavior](../../../baritone/api/behavior/IBehavior.html "interface in baritone.api.behavior"), [IGameEventListener](../../../baritone/api/event/listener/IGameEventListener.html "interface in baritone.api.event.listener")

* * *





```
public interface IInputOverrideHandler
extends IBehavior
```

Since:11/12/2018

- ### Method Summary

All Methods[Instance Methods](javascript:show(2);)[Abstract Methods](javascript:show(4);)Modifier and TypeMethod and Description`void``clearAllKeys()``boolean``isInputForcedDown(Input input)``void``setInputForceState(Input input,
                    boolean forced)`
  - ### Methods inherited from interface baritone.api.event.listener. [AbstractGameEventListener](../../../baritone/api/event/listener/AbstractGameEventListener.html "interface in baritone.api.event.listener")

     `onBlockInteract, onChunkEvent, onPathEvent, onPlayerDeath, onPlayerRotationMove, onPlayerSprintState, onPlayerUpdate, onPreTabComplete, onReceivePacket, onRenderPass, onSendChatMessage, onSendPacket, onTick, onWorldEvent`

- ### Method Detail



  - #### isInputForcedDown



    ```
    boolean isInputForcedDown(Input input)
    ```


  - #### setInputForceState



    ```
    void setInputForceState(Input input,
                            boolean forced)
    ```


  - #### clearAllKeys



    ```
    void clearAllKeys()
    ```