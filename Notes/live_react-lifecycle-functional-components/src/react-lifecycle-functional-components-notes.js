import React, { useState, useEffect } from "react";

// Before we look at functional components, remember that the 3 "class-based" lifecycle methods we looked at this morning...
// ? ... componentDidMount, componentDidUpdate, componentWillUnmount...
// ... are the most commonly used in class-based components...
// ... but are not the only ones! However, the others are rarely used!
// If you want to research more about class-based lifecycle methods, you can use the following link:
// ? https://reactjs.org/docs/react-component.html

// ===================================================================

// * LIFECYCLE IN REACT FUNCTIONAL COMPONENTS

// From React 16.8, functional components were able to use hooks to gain a lot of the functionality that only class-based components had previously had.
// For example, the useState hook allowed functional components to have "state".
// There is another kind of hook, which lets functional components access stages of their lifecycle:

// * useEffect()

// useEffect is like componentDidMount, componentDidUpdate and componentWillUnmount - COMBINED!

// =========================================

// * Use case 1: Mirroring componentDidMount
// Call useEffect to execute some logic JUST ONCE, when the component first renders

useEffect(() => {
    // Do something
}, [])

// ======================

// * Use case 2: Mirroring componentDidUpdate

// ? 2A. Call useEffect EVERY TIME the App component renders

useEffect(() => {
    // Do something
})

// ? 2B. Call useEffect EVERY TIME a SPECIFIC state variable(s) is/are updated.
// In the below, the useEffect will only be called when the state variable "stateVar" is updated, causing a re-render.

useEffect(() => {
    // Do something
}, [stateVar])

// ====================

// * Use case 3: Mirroring componentWillUnmount

// ? Call useEffect when a component is about to be unmounted

useEffect(() => {
    return () => {
        // Do something
    }
})