Context API:
============

ContextAPI is a new feature of React to pass data from Parent Component to the Nested child components.
Before Using of Context, the legacy way was 
•	To create a property inside the state
•	Then pass the state as props through each of the Component till it reaches the desired Component.
•	This was a big pain because Developers had to pass that data to each of the component as Props even though the component doesn’t use it.

To overcome that Context API was introduced. 
•	It helps to bypass the Components that doesn’t need the data.
•	use it only on the specified component(s). 
•	The specified component(s) can be at any level, usually if the component is more than 2 level down its preferable to use ContextAPI.
•	To use Context, we must use React.createContext().
•	Can be used in both Stateful & Stateless components.

There are 2 ways to implement ContextAPI.
•	Default Way.
•	Using Provider & Consumer.

Default Way:
•	This way is used when we want to pass only static data.
•	The data cannot be changed if we are following this approach.

So, let’s start with creating ‘ContextOne.js’ file.

•	Let’s say we want to pass the color ‘blue’ to the child, so we create a context called ‘ContextOne’. 
•	React.createContext() takes a default value, in our case its ‘blue’.
•	Its not mandate to always specify a default value but it’s good to have.

The context has been successfully created, now we can use it in the components that we want.

To use it inside any component we must specify a ‘contextType’, this name should be same, and it should not be changed.

Let’s create a new component called ‘child-1.js’

•	First, we need to import the ‘Context-1.js’ to ‘child-1.js’.
•	After that we need to specify the ‘contextType’.
•	This will basically get the context into the component.
•	Now once we get the Context, to access it we have to use ‘this. context’, this should also be same.
•	‘this. context’ try to fetch the context from the ‘contextType’ mentioned above.
 
•	‘contextType’ is static because it’s the es6 way of defining the same, but if we are not using es6 then we have to write something like

ChildOne.contextType = ContextOne;

•	Now we can access the Context, but a big issue here is that the Context value will be same all the time, and we don’t have any way to change it.
•	To work with dynamic Context, we must use the second method i.e. the Provider and the Consumer Method.

Using Provider & Consumer:

•	Provider and Consumer as by the name is responsible for Providing & Consuming the Context.
•	This Provider is completely different from that of the Redux Provider.
•	Each ‘createContext’ provides 2 Object 
•	Provider – It will basically provide the Context for the Components to Consume.
•	Consumer – They are the Components that will consume the Context provided from the Provider.

To use the Provider & Consumer way we must use the ‘Context-2.js’ file.

•	In the Component we must import the ‘ColorContext.js’ file.

•	Let’s create two new components called ‘child-3.js’ & ‘child-4.js’ and import the ‘ColorContext.js’ file in both the files.

•	Context can be provided from any of the Component and can be consumed by any of the Component as well.

•	In the ‘child-3.js’ we need to Wrap the component ‘childFour’ around ‘ContextTwo’ so that the context value can be accessed by ‘childFour’, same as the way we use ‘connect’ in the Components where we need to access the store in Redux. 

•	In line no 10 we see that there is a Provider. As discussed above each Context has a Provider as well as a Consumer. Provider is used to provide the Context value to the Consumers.
•	<ContextTwo.Provider value=’Red’> tells that ‘ChildFour’ should be provided a value as ‘Red’.
•	Now when the ‘childFour’ will access the Context, it will get the value as ‘Red’.
•	Here the ‘value’ attribute is needed, if it is not there then empty/undefined value will be passed to the ‘childFour’.
•	We make the Context to change dynamically is by associating the ‘value’ attribute with a specific key of the state of that parent Component (in this case ‘childThree’), so if that key in the state changes, then it will automatically update the Context value and that will update the Consuming component as well (in this case ‘ChildFour’).

The ‘childThree’ will look something like the below. 

•	So, if the value in the state changes in ‘componentDidMount’ it will automatically update the value in the ContextTwo.

Now the Context has provided the Updated value, the question now is how to access/Consume the value provided by the ContextTwo Provider.

•	For that we have to use a Consumer.

•	The consumer is always used in the Components that consumes the Context data.

•	To know more about that let’s look at ‘childFour’ that is going to Consume the Context data passed from ‘childThree’.


•	So, we have imported ‘ContextTwo’.

•	Here I am rendering a ‘div’ with the background color that will be from Context, if the Context value is ‘red’ the ‘div’ will turn ‘Red’ and if it is ‘Blue’ the ‘div’ will turn ‘Blue’.

•	To use the value in the Context we have to Specify Consumer in the Component.
•	Like Provider expect a ‘value’ attribute to pass the data to the Components, Consumer requires a function.
•	So that function will expect a value as a parameter (in our case ‘ContextValue’), this value is nothing but the value from the Context (in our case ‘contextTwo’).
•	So once this value is available, we can use. (line no 33)


So, this is for a single Context, how to handle multiple contexts.

Handling Multiple Context:

For handling multiple context let’s take ‘childThree’ as reference.

•	For multiple Context we have used context-1.js file with a modification from Blue to White. 

•	For Context-2.js

•	Here both the Context has been imported and ready to use.
•	We can use the context in any order we want, but we have to wrap the component around the Context. 
•	Now ‘childFour’ has both the Context provided to it.


Let’s look at ‘childFour’ component.

•	We have to import both the Context.
•	Using ‘ContextOne’ the Color of the text is changed.
•	Using ‘ContextTwo’ the color of the div is changed.
•	To use Context, we have to use Consumer for both the Context.
•	Each Context takes a function and the function is responsible for reading the Value from the Context by passing it as an argument and making the changes in the Component.
