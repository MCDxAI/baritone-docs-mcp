ISchematicFormat (baritone 1.2.15 API)

baritone.api.schematic.format

## Interface ISchematicFormat

- * * *





```
public interface ISchematicFormat
```


The base of a [`ISchematic`](../../../../baritone/api/schematic/ISchematic.html "interface in baritone.api.schematic") file format
Since:12/23/2019

- ### Method Summary

All Methods[Instance Methods](javascript:show(2);)[Abstract Methods](javascript:show(4);)Modifier and TypeMethod and Description`boolean``isFileType(java.io.File file)``IStaticSchematic``parse(java.io.InputStream input)`

- ### Method Detail



  - #### parse



    ```
    IStaticSchematic parse(java.io.InputStream input)
                    throws java.io.IOException
    ```

    Returns:The parser for creating schematics of this formatThrows:`java.io.IOException`

  - #### isFileType



    ```
    boolean isFileType(java.io.File file)
    ```

    Parameters:`file` \- The file to check againstReturns:Whether or not the specified file matches this schematic format