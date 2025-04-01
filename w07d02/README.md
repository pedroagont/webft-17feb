# What is React State?

## Today's Menu:

- JSX & Props Review
- What is React state?
- Differences between state and props
- Setting and updating state
- Event handling
- Lifting state up

### JSX and props

### What is JSX

JSX stands for JavaScript XML. It is an extension syntax used in React, a popular JavaScript library for building user interfaces. JSX allows you to write HTML-like code within JavaScript, combining the power of JavaScript and the expressiveness of HTML-like syntax.

JSX provides a concise and familiar syntax for describing the structure and appearance of UI components. It resembles HTML but is not actually HTML. JSX elements are transformed into regular JavaScript function calls that create React elements.

```jsx
const element = <h1>Hello, world</h1>;
```

JSX code `<h1>Hello, JSX!</h1>` creates a React element that represents an <h1> heading with the text "Hello, JSX!". This JSX code is then transformed into the following JavaScript code:

```jsx
const element = React.createElement("h1", null, "Hello, JSX!");
```

### Making a Components

Some rules to follow when making a component in react.

#### Making a file component

To make a component, make a file with capital first letter. Then make a function in that file that is the `same name` as the file. Afterwards make sure that function gets exported (preferable `export default` for now).

```jsx
// file called Component.js

const Component = () => {};

export default Component;
```

This function should return something to render, usually JSX.

```jsx
const Component = () => {
  return <div>Hello Component</div>;
};

export default Component;
```

The component must return one PARENT html element that encloses all the other children.

HTML/JSX syntax will matter, because if something is missmatched, react will not compile it.

### Props

`Props` is short for properties. Props are a way to pass data from a parent component to a child component. They allow you to configure and customize components dynamically by providing values or functions as attributes.

Here's an example of how props can be used in React:

```jsx
// Parent component
function App() {
  return <ChildComponent name="John" age={25} />;
}

// Child component
function ChildComponent(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}
```

In the example above, the App component is the parent component, and the ChildComponent is the child component. The name and age attributes are passed as props from the parent component to the child component.

Props enable you to create reusable and customizable components by providing different data and behaviors to them based on the needs of the parent components.

In React, it is common to use the map function instead of a traditional for loop when rendering lists or arrays of data. There are several reasons why using map is preferred in React:

- Simplicity and readability: The map function provides a more concise and expressive way to iterate over an array and transform each element into JSX components. It simplifies the code and makes it easier to understand.

- Immutable data: React promotes immutability, which means that the original data should not be modified directly. The map function creates a new array with the transformed elements without modifying the original array.

- Integration with JSX: The map function integrates well with JSX syntax. It allows you to map each element in an array to a corresponding JSX element without the need for manual concatenation or building complex HTML strings.

## React State

When we try to update local variables in React, we notice that the changes won't reflect in our App.

```jsx
function Counter() {
    const handleClick = () => {
        count++;
    }

    return (
        <div>
            {/* This will not update */}
            <h2>{count}</h2>
            <button onClick={()=>handleClick()}>Increase!</button>
        </div> 
     );
}

export default Counter;
```

This is because of two reasons:

- Local variables don't carry onto different renders
- Any changes made to a local variable will not trigger a render or a re-render

### How do we fix this?

We can fix this by adding a state variable from `useState`.

```jsx
import { useState } from 'react';

function Counter() {

    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={()=>handleClick()}>Increase!</button>
        </div> 
     );
}

export default Counter;
```

`useState` returns an array with two elements, a getter and a setter.

The getter will retrieve the value of state, while the setter will be used to modify the value of state.
Everytime we update state with `setState`, this will trigger a rerender in our component. The rerender will fetch the new value of our state and display it for us.

### More about useState

There are some things we need to note about this hook

- Hooks should be called at the top of your function
- State shouldn't be too complex, if it is we may be better off breaking it up
- State is asynchronous. We shouldn't rely on console.log to show us an updated state. Use react dev tools instead.
- When updating state, we should never modify the state variable directly. Instead we should use `prev`

```javascript
setState((prev) => ...)
```

References:
[React State Variable](https://react.dev/learn/state-a-components-memory)
[useState](https://react.dev/reference/react/useState)