import Card from '../Card/Card';
import Header from '../Header/Header';
import './category.css';
import React, { useState, useEffect } from 'react';

const Category = ({ tickets, status, users }) => {
    const [isUser, setIsUser] = useState(false);
    const [userDetails, setUserDetails] = useState(null); // Added state to hold user details

    useEffect(() => {
        // Get user details based on the status
        const user = users.find(user => user.id === status); // Adjust to find user by status
        if (user) {
            setUserDetails(user); // Store the user details
            setIsUser(true); // User exists
        } else {
            setIsUser(false); // User does not exist
            setUserDetails(null); // Reset user details
        }
    }, [users, status]);

    const getUserDetails = (userId) => {
        return users.find((user) => user.id === userId);
    };

    return (
        <div className='category'>
            <Header
                Type={isUser && userDetails ? userDetails.name : status} // Safely use userDetails
                Count={tickets?.length}
            />
            {tickets.map((ticket) => (
                <Card
                    key={ticket.id}
                    id={ticket.id} // Use actual ticket ID
                    iconSrc="path/to/image.png" // Make sure to replace with actual path
                    title={ticket.title} // Use actual title from the ticket
                    dots="..."
                    footerIcon="🔒" // You can pass any icon or image
                    footerText={ticket.tag.join(", ")} // Assuming tags are array
                />
            ))}
        </div>
    );
};

export default Category;
