# Api Request :-

```javaScript
const request = new XMLHttpRequest();
request.open('GET', 'https://api.github.com/users/username/repos', true);
request.send();

Note :- XMLHttpRequest(); ye ek tarha ka method hai jiske through hum apne kisi bhi type ke data ko send kar sekte hai aur recive bhi kr sekte hai 

Note :- jaab bhi hum current context ki baat krte hai to waha per this ka use krte hai.

Note  :- Jaab bhi <responseText> ata hai url se to most of the time mein data "String" mein hi hota hai