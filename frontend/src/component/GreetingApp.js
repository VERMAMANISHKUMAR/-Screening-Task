import React, { useState } from "react";
import axios from "axios";
import "./GreetingApp.css"; // CSS file ko import kr rhe hai

const GreetingApp = () => {
    // Naam aur message ke liye state management
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    // Greeting prapt karne ke liye API call karne wala function
    const fetchGreeting = async () => {
        if (!name) {  // Agar naam khali hai, to message dikhaye
            setMessage("Name is required.");
            return;
        }
        try {
            // Axios ka upyog karke server se data prapt karna
            const response = await axios.get(`https://screening-task-backend-gy7q.onrender.com/api/greet?name=${name}`);
            setMessage(response.data.message); // Server se prapt message set kare
        } catch (error) {
            setMessage("Error fetching greeting."); // Agar koi truti ho to message dikhaye
        }
    };

    return (
        <div className="greeting-container">
            <h1>Greeting App</h1> {/* Mukhya shirshak */}
            <input
                type="text"
                className="greeting-input"
                placeholder="Enter your name" // Naam darj karne ke liye placeholder
                value={name}
                onChange={(e) => setName(e.target.value)} // Naam badalte hi state update kare
            />
            <button className="greeting-button" onClick={fetchGreeting}>
                Get Greeting {/* Button click karne par greeting prapt kare */}
            </button>
            <h2 className="greeting-message">{message}</h2> {/* Greeting message dikhaye */}
        </div>
    );
};

export default GreetingApp; // Is component ko export kare
