import React from 'react'
import './BodyContainer.css'
import Category from '../Category/category'

function BodyContainer({tickets, users}) {

  return (
    <div className="container">
        
        {Object.keys(tickets).map((status) => (
            
            <Category 
            key={status} 
            tickets={tickets[status]}
            status={status}
            users={users}
            />
        ))}
    </div>
  )
}

export default BodyContainer