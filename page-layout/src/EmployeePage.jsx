import React from "react";

function EmployeePage({employee}){
    return (
        <div className="EmployeePage">
            <h2>{employee.name}</h2>
            <p><strong>Position:</strong>{employee.position}</p>
            <p><strong>Email:</strong>{employee.email}</p>
            <p><strong>Phone:</strong>{employee.phone}</p>
            <p><strong>Location:</strong>{employee.location}</p>

        </div>
    )
}

export default EmployeePage