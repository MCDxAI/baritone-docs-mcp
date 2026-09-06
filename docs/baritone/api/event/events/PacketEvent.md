PacketEvent (baritone 1.2.15 API)

baritone.api.event.events

## Class PacketEvent

- java.lang.Object
  - baritone.api.event.events.PacketEvent

- * * *





```
public final class PacketEvent
extends java.lang.Object
```

Since:8/6/2018

- ### Constructor Summary

ConstructorsConstructor and Description`PacketEvent(net.minecraft.network.NetworkManager networkManager,
             EventState state,
             net.minecraft.network.Packet<?> packet)`

- ### Method Summary

All Methods[Instance Methods](javascript:show(2);)[Concrete Methods](javascript:show(8);)Modifier and TypeMethod and Description`<T extends net.minecraft.network.Packet<?>>
T``cast()``net.minecraft.network.NetworkManager``getNetworkManager()``net.minecraft.network.Packet<?>``getPacket()``EventState``getState()`
  - ### Methods inherited from class java.lang.Object

     `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- ### Constructor Detail


  - #### PacketEvent



    ```
    public PacketEvent(net.minecraft.network.NetworkManager networkManager,
                       EventState state,
                       net.minecraft.network.Packet<?> packet)
    ```

- ### Method Detail



  - #### getNetworkManager



    ```
    public final net.minecraft.network.NetworkManager getNetworkManager()
    ```


  - #### getState



    ```
    public final EventState getState()
    ```


  - #### getPacket



    ```
    public final net.minecraft.network.Packet<?> getPacket()
    ```


  - #### cast



    ```
    public final <T extends net.minecraft.network.Packet<?>> T cast()
    ```