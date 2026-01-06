// Search Filter UI

// Filter list of users/items
// Case-insensitive search


import { useState } from "react";

 function Search() {
    const user = [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
        { id: 3, name: "Charlie" },
        { id: 4, name: "David" },
        { id: 5, name: "Eve" },
        { id: 6, name: "Frank" },
        { id: 7, name: "Grace" },
        { id: 8, name: "Heidi" },
        { id: 9, name: "Ivan" },
        { id: 10, name: "Judy" },
    ];     

    const [search,setSearch]= useState("");

    const  filteredUsers = user.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
    );

    return(
        <div>
        <h3> Search Users</h3>
        
        <input 
            type="text" 
            placeholder="Search users..."   
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
        <ul>
            {filteredUsers.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    </div>

    );


}

export default Search;