IBaritoneProcess (baritone 1.2.15 API)

baritone.api.process

## Interface IBaritoneProcess

- All Known Subinterfaces:[IBuilderProcess](../../../baritone/api/process/IBuilderProcess.html "interface in baritone.api.process"), [ICustomGoalProcess](../../../baritone/api/process/ICustomGoalProcess.html "interface in baritone.api.process"), [IExploreProcess](../../../baritone/api/process/IExploreProcess.html "interface in baritone.api.process"), [IFarmProcess](../../../baritone/api/process/IFarmProcess.html "interface in baritone.api.process"), [IFollowProcess](../../../baritone/api/process/IFollowProcess.html "interface in baritone.api.process"), [IGetToBlockProcess](../../../baritone/api/process/IGetToBlockProcess.html "interface in baritone.api.process"), [IMineProcess](../../../baritone/api/process/IMineProcess.html "interface in baritone.api.process")

* * *





```
public interface IBaritoneProcess
```


A process that can control the PathingBehavior.



Differences between a baritone process and a behavior:




- Only one baritone process can be active at a time
- PathingBehavior can only be controlled by a process

That's it actually

- ### Field Summary

FieldsModifier and TypeField and Description`static double``DEFAULT_PRIORITY`

Default priority.


- ### Method Summary

All Methods[Instance Methods](javascript:show(2);)[Abstract Methods](javascript:show(4);)[Default Methods](javascript:show(16);)Modifier and TypeMethod and Description`default java.lang.String``displayName()`

Returns a user-friendly name for this process.

`java.lang.String``displayName0()``boolean``isActive()`

Would this process like to be in control?

`boolean``isTemporary()`

Returns whether or not this process should be treated as "temporary".

`void``onLostControl()`

Called if [`isActive()`](../../../baritone/api/process/IBaritoneProcess.html#isActive--) returned `true`, but another non-temporary
process has control.

`PathingCommand``onTick(boolean calcFailed,
        boolean isSafeToCancel)`

Called when this process is in control of pathing; Returns what Baritone should do.

`default double``priority()`

Used to determine which Process gains control if multiple are reporting [`isActive()`](../../../baritone/api/process/IBaritoneProcess.html#isActive--).

- ### Field Detail


  - #### DEFAULT\_PRIORITY



    ```
    static final double DEFAULT_PRIORITY
    ```


    Default priority. Most normal processes should have this value.



    Some examples of processes that should have different values might include some kind of automated mob avoidance
    that would be temporary and would forcefully take control. Same for something that pauses pathing for auto eat, etc.





    The value is -1 beacuse that's what Impact 4.5's beta auto walk returns and I want to tie with it.


    See Also:[Constant Field Values](../../../constant-values.html#baritone.api.process.IBaritoneProcess.DEFAULT_PRIORITY)

- ### Method Detail



  - #### isActive



    ```
    boolean isActive()
    ```


    Would this process like to be in control?
    Returns:Whether or not this process would like to be in contorl.

  - #### onTick



    ```
    PathingCommand onTick(boolean calcFailed,
                          boolean isSafeToCancel)
    ```


    Called when this process is in control of pathing; Returns what Baritone should do.
    Parameters:`calcFailed` \- `true` if this specific process was in control last tick,
     and there was a [`PathEvent.CALC_FAILED`](../../../baritone/api/event/events/PathEvent.html#CALC_FAILED) event last tick`isSafeToCancel` \- `true` if a [`PathingCommandType.REQUEST_PAUSE`](../../../baritone/api/process/PathingCommandType.html#REQUEST_PAUSE) would happen this tick, and
     [`IPathingBehavior`](../../../baritone/api/behavior/IPathingBehavior.html "interface in baritone.api.behavior") wouldn't actually tick. `false` if the PathExecutor reported
     pausing would be unsafe at the end of the last tick. Effectively "could request cancel or
     pause and have it happen right away"Returns:What the [`IPathingBehavior`](../../../baritone/api/behavior/IPathingBehavior.html "interface in baritone.api.behavior") should do

  - #### isTemporary



    ```
    boolean isTemporary()
    ```


    Returns whether or not this process should be treated as "temporary".



    If a process is temporary, it doesn't call [`onLostControl()`](../../../baritone/api/process/IBaritoneProcess.html#onLostControl--) on the processes that aren't execute because of it.





    For example, `CombatPauserProcess` and `PauseForAutoEatProcess` should return `true` always,
    and should return [`isActive()`](../../../baritone/api/process/IBaritoneProcess.html#isActive--) `true` only if there's something in range this tick, or if the player would like
    to start eating this tick. `PauseForAutoEatProcess` should only actually right click once onTick is called with
    `isSafeToCancel` true though.


    Returns:Whether or not if this control is temporary

  - #### onLostControl



    ```
    void onLostControl()
    ```


    Called if [`isActive()`](../../../baritone/api/process/IBaritoneProcess.html#isActive--) returned `true`, but another non-temporary
     process has control. Effectively the same as cancel. You want control but you
     don't get it.


  - #### priority



    ```
    default double priority()
    ```


    Used to determine which Process gains control if multiple are reporting [`isActive()`](../../../baritone/api/process/IBaritoneProcess.html#isActive--). The one
     that returns the highest value will be given control.
    Returns:A double representing the priority

  - #### displayName



    ```
    default java.lang.String displayName()
    ```


    Returns a user-friendly name for this process. Suitable for a HUD.
    Returns:A display name that's suitable for a HUD

  - #### displayName0



    ```
    java.lang.String displayName0()
    ```