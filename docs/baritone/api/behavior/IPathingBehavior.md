IPathingBehavior (baritone 1.2.15 API)

baritone.api.behavior

## Interface IPathingBehavior

- All Superinterfaces:[AbstractGameEventListener](../../../baritone/api/event/listener/AbstractGameEventListener.html "interface in baritone.api.event.listener"), [IBehavior](../../../baritone/api/behavior/IBehavior.html "interface in baritone.api.behavior"), [IGameEventListener](../../../baritone/api/event/listener/IGameEventListener.html "interface in baritone.api.event.listener")

* * *





```
public interface IPathingBehavior
extends IBehavior
```

Since:9/23/2018

- ### Method Summary

All Methods[Instance Methods](javascript:show(2);)[Abstract Methods](javascript:show(4);)[Default Methods](javascript:show(16);)Modifier and TypeMethod and Description`boolean``cancelEverything()`

Cancels the pathing behavior or the current path calculation, and all processes that could be controlling path.

`java.util.Optional<java.lang.Double>``estimatedTicksToGoal()`

Returns the estimated remaining ticks to the current goal.

`void``forceCancel()`

PLEASE never call this

`IPathExecutor``getCurrent()``Goal``getGoal()``java.util.Optional<? extends IPathFinder>``getInProgress()``IPathExecutor``getNext()`

Returns the next path executor, created when planning ahead.

`default java.util.Optional<IPath>``getPath()`

Returns the current path, from the current path executor, if there is one.

`default boolean``hasPath()``boolean``isPathing()``default java.util.Optional<java.lang.Double>``ticksRemainingInSegment()`

Returns the estimated remaining ticks in the current pathing
segment.

`default java.util.Optional<java.lang.Double>``ticksRemainingInSegment(boolean includeCurrentMovement)`

Returns the estimated remaining ticks in the current pathing
segment.


  - ### Methods inherited from interface baritone.api.event.listener. [AbstractGameEventListener](../../../baritone/api/event/listener/AbstractGameEventListener.html "interface in baritone.api.event.listener")

     `onBlockInteract, onChunkEvent, onPathEvent, onPlayerDeath, onPlayerRotationMove, onPlayerSprintState, onPlayerUpdate, onPreTabComplete, onReceivePacket, onRenderPass, onSendChatMessage, onSendPacket, onTick, onWorldEvent`

- ### Method Detail



  - #### ticksRemainingInSegment



    ```
    default java.util.Optional<java.lang.Double> ticksRemainingInSegment()
    ```


    Returns the estimated remaining ticks in the current pathing
     segment. Given that the return type is an optional, `Optional.empty()`
     will be returned in the case that there is no current segment being pathed.
    Returns:The estimated remaining ticks in the current segment.

  - #### ticksRemainingInSegment



    ```
    default java.util.Optional<java.lang.Double> ticksRemainingInSegment(boolean includeCurrentMovement)
    ```


    Returns the estimated remaining ticks in the current pathing
     segment. Given that the return type is an optional, `Optional.empty()`
     will be returned in the case that there is no current segment being pathed.
    Parameters:`includeCurrentMovement` \- whether or not to include the entirety of the cost of the currently executing movement in the totalReturns:The estimated remaining ticks in the current segment.

  - #### estimatedTicksToGoal



    ```
    java.util.Optional<java.lang.Double> estimatedTicksToGoal()
    ```


    Returns the estimated remaining ticks to the current goal.
     Given that the return type is an optional, `Optional.empty()`
     will be returned in the case that there is no current goal.
    Returns:The estimated remaining ticks to the current goal.

  - #### getGoal



    ```
    Goal getGoal()
    ```

    Returns:The current pathing goal

  - #### isPathing



    ```
    boolean isPathing()
    ```

    Returns:Whether or not a path is currently being executed. This will be false if there's currently a pause.See Also:[`hasPath()`](../../../baritone/api/behavior/IPathingBehavior.html#hasPath--)

  - #### hasPath



    ```
    default boolean hasPath()
    ```

    Returns:If there is a current path. Note that the path is not necessarily being executed, for example when there
     is a pause in effect.See Also:[`isPathing()`](../../../baritone/api/behavior/IPathingBehavior.html#isPathing--)

  - #### cancelEverything



    ```
    boolean cancelEverything()
    ```


    Cancels the pathing behavior or the current path calculation, and all processes that could be controlling path.



    Basically, "MAKE IT STOP".


    Returns:Whether or not the pathing behavior was canceled. All processes are guaranteed to be canceled, but the
     PathingBehavior might be in the middle of an uncancelable action like a parkour jump

  - #### forceCancel



    ```
    void forceCancel()
    ```


    PLEASE never call this



    If cancelEverything was like "kill" this is "sudo kill -9". Or shutting off your computer.


  - #### getPath



    ```
    default java.util.Optional<IPath> getPath()
    ```


    Returns the current path, from the current path executor, if there is one.
    Returns:The current path

  - #### getInProgress



    ```
    java.util.Optional<? extends IPathFinder> getInProgress()
    ```

    Returns:The current path finder being executed

  - #### getCurrent



    ```
    IPathExecutor getCurrent()
    ```

    Returns:The current path executor

  - #### getNext



    ```
    IPathExecutor getNext()
    ```


    Returns the next path executor, created when planning ahead.
    Returns:The next path executor