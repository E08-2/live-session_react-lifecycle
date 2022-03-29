import React, { useState, useEffect } from 'react';
import User from './User';

const SearchResults = props => {
    // "users" state variable - the full list of users fetched from the jsonPlaceholder API
    const [users, setUsers] = useState([]);
    // "filteredUsers" state variable - only contains the users which match the latest search
    const [filteredUsers, setFilteredUsers] = useState([]);

    // Task 4
    // useEffect hook which runs just once, when the app first loads.
    // This will use a fetch request to GET "users" data from the jsonPlaceholder API...
    //... and then update your "users" and "filteredUsers" state variables with that data
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => {
                setUsers(data);
                setFilteredUsers(data);
            }).catch(err => console.log(err.message))
    }, [])

    const getFilteredUsers = () => {
        // New array containing only the users whose name OR email contains the current search term
        // Note we are using .filter() again to identify these users!
        let foundUsers = users.filter(user => user.name.toLowerCase().includes(props.currentSearch.toLowerCase()) || user.email.toLowerCase().includes(props.currentSearch.toLowerCase()))

        // Set the "filteredUsers" state variable with the "foundUsers" array
        setFilteredUsers(foundUsers);
    }

    return (
        <>
            <div className="search">
                <input type="text"
                    placeholder="Enter Search Term"
                    value={props.searchTerm}
                    onChange={props.change}
                />
                <button onClick={getFilteredUsers}>Search</button>
            </div>
            <div className="results">
                <table>
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Name</td>
                            <td>Email</td>
                        </tr>
                    </thead>
                    {/* Every time the "filteredUsers" state array is updated... 
                    ... the SearchResults component re-renders, and maps the latest value of "filteredUsers"... 
                    ... for every user in the array, a <User /> is rendered */}
                    <tbody>
                        {filteredUsers.map((user) => {
                            return <User key={user.id} id={user.id} name={user.name} email={user.email} />
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default SearchResults;