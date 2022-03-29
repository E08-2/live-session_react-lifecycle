// * THE REACT LIFECYCLE

// ? What is the React lifecycle?

// Every React component has a lifecycle - different stages in its "life".

// Like all living things, a React component has the ability to:

// * be born (is created, is added to the DOM)
// * go through changes
// * die (is uncreated, is removed from the DOM)

// These 3 key stages in a React component's lifecycle are called:

// 1. Mounting
// 2. Updating
// 3. Unmounting

// * React class-based components have "lifecycle methods".
// We can use lifecycle methods to execute logic at different stages of a component's lifecycle.

// =============================================================================================

// * React Lifecycle Methods for Class-Based Components

// * 1. Mounting stage

// The "mounting" stage is when the component is first inserted into the DOM of your page.

// * 1.1 Key mounting methods

// ? A. constructor - you already know about this!
// This defines the initial state of your component, even before it is mounted.
// You should call super() to add your own functionality to the constructor function inherited from React.Component

// ? B. render . you already know about this!
// This method defines the JSX which will be rendered as HTML in your page.
// It is the only required method in a React class-based component.

// ? C. componentDidMount
// You can use this method to execute some logic as soon as the component is mounted to the DOM.
// This would be a great method to use in a class-based component to make HTTP requests...
// E.g. "As soon as the component is mounted, fetch some data from a server with a GET request...
// "... and when it arrives, use it to set the component's state with data to show the user."

// ==========================

// * 2. Updating stage

// This is the process of updating the component over time, e.g. by changing its state.

// * 2.1 Key "updating" method

// ? A. componentDidUpdate
// You can use this method to execute some logic as soon as the component has re-rendered after an update.
// For example, you could use this to update the DOM in response to a state or prop change...
// E.g. If the user types something into a search bar (e.g. searching for a Netflix film)...
// ... fetch all entries from a server which match the search string

// You can also access the previous props and previous state as parameters...
// ? componentDidUpdate(prevProps, prevState)
// This could be useful if you need to compare the previous state with the current state after the latest update.

// ========================

// * 3. Unmounting stage

// This is when the component is umounted from the DOM, as it is no longer needed.
// E.g. If you click "X" on a component to remove it from a parent component's list of mapped components.
// This method will be called BEFORE the component is unmounted.

// * 3.1 Key "unmounting" method

// ? A. componentWillUnmount
// We can use this method to execute some kind of logic before the component is removed from the DOM.