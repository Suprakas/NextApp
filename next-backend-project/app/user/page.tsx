"use client"; // While we are using client components, we need to use "use client" directive at the top of the file
// This is a client component because it uses hooks like useState and useEffect
import axios from "axios";
import { useState, useEffect } from "react";

export default function User() {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    useEffect ( () => {
        axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
        .then(response => {
          setData(response.data);
            setLoading(false);
        })
    }, []);

    if(loading) {
        return <div>Loading...</div>;
    }
 
    return (
        <div>
            <h1>User Details</h1>
            {data ? (
                <div>
                    <p><strong>Name:</strong> {data?.name}</p>
                    <p><strong>Email:</strong> {data?.email}</p>
                </div>
            ) : (
                <p>No user data available.</p>
            )}
        </div>
    );
}