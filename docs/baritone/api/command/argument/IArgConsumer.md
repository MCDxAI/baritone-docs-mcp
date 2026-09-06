IArgConsumer (baritone 1.2.15 API)

baritone.api.command.argument

## Interface IArgConsumer

- * * *





```
public interface IArgConsumer
```


The [`IArgConsumer`](../../../../baritone/api/command/argument/IArgConsumer.html "interface in baritone.api.command.argument") is how [`ICommand`](../../../../baritone/api/command/ICommand.html "interface in baritone.api.command") s read the arguments passed to them. This class has many benefits:



- Mutability. The whole concept of the [`IArgConsumer`](../../../../baritone/api/command/argument/IArgConsumer.html "interface in baritone.api.command.argument")} is to let you gradually consume arguments in any way
you'd like. You can change your consumption based on earlier arguments, for subcommands for example.
- You don't need to keep track of your consumption. The [`IArgConsumer`](../../../../baritone/api/command/argument/IArgConsumer.html "interface in baritone.api.command.argument")} keeps track of the arguments you
consume so that it can throw detailed exceptions whenever something is out of the ordinary. Additionally, if you
need to retrieve an argument after you've already consumed it - look no further than [`consumed()`](../../../../baritone/api/command/argument/IArgConsumer.html#consumed--)!
- Easy retrieval of many different types. If you need to retrieve an instance of an int or float for example,
look no further than [`getAs(Class)`](../../../../baritone/api/command/argument/IArgConsumer.html#getAs-java.lang.Class-). If you need a more powerful way of retrieving data, try out the many
`getDatatype...` methods.
- It's very easy to throw detailed exceptions. The [`IArgConsumer`](../../../../baritone/api/command/argument/IArgConsumer.html "interface in baritone.api.command.argument")} has many different methods that can
enforce the number of arguments, the type of arguments, and more, throwing different types of
[`CommandException`](../../../../baritone/api/command/exception/CommandException.html "class in baritone.api.command.exception") s if something seems off. You're recommended to do all validation and store all needed
data in variables BEFORE logging any data to chat via [`Helper.logDirect(String)`](../../../../baritone/api/utils/Helper.html#logDirect-java.lang.String-), so that the error
handlers can do their job and log the error to chat.

- ### Method Summary

All Methods[Instance Methods](javascript:show(2);)[Abstract Methods](javascript:show(4);)Modifier and TypeMethod and Description`ICommandArgument``consumed()``java.lang.String``consumedString()``IArgConsumer``copy()``ICommandArgument``get()`

Gets the next argument and returns it.

`java.util.LinkedList<ICommandArgument>``getArgs()``<T> T``getAs(java.lang.Class<T> type)`

Tries to use a **stateless** [`IArgParser`](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser") to parse the next argument into the specified class

`<T> T``getAsOrDefault(java.lang.Class<T> type,
                T def)`

Tries to use a **stateless** [`IArgParser`](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser") to parse the next argument into the specified class

`<T> T``getAsOrNull(java.lang.Class<T> type)`

Tries to use a **stateless** [`IArgParser`](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser") to parse the next argument into the specified class

`java.util.Deque<ICommandArgument>``getConsumed()``<T,D extends IDatatypeFor<T>>
T``getDatatypeFor(D datatype)``<T,D extends IDatatypeFor<T>>
T``getDatatypeForOrDefault(D datatype,
                         T def)``<T,D extends IDatatypeFor<T>>
T``getDatatypeForOrNull(D datatype)``<T,O,D extends IDatatypePost<T,O>>
T``getDatatypePost(D datatype,
                 O original)``<T,O,D extends IDatatypePost<T,O>>
T``getDatatypePostOrDefault(D datatype,
                          O original,
                          T _default)``<T,O,D extends IDatatypePost<T,O>>
T``getDatatypePostOrNull(D datatype,
                       O original)``<E extends java.lang.Enum<?>>
E``getEnum(java.lang.Class<E> enumClass)`

Gets an enum value from the enum class with the same name as the next argument's value

`<E extends java.lang.Enum<?>>
E``getEnumOrDefault(java.lang.Class<E> enumClass,
                  E def)`

Gets an enum value from the enum class with the same name as the next argument's value

`<E extends java.lang.Enum<?>>
E``getEnumOrNull(java.lang.Class<E> enumClass)`

Gets an enum value from the enum class with the same name as the next argument's value

`java.lang.String``getString()`

Gets the value of the next argument and returns it.

`boolean``has(int num)``boolean``hasAny()``boolean``hasAtMost(int num)``boolean``hasAtMostOne()``boolean``hasConsumed()``boolean``hasExactly(int num)``boolean``hasExactlyOne()``boolean``is(java.lang.Class<?> type)``boolean``is(java.lang.Class<?> type,
    int index)``ICommandArgument``peek()``ICommandArgument``peek(int index)``<T> T``peekAs(java.lang.Class<T> type)`

Tries to use a **stateless** [`IArgParser`](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser") to parse the next argument into the specified class

`<T> T``peekAs(java.lang.Class<T> type,
        int index)`

Tries to use a **stateless** [`IArgParser`](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser") to parse the argument at the specified index into the specified
class

`<T> T``peekAsOrDefault(java.lang.Class<T> type,
                 T def)`

Tries to use a **stateless** [`IArgParser`](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser") to parse the next argument into the specified class

`<T> T``peekAsOrDefault(java.lang.Class<T> type,
                 T def,
                 int index)`

Tries to use a **stateless** [`IArgParser`](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser") to parse the argument at the specified index into the specified
class

`<T> T``peekAsOrNull(java.lang.Class<T> type)`

Tries to use a **stateless** [`IArgParser`](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser") to parse the next argument into the specified class

`<T> T``peekAsOrNull(java.lang.Class<T> type,
              int index)`

Tries to use a **stateless** [`IArgParser`](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser") to parse the argument at the specified index into the specified
class

`<T> T``peekDatatype(IDatatypeFor<T> datatype)``<T,O> T``peekDatatype(IDatatypePost<T,O> datatype)``<T,O> T``peekDatatype(IDatatypePost<T,O> datatype,
              O original)``<T,D extends IDatatypeFor<T>>
T``peekDatatypeFor(java.lang.Class<D> datatype)`

Attempts to get the specified [`IDatatypeFor`](../../../../baritone/api/command/datatypes/IDatatypeFor.html "interface in baritone.api.command.datatypes") from this ArgConsumer

`<T,D extends IDatatypeFor<T>>
T``peekDatatypeForOrDefault(java.lang.Class<D> datatype,
                          T def)`

Attempts to get the specified [`IDatatypeFor`](../../../../baritone/api/command/datatypes/IDatatypeFor.html "interface in baritone.api.command.datatypes") from this ArgConsumer

`<T,D extends IDatatypeFor<T>>
T``peekDatatypeForOrNull(java.lang.Class<D> datatype)`

Attempts to get the specified [`IDatatypeFor`](../../../../baritone/api/command/datatypes/IDatatypeFor.html "interface in baritone.api.command.datatypes") from this ArgConsumer

`<T> T``peekDatatypeOrNull(IDatatypeFor<T> datatype)``<T,O> T``peekDatatypeOrNull(IDatatypePost<T,O> datatype)``<T,O,D extends IDatatypePost<T,O>>
T``peekDatatypePost(D datatype,
                  O original)``<T,O,D extends IDatatypePost<T,O>>
T``peekDatatypePostOrDefault(D datatype,
                           O original,
                           T def)``<T,O,D extends IDatatypePost<T,O>>
T``peekDatatypePostOrNull(D datatype,
                        O original)``<E extends java.lang.Enum<?>>
E``peekEnum(java.lang.Class<E> enumClass)``<E extends java.lang.Enum<?>>
E``peekEnum(java.lang.Class<E> enumClass,
          int index)``<E extends java.lang.Enum<?>>
E``peekEnumOrNull(java.lang.Class<E> enumClass)``<E extends java.lang.Enum<?>>
E``peekEnumOrNull(java.lang.Class<E> enumClass,
                int index)``java.lang.String``peekString()``java.lang.String``peekString(int index)``java.lang.String``rawRest()`

Returns the "raw rest" of the string.

`void``requireExactly(int args)``void``requireMax(int max)``void``requireMin(int min)``<T extends IDatatype>
java.util.stream.Stream<java.lang.String>``tabCompleteDatatype(T datatype)`

- ### Method Detail



  - #### getArgs



    ```
    java.util.LinkedList<ICommandArgument> getArgs()
    ```


  - #### getConsumed



    ```
    java.util.Deque<ICommandArgument> getConsumed()
    ```


  - #### has



    ```
    boolean has(int num)
    ```

    Parameters:`num` \- The number of arguments to check forReturns:`true` if there are _at least_ `num` arguments left in this [`IArgConsumer`](../../../../baritone/api/command/argument/IArgConsumer.html "interface in baritone.api.command.argument")}See Also:[`hasAny()`](../../../../baritone/api/command/argument/IArgConsumer.html#hasAny--),
    [`hasAtMost(int)`](../../../../baritone/api/command/argument/IArgConsumer.html#hasAtMost-int-),
    [`hasExactly(int)`](../../../../baritone/api/command/argument/IArgConsumer.html#hasExactly-int-)

  - #### hasAny



    ```
    boolean hasAny()
    ```

    Returns:`true` if there is _at least_ 1 argument left in this [`IArgConsumer`](../../../../baritone/api/command/argument/IArgConsumer.html "interface in baritone.api.command.argument")}See Also:[`has(int)`](../../../../baritone/api/command/argument/IArgConsumer.html#has-int-),
    [`hasAtMostOne()`](../../../../baritone/api/command/argument/IArgConsumer.html#hasAtMostOne--),
    [`hasExactlyOne()`](../../../../baritone/api/command/argument/IArgConsumer.html#hasExactlyOne--)

  - #### hasAtMost



    ```
    boolean hasAtMost(int num)
    ```

    Parameters:`num` \- The number of arguments to check forReturns:`true` if there are _at most_ `num` arguments left in this [`IArgConsumer`](../../../../baritone/api/command/argument/IArgConsumer.html "interface in baritone.api.command.argument")}See Also:[`has(int)`](../../../../baritone/api/command/argument/IArgConsumer.html#has-int-),
    [`hasAtMost(int)`](../../../../baritone/api/command/argument/IArgConsumer.html#hasAtMost-int-),
    [`hasExactly(int)`](../../../../baritone/api/command/argument/IArgConsumer.html#hasExactly-int-)

  - #### hasAtMostOne



    ```
    boolean hasAtMostOne()
    ```

    Returns:`true` if there is _at most_ 1 argument left in this [`IArgConsumer`](../../../../baritone/api/command/argument/IArgConsumer.html "interface in baritone.api.command.argument")}See Also:[`hasAny()`](../../../../baritone/api/command/argument/IArgConsumer.html#hasAny--),
    [`hasAtMostOne()`](../../../../baritone/api/command/argument/IArgConsumer.html#hasAtMostOne--),
    [`hasExactlyOne()`](../../../../baritone/api/command/argument/IArgConsumer.html#hasExactlyOne--)

  - #### hasExactly



    ```
    boolean hasExactly(int num)
    ```

    Parameters:`num` \- The number of arguments to check forReturns:`true` if there are _exactly_ `num` arguments left in this [`IArgConsumer`](../../../../baritone/api/command/argument/IArgConsumer.html "interface in baritone.api.command.argument")}See Also:[`has(int)`](../../../../baritone/api/command/argument/IArgConsumer.html#has-int-),
    [`hasAtMost(int)`](../../../../baritone/api/command/argument/IArgConsumer.html#hasAtMost-int-)

  - #### hasExactlyOne



    ```
    boolean hasExactlyOne()
    ```

    Returns:`true` if there is _exactly_ 1 argument left in this [`IArgConsumer`](../../../../baritone/api/command/argument/IArgConsumer.html "interface in baritone.api.command.argument")}See Also:[`hasAny()`](../../../../baritone/api/command/argument/IArgConsumer.html#hasAny--),
    [`hasAtMostOne()`](../../../../baritone/api/command/argument/IArgConsumer.html#hasAtMostOne--)

  - #### peek



    ```
    ICommandArgument peek(int index)
                   throws CommandNotEnoughArgumentsException
    ```

    Parameters:`index` \- The index to peekReturns:The argument at index `index` in this [`IArgConsumer`](../../../../baritone/api/command/argument/IArgConsumer.html "interface in baritone.api.command.argument")}, with 0 being the next one. This does not
     mutate the [`IArgConsumer`](../../../../baritone/api/command/argument/IArgConsumer.html "interface in baritone.api.command.argument")}Throws:`CommandNotEnoughArgumentsException` \- If there is less than `index + 1` arguments leftSee Also:[`peek()`](../../../../baritone/api/command/argument/IArgConsumer.html#peek--),
    [`peekString(int)`](../../../../baritone/api/command/argument/IArgConsumer.html#peekString-int-),
    [`peekAs(Class, int)`](../../../../baritone/api/command/argument/IArgConsumer.html#peekAs-java.lang.Class-int-),
    [`get()`](../../../../baritone/api/command/argument/IArgConsumer.html#get--)

  - #### peek



    ```
    ICommandArgument peek()
                   throws CommandNotEnoughArgumentsException
    ```

    Returns:The next argument in this [`IArgConsumer`](../../../../baritone/api/command/argument/IArgConsumer.html "interface in baritone.api.command.argument")}. This does not mutate the [`IArgConsumer`](../../../../baritone/api/command/argument/IArgConsumer.html "interface in baritone.api.command.argument")}Throws:`CommandNotEnoughArgumentsException` \- If there is less than one argument leftSee Also:[`peek(int)`](../../../../baritone/api/command/argument/IArgConsumer.html#peek-int-),
    [`peekString()`](../../../../baritone/api/command/argument/IArgConsumer.html#peekString--),
    [`peekAs(Class)`](../../../../baritone/api/command/argument/IArgConsumer.html#peekAs-java.lang.Class-),
    [`get()`](../../../../baritone/api/command/argument/IArgConsumer.html#get--)

  - #### is



    ```
    boolean is(java.lang.Class<?> type,
               int index)
        throws CommandNotEnoughArgumentsException
    ```

    Parameters:`index` \- The index to peek`type` \- The type to check forReturns:If an ArgParser.Stateless for the specified `type` would succeed in parsing the next
     argumentThrows:`CommandNotEnoughArgumentsException` \- If there is less than `index + 1` arguments leftSee Also:[`peek()`](../../../../baritone/api/command/argument/IArgConsumer.html#peek--),
    [`getAs(Class)`](../../../../baritone/api/command/argument/IArgConsumer.html#getAs-java.lang.Class-)

  - #### is



    ```
    boolean is(java.lang.Class<?> type)
        throws CommandNotEnoughArgumentsException
    ```

    Parameters:`type` \- The type to check forReturns:If an ArgParser.Stateless for the specified `type` would succeed in parsing the next
     argumentThrows:`CommandNotEnoughArgumentsException` \- If there is less than one argument leftSee Also:[`peek()`](../../../../baritone/api/command/argument/IArgConsumer.html#peek--),
    [`getAs(Class)`](../../../../baritone/api/command/argument/IArgConsumer.html#getAs-java.lang.Class-)

  - #### peekString



    ```
    java.lang.String peekString(int index)
                         throws CommandNotEnoughArgumentsException
    ```

    Parameters:`index` \- The index to peekReturns:The value of the argument at index `index` in this [`IArgConsumer`](../../../../baritone/api/command/argument/IArgConsumer.html "interface in baritone.api.command.argument")}, with 0 being the next one
     This does not mutate the [`IArgConsumer`](../../../../baritone/api/command/argument/IArgConsumer.html "interface in baritone.api.command.argument")}Throws:`CommandNotEnoughArgumentsException` \- If there is less than `index + 1` arguments leftSee Also:[`peek()`](../../../../baritone/api/command/argument/IArgConsumer.html#peek--),
    [`peekString()`](../../../../baritone/api/command/argument/IArgConsumer.html#peekString--)

  - #### peekString



    ```
    java.lang.String peekString()
                         throws CommandNotEnoughArgumentsException
    ```

    Returns:The value of the next argument in this [`IArgConsumer`](../../../../baritone/api/command/argument/IArgConsumer.html "interface in baritone.api.command.argument")}. This does not mutate the [`IArgConsumer`](../../../../baritone/api/command/argument/IArgConsumer.html "interface in baritone.api.command.argument")}Throws:`CommandNotEnoughArgumentsException` \- If there is less than one argument leftSee Also:[`peekString(int)`](../../../../baritone/api/command/argument/IArgConsumer.html#peekString-int-),
    [`getString()`](../../../../baritone/api/command/argument/IArgConsumer.html#getString--)

  - #### peekEnum



    ```
    <E extends java.lang.Enum<?>> E peekEnum(java.lang.Class<E> enumClass,
                                             int index)
                                      throws CommandInvalidTypeException,
                                             CommandNotEnoughArgumentsException
    ```

    Parameters:`index` \- The index to peek`enumClass` \- The class to searchReturns:From the specified enum class, an enum constant of that class. The enum constant's name will match the
     next argument's valueThrows:`java.util.NoSuchElementException` \- If the constant couldn't be found`CommandInvalidTypeException``CommandNotEnoughArgumentsException`See Also:[`peekEnumOrNull(Class)`](../../../../baritone/api/command/argument/IArgConsumer.html#peekEnumOrNull-java.lang.Class-),
    [`getEnum(Class)`](../../../../baritone/api/command/argument/IArgConsumer.html#getEnum-java.lang.Class-),
    [`ICommandArgument.getEnum(Class)`](../../../../baritone/api/command/argument/ICommandArgument.html#getEnum-java.lang.Class-)

  - #### peekEnum



    ```
    <E extends java.lang.Enum<?>> E peekEnum(java.lang.Class<E> enumClass)
                                      throws CommandInvalidTypeException,
                                             CommandNotEnoughArgumentsException
    ```

    Parameters:`enumClass` \- The class to searchReturns:From the specified enum class, an enum constant of that class. The enum constant's name will match the
     next argument's valueThrows:`CommandInvalidTypeException` \- If the constant couldn't be found`CommandNotEnoughArgumentsException`See Also:[`peekEnumOrNull(Class)`](../../../../baritone/api/command/argument/IArgConsumer.html#peekEnumOrNull-java.lang.Class-),
    [`getEnum(Class)`](../../../../baritone/api/command/argument/IArgConsumer.html#getEnum-java.lang.Class-),
    [`ICommandArgument.getEnum(Class)`](../../../../baritone/api/command/argument/ICommandArgument.html#getEnum-java.lang.Class-)

  - #### peekEnumOrNull



    ```
    <E extends java.lang.Enum<?>> E peekEnumOrNull(java.lang.Class<E> enumClass,
                                                   int index)
                                            throws CommandNotEnoughArgumentsException
    ```

    Parameters:`index` \- The index to peek`enumClass` \- The class to searchReturns:From the specified enum class, an enum constant of that class. The enum constant's name will match the
     next argument's value. If no constant could be found, nullThrows:`CommandNotEnoughArgumentsException`See Also:[`peekEnum(Class)`](../../../../baritone/api/command/argument/IArgConsumer.html#peekEnum-java.lang.Class-),
    [`getEnumOrNull(Class)`](../../../../baritone/api/command/argument/IArgConsumer.html#getEnumOrNull-java.lang.Class-),
    [`ICommandArgument.getEnum(Class)`](../../../../baritone/api/command/argument/ICommandArgument.html#getEnum-java.lang.Class-)

  - #### peekEnumOrNull



    ```
    <E extends java.lang.Enum<?>> E peekEnumOrNull(java.lang.Class<E> enumClass)
                                            throws CommandNotEnoughArgumentsException
    ```

    Parameters:`enumClass` \- The class to searchReturns:From the specified enum class, an enum constant of that class. The enum constant's name will match the
     next argument's value. If no constant could be found, nullThrows:`CommandNotEnoughArgumentsException`See Also:[`peekEnum(Class)`](../../../../baritone/api/command/argument/IArgConsumer.html#peekEnum-java.lang.Class-),
    [`getEnumOrNull(Class)`](../../../../baritone/api/command/argument/IArgConsumer.html#getEnumOrNull-java.lang.Class-),
    [`ICommandArgument.getEnum(Class)`](../../../../baritone/api/command/argument/ICommandArgument.html#getEnum-java.lang.Class-)

  - #### peekAs



    ```
    <T> T peekAs(java.lang.Class<T> type,
                 int index)
          throws CommandInvalidTypeException,
                 CommandNotEnoughArgumentsException
    ```


    Tries to use a **stateless** [`IArgParser`](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser") to parse the argument at the specified index into the specified
     class



    A critical difference between [`IDatatype`](../../../../baritone/api/command/datatypes/IDatatype.html "interface in baritone.api.command.datatypes") s and [`IArgParser`](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser") s is how many arguments they can take.
    While [`IArgParser`](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser") s always operate on a single argument's value, [`IDatatype`](../../../../baritone/api/command/datatypes/IDatatype.html "interface in baritone.api.command.datatypes") s get access to the entire
    [`IArgConsumer`](../../../../baritone/api/command/argument/IArgConsumer.html "interface in baritone.api.command.argument")}.


    Parameters:`type` \- The type to peek as`index` \- The index to peekReturns:An instance of the specified typeThrows:`CommandInvalidTypeException` \- If the parsing failed`CommandNotEnoughArgumentsException`See Also:[`IArgParser`](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser"),
    [`peekAs(Class)`](../../../../baritone/api/command/argument/IArgConsumer.html#peekAs-java.lang.Class-),
    [`peekAsOrDefault(Class, Object, int)`](../../../../baritone/api/command/argument/IArgConsumer.html#peekAsOrDefault-java.lang.Class-T-int-),
    [`peekAsOrNull(Class, int)`](../../../../baritone/api/command/argument/IArgConsumer.html#peekAsOrNull-java.lang.Class-int-)

  - #### peekAs



    ```
    <T> T peekAs(java.lang.Class<T> type)
          throws CommandInvalidTypeException,
                 CommandNotEnoughArgumentsException
    ```


    Tries to use a **stateless** [`IArgParser`](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser") to parse the next argument into the specified class



    A critical difference between [`IDatatype`](../../../../baritone/api/command/datatypes/IDatatype.html "interface in baritone.api.command.datatypes") s and [`IArgParser`](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser") s is how many arguments they can take.
    While [`IArgParser`](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser") s always operate on a single argument's value, [`IDatatype`](../../../../baritone/api/command/datatypes/IDatatype.html "interface in baritone.api.command.datatypes") s get access to the entire
    [`IArgConsumer`](../../../../baritone/api/command/argument/IArgConsumer.html "interface in baritone.api.command.argument")}.


    Parameters:`type` \- The type to peek asReturns:An instance of the specified typeThrows:`CommandInvalidTypeException` \- If the parsing failed`CommandNotEnoughArgumentsException`See Also:[`IArgParser`](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser"),
    [`peekAs(Class, int)`](../../../../baritone/api/command/argument/IArgConsumer.html#peekAs-java.lang.Class-int-),
    [`peekAsOrDefault(Class, Object)`](../../../../baritone/api/command/argument/IArgConsumer.html#peekAsOrDefault-java.lang.Class-T-),
    [`peekAsOrNull(Class)`](../../../../baritone/api/command/argument/IArgConsumer.html#peekAsOrNull-java.lang.Class-)

  - #### peekAsOrDefault



    ```
    <T> T peekAsOrDefault(java.lang.Class<T> type,
                          T def,
                          int index)
                   throws CommandNotEnoughArgumentsException
    ```


    Tries to use a **stateless** [`IArgParser`](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser") to parse the argument at the specified index into the specified
     class



    A critical difference between [`IDatatype`](../../../../baritone/api/command/datatypes/IDatatype.html "interface in baritone.api.command.datatypes") s and [`IArgParser`](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser") s is how many arguments they can take.
    While [`IArgParser`](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser") s always operate on a single argument's value, [`IDatatype`](../../../../baritone/api/command/datatypes/IDatatype.html "interface in baritone.api.command.datatypes") s get access to the entire
    [`IArgConsumer`](../../../../baritone/api/command/argument/IArgConsumer.html "interface in baritone.api.command.argument")}.


    Parameters:`type` \- The type to peek as`def` \- The value to return if the argument can't be parsed`index` \- The index to peekReturns:An instance of the specified type, or `def` if it couldn't be parsedThrows:`CommandNotEnoughArgumentsException`See Also:[`IArgParser`](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser"),
    [`peekAsOrDefault(Class, Object)`](../../../../baritone/api/command/argument/IArgConsumer.html#peekAsOrDefault-java.lang.Class-T-),
    [`peekAs(Class, int)`](../../../../baritone/api/command/argument/IArgConsumer.html#peekAs-java.lang.Class-int-),
    [`peekAsOrNull(Class, int)`](../../../../baritone/api/command/argument/IArgConsumer.html#peekAsOrNull-java.lang.Class-int-)

  - #### peekAsOrDefault



    ```
    <T> T peekAsOrDefault(java.lang.Class<T> type,
                          T def)
                   throws CommandNotEnoughArgumentsException
    ```


    Tries to use a **stateless** [`IArgParser`](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser") to parse the next argument into the specified class



    A critical difference between [`IDatatype`](../../../../baritone/api/command/datatypes/IDatatype.html "interface in baritone.api.command.datatypes") s and [`IArgParser`](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser") s is how many arguments they can take.
    While [`IArgParser`](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser") s always operate on a single argument's value, [`IDatatype`](../../../../baritone/api/command/datatypes/IDatatype.html "interface in baritone.api.command.datatypes") s get access to the entire
    [`IArgConsumer`](../../../../baritone/api/command/argument/IArgConsumer.html "interface in baritone.api.command.argument")}.


    Parameters:`type` \- The type to peek as`def` \- The value to return if the argument can't be parsedReturns:An instance of the specified type, or `def` if it couldn't be parsedThrows:`CommandNotEnoughArgumentsException`See Also:[`IArgParser`](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser"),
    [`peekAsOrDefault(Class, Object, int)`](../../../../baritone/api/command/argument/IArgConsumer.html#peekAsOrDefault-java.lang.Class-T-int-),
    [`peekAs(Class)`](../../../../baritone/api/command/argument/IArgConsumer.html#peekAs-java.lang.Class-),
    [`peekAsOrNull(Class)`](../../../../baritone/api/command/argument/IArgConsumer.html#peekAsOrNull-java.lang.Class-)

  - #### peekAsOrNull



    ```
    <T> T peekAsOrNull(java.lang.Class<T> type,
                       int index)
                throws CommandNotEnoughArgumentsException
    ```


    Tries to use a **stateless** [`IArgParser`](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser") to parse the argument at the specified index into the specified
     class



    A critical difference between [`IDatatype`](../../../../baritone/api/command/datatypes/IDatatype.html "interface in baritone.api.command.datatypes") s and [`IArgParser`](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser") s is how many arguments they can take.
    While [`IArgParser`](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser") s always operate on a single argument's value, [`IDatatype`](../../../../baritone/api/command/datatypes/IDatatype.html "interface in baritone.api.command.datatypes") s get access to the entire
    [`IArgConsumer`](../../../../baritone/api/command/argument/IArgConsumer.html "interface in baritone.api.command.argument")}.


    Parameters:`type` \- The type to peek as`index` \- The index to peekReturns:An instance of the specified type, or `null` if it couldn't be parsedThrows:`CommandNotEnoughArgumentsException`See Also:[`IArgParser`](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser"),
    [`peekAsOrNull(Class)`](../../../../baritone/api/command/argument/IArgConsumer.html#peekAsOrNull-java.lang.Class-),
    [`peekAs(Class, int)`](../../../../baritone/api/command/argument/IArgConsumer.html#peekAs-java.lang.Class-int-),
    [`peekAsOrDefault(Class, Object, int)`](../../../../baritone/api/command/argument/IArgConsumer.html#peekAsOrDefault-java.lang.Class-T-int-)

  - #### peekAsOrNull



    ```
    <T> T peekAsOrNull(java.lang.Class<T> type)
                throws CommandNotEnoughArgumentsException
    ```


    Tries to use a **stateless** [`IArgParser`](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser") to parse the next argument into the specified class



    A critical difference between [`IDatatype`](../../../../baritone/api/command/datatypes/IDatatype.html "interface in baritone.api.command.datatypes") s and [`IArgParser`](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser") s is how many arguments they can take.
    While [`IArgParser`](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser") s always operate on a single argument's value, [`IDatatype`](../../../../baritone/api/command/datatypes/IDatatype.html "interface in baritone.api.command.datatypes") s get access to the entire
    [`IArgConsumer`](../../../../baritone/api/command/argument/IArgConsumer.html "interface in baritone.api.command.argument")}.


    Parameters:`type` \- The type to peek asReturns:An instance of the specified type, or `null` if it couldn't be parsedThrows:`CommandNotEnoughArgumentsException`See Also:[`IArgParser`](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser"),
    [`peekAsOrNull(Class, int)`](../../../../baritone/api/command/argument/IArgConsumer.html#peekAsOrNull-java.lang.Class-int-),
    [`peekAs(Class)`](../../../../baritone/api/command/argument/IArgConsumer.html#peekAs-java.lang.Class-),
    [`peekAsOrDefault(Class, Object)`](../../../../baritone/api/command/argument/IArgConsumer.html#peekAsOrDefault-java.lang.Class-T-)

  - #### peekDatatype



    ```
    <T> T peekDatatype(IDatatypeFor<T> datatype)
                throws CommandInvalidTypeException,
                       CommandNotEnoughArgumentsException
    ```

    Throws:`CommandInvalidTypeException``CommandNotEnoughArgumentsException`

  - #### peekDatatype



    ```
    <T,O> T peekDatatype(IDatatypePost<T,O> datatype)
                  throws CommandInvalidTypeException,
                         CommandNotEnoughArgumentsException
    ```

    Throws:`CommandInvalidTypeException``CommandNotEnoughArgumentsException`

  - #### peekDatatype



    ```
    <T,O> T peekDatatype(IDatatypePost<T,O> datatype,
                         O original)
                  throws CommandInvalidTypeException,
                         CommandNotEnoughArgumentsException
    ```

    Throws:`CommandInvalidTypeException``CommandNotEnoughArgumentsException`

  - #### peekDatatypeOrNull



    ```
    <T> T peekDatatypeOrNull(IDatatypeFor<T> datatype)
    ```


  - #### peekDatatypeOrNull



    ```
    <T,O> T peekDatatypeOrNull(IDatatypePost<T,O> datatype)
    ```


  - #### peekDatatypePost



    ```
    <T,O,D extends IDatatypePost<T,O>> T peekDatatypePost(D datatype,
                                                          O original)
                                                   throws CommandInvalidTypeException,
                                                          CommandNotEnoughArgumentsException
    ```

    Throws:`CommandInvalidTypeException``CommandNotEnoughArgumentsException`

  - #### peekDatatypePostOrDefault



    ```
    <T,O,D extends IDatatypePost<T,O>> T peekDatatypePostOrDefault(D datatype,
                                                                   O original,
                                                                   T def)
    ```


  - #### peekDatatypePostOrNull



    ```
    <T,O,D extends IDatatypePost<T,O>> T peekDatatypePostOrNull(D datatype,
                                                                O original)
    ```


  - #### peekDatatypeFor



    ```
    <T,D extends IDatatypeFor<T>> T peekDatatypeFor(java.lang.Class<D> datatype)
    ```


    Attempts to get the specified [`IDatatypeFor`](../../../../baritone/api/command/datatypes/IDatatypeFor.html "interface in baritone.api.command.datatypes") from this ArgConsumer



    A critical difference between [`IDatatype`](../../../../baritone/api/command/datatypes/IDatatype.html "interface in baritone.api.command.datatypes") s and [`IArgParser`](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser") s is how many arguments they can take.
    While [`IArgParser`](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser") s always operate on a single argument's value, [`IDatatype`](../../../../baritone/api/command/datatypes/IDatatype.html "interface in baritone.api.command.datatypes") s get access to the entire
    [`IArgConsumer`](../../../../baritone/api/command/argument/IArgConsumer.html "interface in baritone.api.command.argument")}.





    Since this is a peek operation, this ArgConsumer will not be mutated by any call to this method.


    Parameters:`datatype` \- The datatype to getReturns:The datatype instanceSee Also:[`IDatatype`](../../../../baritone/api/command/datatypes/IDatatype.html "interface in baritone.api.command.datatypes"),
    [`IDatatypeFor`](../../../../baritone/api/command/datatypes/IDatatypeFor.html "interface in baritone.api.command.datatypes")

  - #### peekDatatypeForOrDefault



    ```
    <T,D extends IDatatypeFor<T>> T peekDatatypeForOrDefault(java.lang.Class<D> datatype,
                                                             T def)
    ```


    Attempts to get the specified [`IDatatypeFor`](../../../../baritone/api/command/datatypes/IDatatypeFor.html "interface in baritone.api.command.datatypes") from this ArgConsumer



    A critical difference between [`IDatatype`](../../../../baritone/api/command/datatypes/IDatatype.html "interface in baritone.api.command.datatypes") s and [`IArgParser`](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser") s is how many arguments they can take.
    While [`IArgParser`](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser") s always operate on a single argument's value, [`IDatatype`](../../../../baritone/api/command/datatypes/IDatatype.html "interface in baritone.api.command.datatypes") s get access to the entire
    [`IArgConsumer`](../../../../baritone/api/command/argument/IArgConsumer.html "interface in baritone.api.command.argument")}.





    Since this is a peek operation, this ArgConsumer will not be mutated by any call to this method.


    Parameters:`datatype` \- The datatype to get`def` \- The default valueReturns:The datatype instance, or `def` if it throws an exceptionSee Also:[`IDatatype`](../../../../baritone/api/command/datatypes/IDatatype.html "interface in baritone.api.command.datatypes"),
    [`IDatatypeFor`](../../../../baritone/api/command/datatypes/IDatatypeFor.html "interface in baritone.api.command.datatypes")

  - #### peekDatatypeForOrNull



    ```
    <T,D extends IDatatypeFor<T>> T peekDatatypeForOrNull(java.lang.Class<D> datatype)
    ```


    Attempts to get the specified [`IDatatypeFor`](../../../../baritone/api/command/datatypes/IDatatypeFor.html "interface in baritone.api.command.datatypes") from this ArgConsumer



    A critical difference between [`IDatatype`](../../../../baritone/api/command/datatypes/IDatatype.html "interface in baritone.api.command.datatypes") s and [`IArgParser`](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser") s is how many arguments they can take.
    While [`IArgParser`](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser") s always operate on a single argument's value, [`IDatatype`](../../../../baritone/api/command/datatypes/IDatatype.html "interface in baritone.api.command.datatypes") s get access to the entire
    [`IArgConsumer`](../../../../baritone/api/command/argument/IArgConsumer.html "interface in baritone.api.command.argument")}.





    Since this is a peek operation, this ArgConsumer will not be mutated by any call to this method.


    Parameters:`datatype` \- The datatype to getReturns:The datatype instance, or `null` if it throws an exceptionSee Also:[`IDatatype`](../../../../baritone/api/command/datatypes/IDatatype.html "interface in baritone.api.command.datatypes"),
    [`IDatatypeFor`](../../../../baritone/api/command/datatypes/IDatatypeFor.html "interface in baritone.api.command.datatypes")

  - #### get



    ```
    ICommandArgument get()
                  throws CommandNotEnoughArgumentsException
    ```


    Gets the next argument and returns it. This consumes the first argument so that subsequent calls will return
     later arguments
    Returns:The next argumentThrows:`CommandNotEnoughArgumentsException` \- If there's less than one argument left

  - #### getString



    ```
    java.lang.String getString()
                        throws CommandNotEnoughArgumentsException
    ```


    Gets the value of the next argument and returns it. This consumes the first argument so that subsequent calls
     will return later arguments
    Returns:The value of the next argumentThrows:`CommandNotEnoughArgumentsException` \- If there's less than one argument left

  - #### getEnum



    ```
    <E extends java.lang.Enum<?>> E getEnum(java.lang.Class<E> enumClass)
                                     throws CommandInvalidTypeException,
                                            CommandNotEnoughArgumentsException
    ```


    Gets an enum value from the enum class with the same name as the next argument's value



    For example if you getEnum as an `EnumFacing`, and the next argument's value is "up", this will return
    `EnumFacing.UP`


    Parameters:`enumClass` \- The enum class to searchReturns:An enum constant of that class with the same name as the next argument's valueThrows:`CommandInvalidTypeException` \- If the constant couldn't be found`CommandNotEnoughArgumentsException`See Also:[`peekEnum(Class)`](../../../../baritone/api/command/argument/IArgConsumer.html#peekEnum-java.lang.Class-),
    [`getEnumOrNull(Class)`](../../../../baritone/api/command/argument/IArgConsumer.html#getEnumOrNull-java.lang.Class-),
    [`ICommandArgument.getEnum(Class)`](../../../../baritone/api/command/argument/ICommandArgument.html#getEnum-java.lang.Class-)

  - #### getEnumOrDefault



    ```
    <E extends java.lang.Enum<?>> E getEnumOrDefault(java.lang.Class<E> enumClass,
                                                     E def)
                                              throws CommandNotEnoughArgumentsException
    ```


    Gets an enum value from the enum class with the same name as the next argument's value



    For example if you getEnum as an `EnumFacing`, and the next argument's value is "up", this will return
    `EnumFacing.UP`


    Parameters:`enumClass` \- The enum class to search`def` \- The default valueReturns:An enum constant of that class with the same name as the next argument's value, or `def` if it
     couldn't be foundThrows:`CommandNotEnoughArgumentsException`See Also:[`getEnum(Class)`](../../../../baritone/api/command/argument/IArgConsumer.html#getEnum-java.lang.Class-),
    [`getEnumOrNull(Class)`](../../../../baritone/api/command/argument/IArgConsumer.html#getEnumOrNull-java.lang.Class-),
    [`peekEnumOrNull(Class)`](../../../../baritone/api/command/argument/IArgConsumer.html#peekEnumOrNull-java.lang.Class-),
    [`ICommandArgument.getEnum(Class)`](../../../../baritone/api/command/argument/ICommandArgument.html#getEnum-java.lang.Class-)

  - #### getEnumOrNull



    ```
    <E extends java.lang.Enum<?>> E getEnumOrNull(java.lang.Class<E> enumClass)
                                           throws CommandNotEnoughArgumentsException
    ```


    Gets an enum value from the enum class with the same name as the next argument's value



    For example if you getEnum as an `EnumFacing`, and the next argument's value is "up", this will return
    `EnumFacing.UP`


    Parameters:`enumClass` \- The enum class to searchReturns:An enum constant of that class with the same name as the next argument's value, or `null` if it
     couldn't be foundThrows:`CommandNotEnoughArgumentsException`See Also:[`getEnum(Class)`](../../../../baritone/api/command/argument/IArgConsumer.html#getEnum-java.lang.Class-),
    [`getEnumOrDefault(Class, Enum)`](../../../../baritone/api/command/argument/IArgConsumer.html#getEnumOrDefault-java.lang.Class-E-),
    [`peekEnumOrNull(Class)`](../../../../baritone/api/command/argument/IArgConsumer.html#peekEnumOrNull-java.lang.Class-),
    [`ICommandArgument.getEnum(Class)`](../../../../baritone/api/command/argument/ICommandArgument.html#getEnum-java.lang.Class-)

  - #### getAs



    ```
    <T> T getAs(java.lang.Class<T> type)
         throws CommandInvalidTypeException,
                CommandNotEnoughArgumentsException
    ```


    Tries to use a **stateless** [`IArgParser`](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser") to parse the next argument into the specified class



    A critical difference between [`IDatatype`](../../../../baritone/api/command/datatypes/IDatatype.html "interface in baritone.api.command.datatypes") s and [`IArgParser`](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser") s is how many arguments they can take.
    While [`IArgParser`](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser") s always operate on a single argument's value, [`IDatatype`](../../../../baritone/api/command/datatypes/IDatatype.html "interface in baritone.api.command.datatypes") s get access to the entire
    [`IArgConsumer`](../../../../baritone/api/command/argument/IArgConsumer.html "interface in baritone.api.command.argument")}.


    Parameters:`type` \- The type to peek asReturns:An instance of the specified typeThrows:`CommandInvalidTypeException` \- If the parsing failed`CommandNotEnoughArgumentsException`See Also:[`IArgParser`](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser"),
    [`get()`](../../../../baritone/api/command/argument/IArgConsumer.html#get--),
    [`getAsOrDefault(Class, Object)`](../../../../baritone/api/command/argument/IArgConsumer.html#getAsOrDefault-java.lang.Class-T-),
    [`getAsOrNull(Class)`](../../../../baritone/api/command/argument/IArgConsumer.html#getAsOrNull-java.lang.Class-),
    [`peekAs(Class)`](../../../../baritone/api/command/argument/IArgConsumer.html#peekAs-java.lang.Class-),
    [`peekAsOrDefault(Class, Object, int)`](../../../../baritone/api/command/argument/IArgConsumer.html#peekAsOrDefault-java.lang.Class-T-int-),
    [`peekAsOrNull(Class, int)`](../../../../baritone/api/command/argument/IArgConsumer.html#peekAsOrNull-java.lang.Class-int-)

  - #### getAsOrDefault



    ```
    <T> T getAsOrDefault(java.lang.Class<T> type,
                         T def)
                  throws CommandNotEnoughArgumentsException
    ```


    Tries to use a **stateless** [`IArgParser`](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser") to parse the next argument into the specified class



    A critical difference between [`IDatatype`](../../../../baritone/api/command/datatypes/IDatatype.html "interface in baritone.api.command.datatypes") s and [`IArgParser`](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser") s is how many arguments they can take.
    While [`IArgParser`](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser") s always operate on a single argument's value, [`IDatatype`](../../../../baritone/api/command/datatypes/IDatatype.html "interface in baritone.api.command.datatypes") s get access to the entire
    [`IArgConsumer`](../../../../baritone/api/command/argument/IArgConsumer.html "interface in baritone.api.command.argument")}.


    Parameters:`type` \- The type to peek as`def` \- The default valueReturns:An instance of the specified type, or `def` if it couldn't be parsedThrows:`CommandNotEnoughArgumentsException`See Also:[`IArgParser`](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser"),
    [`get()`](../../../../baritone/api/command/argument/IArgConsumer.html#get--),
    [`getAs(Class)`](../../../../baritone/api/command/argument/IArgConsumer.html#getAs-java.lang.Class-),
    [`getAsOrNull(Class)`](../../../../baritone/api/command/argument/IArgConsumer.html#getAsOrNull-java.lang.Class-),
    [`peekAs(Class)`](../../../../baritone/api/command/argument/IArgConsumer.html#peekAs-java.lang.Class-),
    [`peekAsOrDefault(Class, Object, int)`](../../../../baritone/api/command/argument/IArgConsumer.html#peekAsOrDefault-java.lang.Class-T-int-),
    [`peekAsOrNull(Class, int)`](../../../../baritone/api/command/argument/IArgConsumer.html#peekAsOrNull-java.lang.Class-int-)

  - #### getAsOrNull



    ```
    <T> T getAsOrNull(java.lang.Class<T> type)
               throws CommandNotEnoughArgumentsException
    ```


    Tries to use a **stateless** [`IArgParser`](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser") to parse the next argument into the specified class



    A critical difference between [`IDatatype`](../../../../baritone/api/command/datatypes/IDatatype.html "interface in baritone.api.command.datatypes") s and [`IArgParser`](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser") s is how many arguments they can take.
    While [`IArgParser`](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser") s always operate on a single argument's value, [`IDatatype`](../../../../baritone/api/command/datatypes/IDatatype.html "interface in baritone.api.command.datatypes") s get access to the entire
    [`IArgConsumer`](../../../../baritone/api/command/argument/IArgConsumer.html "interface in baritone.api.command.argument")}.


    Parameters:`type` \- The type to peek asReturns:An instance of the specified type, or `null` if it couldn't be parsedThrows:`CommandNotEnoughArgumentsException`See Also:[`IArgParser`](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser"),
    [`get()`](../../../../baritone/api/command/argument/IArgConsumer.html#get--),
    [`getAs(Class)`](../../../../baritone/api/command/argument/IArgConsumer.html#getAs-java.lang.Class-),
    [`getAsOrDefault(Class, Object)`](../../../../baritone/api/command/argument/IArgConsumer.html#getAsOrDefault-java.lang.Class-T-),
    [`peekAs(Class)`](../../../../baritone/api/command/argument/IArgConsumer.html#peekAs-java.lang.Class-),
    [`peekAsOrDefault(Class, Object, int)`](../../../../baritone/api/command/argument/IArgConsumer.html#peekAsOrDefault-java.lang.Class-T-int-),
    [`peekAsOrNull(Class, int)`](../../../../baritone/api/command/argument/IArgConsumer.html#peekAsOrNull-java.lang.Class-int-)

  - #### getDatatypePost



    ```
    <T,O,D extends IDatatypePost<T,O>> T getDatatypePost(D datatype,
                                                         O original)
                                                  throws CommandInvalidTypeException,
                                                         CommandNotEnoughArgumentsException
    ```

    Throws:`CommandInvalidTypeException``CommandNotEnoughArgumentsException`

  - #### getDatatypePostOrDefault



    ```
    <T,O,D extends IDatatypePost<T,O>> T getDatatypePostOrDefault(D datatype,
                                                                  O original,
                                                                  T _default)
    ```


  - #### getDatatypePostOrNull



    ```
    <T,O,D extends IDatatypePost<T,O>> T getDatatypePostOrNull(D datatype,
                                                               O original)
    ```


  - #### getDatatypeFor



    ```
    <T,D extends IDatatypeFor<T>> T getDatatypeFor(D datatype)
                                            throws CommandInvalidTypeException,
                                                   CommandNotEnoughArgumentsException
    ```

    Throws:`CommandInvalidTypeException``CommandNotEnoughArgumentsException`

  - #### getDatatypeForOrDefault



    ```
    <T,D extends IDatatypeFor<T>> T getDatatypeForOrDefault(D datatype,
                                                            T def)
    ```


  - #### getDatatypeForOrNull



    ```
    <T,D extends IDatatypeFor<T>> T getDatatypeForOrNull(D datatype)
    ```


  - #### tabCompleteDatatype



    ```
    <T extends IDatatype> java.util.stream.Stream<java.lang.String> tabCompleteDatatype(T datatype)
    ```


  - #### rawRest



    ```
    java.lang.String rawRest()
    ```


    Returns the "raw rest" of the string. For example, from a string `arg1 arg2  arg3`, split
     into three [`ICommandArgument`](../../../../baritone/api/command/argument/ICommandArgument.html "interface in baritone.api.command.argument") s `"arg1"`, `"arg2"`, and `"arg3"`:



- `rawRest()` would return `arg1 arg2  arg3`
- After calling [`get()`](../../../../baritone/api/command/argument/IArgConsumer.html#get--), `rawRest()` would return `arg2  arg3` (note the
double space - it is preserved!)
- After calling [`get()`](../../../../baritone/api/command/argument/IArgConsumer.html#get--) again, `rawRest()` would return `"arg3"`
- After calling [`get()`](../../../../baritone/api/command/argument/IArgConsumer.html#get--) one last time, `rawRest()` would return `""`

Returns:The "raw rest" of the string.

  - #### requireMin



    ```
    void requireMin(int min)
             throws CommandNotEnoughArgumentsException
    ```

    Parameters:`min` \- The minimum amount of arguments to require.Throws:`CommandNotEnoughArgumentsException` \- If there are less than `min` arguments left.See Also:[`requireMax(int)`](../../../../baritone/api/command/argument/IArgConsumer.html#requireMax-int-),
    [`requireExactly(int)`](../../../../baritone/api/command/argument/IArgConsumer.html#requireExactly-int-)

  - #### requireMax



    ```
    void requireMax(int max)
             throws CommandTooManyArgumentsException
    ```

    Parameters:`max` \- The maximum amount of arguments allowed.Throws:`CommandTooManyArgumentsException` \- If there are more than `max` arguments left.See Also:[`requireMin(int)`](../../../../baritone/api/command/argument/IArgConsumer.html#requireMin-int-),
    [`requireExactly(int)`](../../../../baritone/api/command/argument/IArgConsumer.html#requireExactly-int-)

  - #### requireExactly



    ```
    void requireExactly(int args)
                 throws CommandException
    ```

    Parameters:`args` \- The exact amount of arguments to require.Throws:`CommandNotEnoughArgumentsException` \- If there are less than `args` arguments left.`CommandTooManyArgumentsException` \- If there are more than `args` arguments left.`CommandException`See Also:[`requireMin(int)`](../../../../baritone/api/command/argument/IArgConsumer.html#requireMin-int-),
    [`requireMax(int)`](../../../../baritone/api/command/argument/IArgConsumer.html#requireMax-int-)

  - #### hasConsumed



    ```
    boolean hasConsumed()
    ```

    Returns:If this [`IArgConsumer`](../../../../baritone/api/command/argument/IArgConsumer.html "interface in baritone.api.command.argument")} has consumed at least one argument.See Also:[`consumed()`](../../../../baritone/api/command/argument/IArgConsumer.html#consumed--),
    [`consumedString()`](../../../../baritone/api/command/argument/IArgConsumer.html#consumedString--)

  - #### consumed



    ```
    ICommandArgument consumed()
    ```

    Returns:The last argument this [`IArgConsumer`](../../../../baritone/api/command/argument/IArgConsumer.html "interface in baritone.api.command.argument")} has consumed, or an "unknown" argument, indicated by a
     comamnd argument index that has a value of `-1`, if no arguments have been consumed yet.See Also:[`consumedString()`](../../../../baritone/api/command/argument/IArgConsumer.html#consumedString--),
    [`hasConsumed()`](../../../../baritone/api/command/argument/IArgConsumer.html#hasConsumed--)

  - #### consumedString



    ```
    java.lang.String consumedString()
    ```

    Returns:The value of thelast argument this [`IArgConsumer`](../../../../baritone/api/command/argument/IArgConsumer.html "interface in baritone.api.command.argument")} has consumed, or an empty string if no arguments
     have been consumed yetSee Also:[`consumed()`](../../../../baritone/api/command/argument/IArgConsumer.html#consumed--),
    [`hasConsumed()`](../../../../baritone/api/command/argument/IArgConsumer.html#hasConsumed--)

  - #### copy



    ```
    IArgConsumer copy()
    ```

    Returns:A copy of this [`IArgConsumer`](../../../../baritone/api/command/argument/IArgConsumer.html "interface in baritone.api.command.argument")}. It has the same arguments (both consumed and not), but does not
     affect or mutate this instance. Useful for the various `peek` functions