Different Router Types:
=======================

1. Browser Router:
------------------

- Basically looks for the domain and then takes everything that is there after '/'.
- e.g. 
    https://localhost:3000/home

    - Here it will look for the URL and will only take the '/home' into account. 
    - It will then match that string with the path from the Route, if the match is successfull then the URL will change and the History object will be updated with the changed URL.
    - Then the Component will be loaded.
    - We can use HTML5 History API to manipulate or read the data.

2. Hash Router:
---------------

- It will just append '/#/' to the URL.
- e.g.
    After Using the default URL will look like https://localhost:3000/#/home
    
    So on change of the Route path it will just replace the path https://localhost:3000/#/products

3. Memory Router:
-----------------

- Here there will be no change in the URL during the navigation of the page.

