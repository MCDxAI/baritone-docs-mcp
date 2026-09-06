ICommandArgument (baritone 1.2.15 API)

baritone.api.command.argument

## Interface ICommandArgument

- * * *





```
public interface ICommandArgument
```


A [`ICommandArgument`](../../../../baritone/api/command/argument/ICommandArgument.html "interface in baritone.api.command.argument") is an immutable object representing one command argument. It contains data on the index of
that argument, its value, and the rest of the string that argument was found in



You're recommended to use [`IArgConsumer`](../../../../baritone/api/command/argument/IArgConsumer.html "interface in baritone.api.command.argument")}s to handle these.


Since:10/2/2019

- ### Method Summary

All Methods[Instance Methods](javascript:show(2);)[Abstract Methods](javascript:show(4);)Modifier and TypeMethod and Description`<T> T``getAs(java.lang.Class<T> type)`

Tries to use a **stateless** [`IArgParser`](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser") to parse this argument into the specified class

`<T,S> T``getAs(java.lang.Class<T> type,
       java.lang.Class<S> stateType,
       S state)`

Tries to use a **stated** [`IArgParser`](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser") to parse this argument into the specified class

`<E extends java.lang.Enum<?>>
E``getEnum(java.lang.Class<E> enumClass)`

Gets an enum value from the enum class with the same name as this argument's value

`int``getIndex()``java.lang.String``getRawRest()``java.lang.String``getValue()``<T> boolean``is(java.lang.Class<T> type)`

Tries to use a **stateless** [`IArgParser`](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser") to parse this argument into the specified class

`<T,S> boolean``is(java.lang.Class<T> type,
    java.lang.Class<S> stateType,
    S state)`

Tries to use a **stated** [`IArgParser`](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser") to parse this argument into the specified class

- ### Method Detail



  - #### getIndex



    ```
    int getIndex()
    ```

    Returns:The index of this command argument in the list of command arguments generated

  - #### getValue



    ```
    java.lang.String getValue()
    ```

    Returns:The raw value of just this argument

  - #### getRawRest



    ```
    java.lang.String getRawRest()
    ```

    Returns:The raw value of the remaining arguments after this one was captured

  - #### getEnum



    ```
    <E extends java.lang.Enum<?>> E getEnum(java.lang.Class<E> enumClass)
                                     throws CommandInvalidTypeException
    ```


    Gets an enum value from the enum class with the same name as this argument's value



    For example if you getEnum as an `EnumFacing`, and this argument's value is "up", it will return `EnumFacing.UP`


    Parameters:`enumClass` \- The enum class to searchReturns:An enum constant of that class with the same name as this argument's valueThrows:`CommandInvalidTypeException` \- If the constant couldn't be foundSee Also:[`IArgConsumer.peekEnum(Class)`](../../../../baritone/api/command/argument/IArgConsumer.html#peekEnum-java.lang.Class-),
    [`IArgConsumer.peekEnum(Class, int)`](../../../../baritone/api/command/argument/IArgConsumer.html#peekEnum-java.lang.Class-int-),
    [`IArgConsumer.peekEnumOrNull(Class)`](../../../../baritone/api/command/argument/IArgConsumer.html#peekEnumOrNull-java.lang.Class-),
    [`IArgConsumer.peekEnumOrNull(Class, int)`](../../../../baritone/api/command/argument/IArgConsumer.html#peekEnumOrNull-java.lang.Class-int-),
    [`IArgConsumer.getEnum(Class)`](../../../../baritone/api/command/argument/IArgConsumer.html#getEnum-java.lang.Class-),
    [`IArgConsumer.getEnumOrNull(Class)`](../../../../baritone/api/command/argument/IArgConsumer.html#getEnumOrNull-java.lang.Class-)

  - #### getAs



    ```
    <T> T getAs(java.lang.Class<T> type)
         throws CommandInvalidTypeException
    ```


    Tries to use a **stateless** [`IArgParser`](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser") to parse this argument into the specified class
    Parameters:`type` \- The class to parse this argument intoReturns:An instance of the specified typeThrows:`CommandInvalidTypeException` \- If the parsing failed

  - #### is



    ```
    <T> boolean is(java.lang.Class<T> type)
    ```


    Tries to use a **stateless** [`IArgParser`](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser") to parse this argument into the specified class
    Parameters:`type` \- The class to parse this argument intoReturns:If the parser succeeded

  - #### getAs



    ```
    <T,S> T getAs(java.lang.Class<T> type,
                  java.lang.Class<S> stateType,
                  S state)
           throws CommandInvalidTypeException
    ```


    Tries to use a **stated** [`IArgParser`](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser") to parse this argument into the specified class
    Parameters:`type` \- The class to parse this argument intoReturns:An instance of the specified typeThrows:`CommandInvalidTypeException` \- If the parsing failed

  - #### is



    ```
    <T,S> boolean is(java.lang.Class<T> type,
                     java.lang.Class<S> stateType,
                     S state)
    ```


    Tries to use a **stated** [`IArgParser`](../../../../baritone/api/command/argparser/IArgParser.html "interface in baritone.api.command.argparser") to parse this argument into the specified class
    Parameters:`type` \- The class to parse this argument intoReturns:If the parser succeeded