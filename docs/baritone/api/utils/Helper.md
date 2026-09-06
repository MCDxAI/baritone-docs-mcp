Helper (baritone 1.2.15 API)

baritone.api.utils

## Interface Helper

- All Known Subinterfaces:[ICommand](../../../baritone/api/command/ICommand.html "interface in baritone.api.command")All Known Implementing Classes:[Command](../../../baritone/api/command/Command.html "class in baritone.api.command"), [Paginator](../../../baritone/api/command/helpers/Paginator.html "class in baritone.api.command.helpers")

* * *





```
public interface Helper
```


An ease-of-access interface to provide the `Minecraft` game instance,
chat and console logging mechanisms, and the Baritone chat prefix.
Since:8/1/2018

- ### Field Summary

FieldsModifier and TypeField and Description`static Helper``HELPER`

Instance of [`Helper`](../../../baritone/api/utils/Helper.html "interface in baritone.api.utils").

`static net.minecraft.client.Minecraft``mc`

Instance of the game


- ### Method Summary

All Methods[Static Methods](javascript:show(1);)[Instance Methods](javascript:show(2);)[Default Methods](javascript:show(16);)Modifier and TypeMethod and Description`static net.minecraft.util.text.ITextComponent``getPrefix()``default void``logDebug(java.lang.String message)`

Send a message to chat only if chatDebug is on

`default void``logDirect(boolean logAsToast,
           net.minecraft.util.text.ITextComponent... components)`

Send components to chat with the \[Baritone\] prefix

`default void``logDirect(net.minecraft.util.text.ITextComponent... components)`

Send components to chat with the \[Baritone\] prefix

`default void``logDirect(java.lang.String message)`

Send a message to chat regardless of chatDebug (should only be used for critically important messages, or as a
direct response to a chat command)

`default void``logDirect(java.lang.String message,
           boolean logAsToast)`

Send a message to chat regardless of chatDebug (should only be used for critically important messages, or as a
direct response to a chat command)

`default void``logDirect(java.lang.String message,
           net.minecraft.util.text.TextFormatting color)`

Send a message to chat regardless of chatDebug (should only be used for critically important messages, or as a
direct response to a chat command)

`default void``logDirect(java.lang.String message,
           net.minecraft.util.text.TextFormatting color,
           boolean logAsToast)`

Send a message to chat regardless of chatDebug (should only be used for critically important messages, or as a
direct response to a chat command)

`default void``logNotification(java.lang.String message)`

Send a message as a desktop notification

`default void``logNotification(java.lang.String message,
                 boolean error)`

Send a message as a desktop notification

`default void``logNotificationDirect(java.lang.String message)`

Send a message as a desktop notification regardless of desktopNotifications
(should only be used for critically important messages)

`default void``logNotificationDirect(java.lang.String message,
                       boolean error)`

Send a message as a desktop notification regardless of desktopNotifications
(should only be used for critically important messages)

`default void``logToast(net.minecraft.util.text.ITextComponent title,
          net.minecraft.util.text.ITextComponent message)`

Send a message to display as a toast popup

`default void``logToast(java.lang.String message)`

Send a message to display as a toast popup

`default void``logToast(java.lang.String title,
          java.lang.String message)`

Send a message to display as a toast popup

- ### Field Detail



  - #### HELPER



    ```
    static final Helper HELPER
    ```


    Instance of [`Helper`](../../../baritone/api/utils/Helper.html "interface in baritone.api.utils"). Used for static-context reference.


  - #### mc



    ```
    static final net.minecraft.client.Minecraft mc
    ```


    Instance of the game

- ### Method Detail



  - #### getPrefix



    ```
    static net.minecraft.util.text.ITextComponent getPrefix()
    ```


  - #### logToast



    ```
    default void logToast(net.minecraft.util.text.ITextComponent title,
                          net.minecraft.util.text.ITextComponent message)
    ```


    Send a message to display as a toast popup
    Parameters:`title` \- The title to display in the popup`message` \- The message to display in the popup

  - #### logToast



    ```
    default void logToast(java.lang.String title,
                          java.lang.String message)
    ```


    Send a message to display as a toast popup
    Parameters:`title` \- The title to display in the popup`message` \- The message to display in the popup

  - #### logToast



    ```
    default void logToast(java.lang.String message)
    ```


    Send a message to display as a toast popup
    Parameters:`message` \- The message to display in the popup

  - #### logNotification



    ```
    default void logNotification(java.lang.String message)
    ```


    Send a message as a desktop notification
    Parameters:`message` \- The message to display in the notification

  - #### logNotification



    ```
    default void logNotification(java.lang.String message,
                                 boolean error)
    ```


    Send a message as a desktop notification
    Parameters:`message` \- The message to display in the notification`error` \- Whether to log as an error

  - #### logNotificationDirect



    ```
    default void logNotificationDirect(java.lang.String message)
    ```


    Send a message as a desktop notification regardless of desktopNotifications
     (should only be used for critically important messages)
    Parameters:`message` \- The message to display in the notification

  - #### logNotificationDirect



    ```
    default void logNotificationDirect(java.lang.String message,
                                       boolean error)
    ```


    Send a message as a desktop notification regardless of desktopNotifications
     (should only be used for critically important messages)
    Parameters:`message` \- The message to display in the notification`error` \- Whether to log as an error

  - #### logDebug



    ```
    default void logDebug(java.lang.String message)
    ```


    Send a message to chat only if chatDebug is on
    Parameters:`message` \- The message to display in chat

  - #### logDirect



    ```
    default void logDirect(boolean logAsToast,
                           net.minecraft.util.text.ITextComponent... components)
    ```


    Send components to chat with the \[Baritone\] prefix
    Parameters:`logAsToast` \- Whether to log as a toast notification`components` \- The components to send

  - #### logDirect



    ```
    default void logDirect(net.minecraft.util.text.ITextComponent... components)
    ```


    Send components to chat with the \[Baritone\] prefix
    Parameters:`components` \- The components to send

  - #### logDirect



    ```
    default void logDirect(java.lang.String message,
                           net.minecraft.util.text.TextFormatting color,
                           boolean logAsToast)
    ```


    Send a message to chat regardless of chatDebug (should only be used for critically important messages, or as a
     direct response to a chat command)
    Parameters:`message` \- The message to display in chat`color` \- The color to print that message in`logAsToast` \- Whether to log as a toast notification

  - #### logDirect



    ```
    default void logDirect(java.lang.String message,
                           net.minecraft.util.text.TextFormatting color)
    ```


    Send a message to chat regardless of chatDebug (should only be used for critically important messages, or as a
     direct response to a chat command)
    Parameters:`message` \- The message to display in chat`color` \- The color to print that message in

  - #### logDirect



    ```
    default void logDirect(java.lang.String message,
                           boolean logAsToast)
    ```


    Send a message to chat regardless of chatDebug (should only be used for critically important messages, or as a
     direct response to a chat command)
    Parameters:`message` \- The message to display in chat`logAsToast` \- Whether to log as a toast notification

  - #### logDirect



    ```
    default void logDirect(java.lang.String message)
    ```


    Send a message to chat regardless of chatDebug (should only be used for critically important messages, or as a
     direct response to a chat command)
    Parameters:`message` \- The message to display in chat