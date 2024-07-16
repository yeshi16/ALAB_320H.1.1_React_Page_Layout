import React from "react";
import { useState } from "react";

function EmployeeListItem({employee}){
    // const [showDetails, setShowDetails] = useState(false)

    // const toggleDetails = () => {
    //     setShowDetails(!showDetails)
    // }

    return (
       
        <div className="EmployeeListItem">
            <div className="employeeHeader">
                <img src={employee.photo} alt={employee.name} />
                <div>
                    <h3>{employee.name}</h3>
                    <p>{employee.position}</p>
                </div>
            </div>
            {/* {showDetails && <EmployeePage employee={employee} />}
            <button onClick={toggleDetails}>
                {showDetails ? "Hide Details" : "Show Details"}
            </button> */}
        </div>
   
    )
}

export default EmployeeListItem