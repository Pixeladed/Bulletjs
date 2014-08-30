Bulletjs
========

Bullet JS is a library for parsing .bullet files into Javascript object. .bullet files are ~47% smaller than JSON and XML
  *****
##Dependency
  **Jquery**
##How to parse
  Load Bullet.min.js<br>
  Get content of the .bullet file into a string.<br>
  Run `Bullet(StringToParse);`
  
###Rules
  *1. Simple*
  All bullet objects are 1 dimentional. There are no nested objects or rule withing the file


  *2. Security*
    Bullet files are not valid Javascript files
  
  
  *3. Light weight*
    Bullet JS is light weight and it is **~47% lighter** than JSON or XML
  *****
###Syntax
  - **Key-Value pairs**
    

        #name value

    Start the pair with a `#` follow by the name of the property - `name` follow by space then value of the property - `value`
    
    JSON equivalent:
        
        { 'name' : 'value' }
  - **Data type**
  
    **String** : `example string`
    <br> *String do not have to be surrounded by quotation mark*

    **Number** : `1234.3`
    <br> *Number stands alone*
    
    **Array** : `[132,454,53]`
    <br> *No string [working on it]*
    
    **Boolean** : `[T] or [F]`
    <br> *[T] will produce True and [F] will produce False*
    *****
###Example

        #name bullet
        #num 0.0.1
        #text beta
        #online [T]
        #array [123,443,34]
