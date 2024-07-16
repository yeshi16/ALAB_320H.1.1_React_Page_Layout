import React, { useState } from 'react'
import EmployeeListItem from './EmployeeListItem'

function EmployeeList() {

  const [employees, useEmployees] = useState(
     [
        { 
            id: 1, 
            photo: "https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=800", 
            name: "Bemenet Demissie", 
            position: "Software Engineer", 
            email: "example1@luravel.com", 
            phone: "000 - 000 - 0000", 
            location: "Remote"
          },
          { 
            id: 2, 
            photo: "https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&w=800", 
            name: "Hiwot Gebre", 
            position: "Software Engineer", 
            email: "example2@luravel.com", 
            phone: "111 - 111 - 1111", 
            location: "Remote"
          },
        {
          id: 3, 
          photo: "https://images.pexels.com/photos/36753/flower-purple-lical-blosso.jpg?auto=compress&cs=tinysrgb&w=800", 
          name: "Kavahnti Clark ", 
          position: "Software Engineer", 
          email: "example2@luravel.com", 
          phone: "111 - 111 - 1111", 
          location: "Remote"
        },
          { 
            id: 4, 
            photo: "https://images.pexels.com/photos/46216/sunflower-flowers-bright-yellow-46216.jpeg?auto=compress&cs=tinysrgb&w=800", 
            name: "Kirby Zabala", 
            position: "Software Engineer", 
            email: "example3@luravel.com", 
            phone: "222 - 222 - 2222", 
            location: "Remote"
          },
          { 
            id: 5, 
            photo: "https://images.pexels.com/photos/1369068/pexels-photo-1369068.jpeg?auto=compress&cs=tinysrgb&w=800", 
            name: "Tahesha Orji", 
            position: "UI/UX Designer", 
            email: "example4@luravel.com", 
            phone: "333 - 333 - 3333", 
            location: "Remote"
          },
          { 
            id: 6, 
            photo: "https://images.pexels.com/photos/696996/pexels-photo-696996.jpeg?auto=compress&cs=tinysrgb&w=800", 
            name: "Meba Shimelis", 
            position: "UI/UX Designer", 
            email: "example5@luravel.com", 
            phone: "444 - 444 - 4444", 
            location: "Remote"
          },
          { 
            id: 7, 
            photo: "https://images.pexels.com/photos/60909/rose-yellow-flower-petals-60909.jpeg?auto=compress&cs=tinysrgb&w=800", 
            name: "Yemsrach Sisay", 
            position: "UI/UX Designer", 
            email: "example6@luravel.com", 
            phone: "555 - 555 - 5555", 
            location: "Remote"
          },
          { 
            id: 8, 
            photo: "https://images.pexels.com/photos/65653/flower-impala-lily-floral-plant-65653.jpeg?auto=compress&cs=tinysrgb&w=800", 
            name: "Niecey Crumpler", 
            position: "Product Manager", 
            email: "example7@luravel.com", 
            phone: "666 - 666 - 6666", 
            location: "Remote"
          }
    ] )

    return (
      
        <div className='EmployeeList'>
            {/* {employees.map(employee => {
                // <EmployeeListItem key={employee.id} employee={employee}/>  
            })} */}

            {/* <EmployeeListItem key={employees[0].id} employee={employees[0]}/>   */}

            {employees.map((emp) => {
              <EmployeeListItem key={emp.id} employee={emp}/>  
              // console.log(emp)

            })}

        </div>
    )
}
export default EmployeeList