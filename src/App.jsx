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
  const [sortBy, setSortBy] = useState('priority');

  const fetchDataFromAPI = async (key) => {
    
    try {
      const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment'); 
      const data = await response.json();
      let filteredData;
      if(key == "user"){
        filteredData = groupByUser(data.tickets);
      }
      else{
        filteredData = groupByStatus(data.tickets);
      }
      if(key == 'priority'){
        console.log(key);
        filteredData = sortByPriority(filteredData);
      }
      if(key == 'title'){
        filteredData = sortByTitle(filteredData);
      }

      setContent(filteredData);
      setUsers(data.users);
      console.log(key);
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

  const sortByPriority = (groupedTickets) => {
    const priorityOrder = [4, 3, 2, 1, 0];
    Object.keys(groupedTickets).forEach(status => {
      groupedTickets[status].sort((a, b) => priorityOrder.indexOf(b.priority) - priorityOrder.indexOf(a.priority));
    });
  
    return groupedTickets;
  };

  const sortByTitle = (groupedTickets) => {
    Object.keys(groupedTickets).forEach(status => {
      groupedTickets[status].sort((a, b) => a.title.localeCompare(b.title));
    });
    
    return groupedTickets;
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