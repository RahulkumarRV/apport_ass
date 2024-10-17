import React, {useEffect, useState} from 'react';

import Card from "./components/Card/Card.jsx";
import Category from "./components/Category/category.jsx";
import FilterCard from "./components/FilterCard/FilterCard.jsx";
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx"
import BodyContainer from "./components/BodyContainer/BodyContainer.jsx";

const App = () => {
  const [content, setContent] = useState([]);
  const [users, setUsers] = useState([]);

  const fetchDataFromAPI = async (key) => {
    
    try {
      const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment'); // Replace with actual API endpoint
      const data = await response.json();
      if(key == "user"){
        setContent(groupByUser(data.tickets));
      }
      else if(key == "status"){
        setContent(groupByStatus(data.tickets));
      }
      setUsers(data.users);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const groupByStatus = (tickets) => {
    return tickets.reduce((acc, ticket) => {
      const { status } = ticket;
      if (!acc[status]) {
        acc[status] = [];
      }
      acc[status].push(ticket);
      return acc;
    }, {});
  };

  const groupByUser = (tickets) => {
    return tickets.reduce((acc, ticket) => {
      const { userId } = ticket;
      if (!acc[userId]) {
        acc[userId] = [];
      }
      acc[userId].push(ticket);
      return acc;
    }, {});
  };

  useEffect(()=>{
    fetchDataFromAPI("user");
  }, []);

  return (
    <>
      <Navbar onDropdownSelect={fetchDataFromAPI}/>
      <BodyContainer tickets={content}
      users={users}/>
    </>
  );
};

export default App;