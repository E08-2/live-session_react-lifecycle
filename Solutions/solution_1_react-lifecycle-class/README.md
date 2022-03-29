# React Lifecycle - Class-Based Component

So far we have updated the "Notes" app, so that its `<App />` component is a class-based component.

We also learned this morning about 3 **new** lifecycle methods you can call in any **class-based** React component: 
- when it is added to the DOM
- whenever it is updated
- when it is removed from the DOM

Let's update the "Notes" app again, to practice using these 3 new lifecycle methods.

### Your Task

1. In **`App.js`**

- Use a React lifecycle method to make it so that, when the page first loads, the user gets an `alert` box saying "Welcome to the Notes app!"
- Use a React lifecycle method to make it so that, whenever the app updates, a message is logged to the browser console saying "The app has been updated!" Quickly make sure this is working by checking the browser console while using the app.

2. In **`Note.js`**

- Change this component from a functional to a **class-based** component.
    - This component does not need any state, as it receives the data it needs through props.
    - Remember, there is a special word you use a lot in a class-based component which you will now need to use to access your props!
- Use a React lifecycle method to make it so that, after creating a new note, the user gets an alert saying "New note created!" 
- Use a React lifecycle method to make it so that, after clicking a `<Note />`'s "X" span, and before it is removed from the DOM, the user gets an alert box saying "You have deleted the following note: [note content]".
    - So if the user deletes a note with the content: "Hello world!", they should get an alert saying "You have deleted the following note: Hello world!" before it is removed from the DOM.