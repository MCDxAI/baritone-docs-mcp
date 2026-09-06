Registry (baritone 1.2.15 API)

baritone.api.command.registry

## Class Registry<V>

- java.lang.Object
  - baritone.api.command.registry.Registry<V>

- Type Parameters:`V` \- The entry type that will be stored in this registry. This can be anything, really - preferably anything
that works as a HashMap key, as that's what's used to keep track of which entries are registered or not.

* * *





```
public class Registry<V>
extends java.lang.Object
```


This registry class allows for registration and unregistration of a certain type. This is mainly designed for use by
event handlers where newly registered ones are encountered first during iteration and can therefore override older
ones. In Baritone, this is used for commands and argument parsers so that mods and addons can extend Baritone's
functionality without resorting to hacks, wrappers, or mixins.


- ### Field Summary

FieldsModifier and TypeField and Description`java.util.Collection<V>``entries`

The collection of entries that are currently in this registry.


- ### Constructor Summary

ConstructorsConstructor and Description`Registry()`

- ### Method Summary

All Methods[Instance Methods](javascript:show(2);)[Concrete Methods](javascript:show(8);)Modifier and TypeMethod and Description`java.util.Iterator<V>``descendingIterator()`

Returns an iterator that iterates over each entry in this registry, in the order they were added.

`java.util.stream.Stream<V>``descendingStream()`

Returns a stream that returns each entry in this registry, in the order they were added.

`java.util.Iterator<V>``iterator()`

Returns an iterator that iterates over each entry in this registry, with the newest elements iterated over first.

`boolean``register(V entry)`

Ensures that the entry `entry` is registered.

`boolean``registered(V entry)``java.util.stream.Stream<V>``stream()`

Returns a stream that contains each entry in this registry, with the newest elements ordered first.

`void``unregister(V entry)`

Unregisters this entry from this registry.


  - ### Methods inherited from class java.lang.Object

     `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- ### Field Detail


  - #### entries



    ```
    public final java.util.Collection<V> entries
    ```


    The collection of entries that are currently in this registry. This is a collection (and not a list) because,
     internally, entries are stored in a linked list, which is not the same as a normal list.

- ### Constructor Detail


  - #### Registry



    ```
    public Registry()
    ```

- ### Method Detail



  - #### registered



    ```
    public boolean registered(V entry)
    ```

    Parameters:`entry` \- The entry to check.Returns:If this entry is currently registered in this registry.

  - #### register



    ```
    public boolean register(V entry)
    ```


    Ensures that the entry `entry` is registered.
    Parameters:`entry` \- The entry to register.Returns:A boolean indicating whether or not this is a new registration. No matter the value of this boolean, the
     entry is always guaranteed to now be in this registry. This boolean simply indicates if the entry was _not_
     in the map prior to this method call.

  - #### unregister



    ```
    public void unregister(V entry)
    ```


    Unregisters this entry from this registry. After this method call, the entry is guaranteed to be removed from the
     registry, since each entry only ever appears once.
    Parameters:`entry` \- The entry to unregister.

  - #### iterator



    ```
    public java.util.Iterator<V> iterator()
    ```


    Returns an iterator that iterates over each entry in this registry, with the newest elements iterated over first.
     Internally, as new elements are prepended to the registry rather than appended to the end, this order is the best
     way to search through the registry if you want to discover newer items first.


  - #### descendingIterator



    ```
    public java.util.Iterator<V> descendingIterator()
    ```


    Returns an iterator that iterates over each entry in this registry, in the order they were added. Internally,
     this iterates through the registry backwards, as new elements are prepended to the registry rather than appended
     to the end. You should only do this when you need to, for example, list elements in order - it is almost always
     fine to simply use `forEach` on the [`entries`](../../../../baritone/api/command/registry/Registry.html#entries) collection instead.


  - #### stream



    ```
    public java.util.stream.Stream<V> stream()
    ```


    Returns a stream that contains each entry in this registry, with the newest elements ordered first. Internally,
     as new elements are prepended to the registry rather than appended to the end, this order is the best way to
     search through the registry if you want to discover newer items first.


  - #### descendingStream



    ```
    public java.util.stream.Stream<V> descendingStream()
    ```


    Returns a stream that returns each entry in this registry, in the order they were added. Internally, this orders
     the registry backwards, as new elements are prepended to the registry rather than appended to the end. You should
     only use this when you need to, for example, list elements in order - it is almost always fine to simply use the
     regular [`stream()`](../../../../baritone/api/command/registry/Registry.html#stream--) method instead.