import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import EmployeeListItem from "../../components/employeeListItem/employeeListItem";
import Header from "../../components/header/header";

export default function Home() {
    const employees = [
        {
            id: 1,
            name: "James King",
            position: "Presedient and CEO",
            officePhone: "+123-4567-8910",
            mobilePhone: "+123-456-7890",
            sms: "+123-4567-8910",
            email: "jk@gmail.com",
            img: "https://www.w3schools.com/howto/img_avatar.png"
        },
        {
            id: 2,
            name: "Julia Taylor",
            position: "VP of Marketing",
            officePhone: "781-000-0002",
            mobilePhone: "617-000-0002",
            sms: "617-000-0002",
            email: "jtaylor@fakemail.com",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZLj-_GvAq3uElBjhHjivCw_QX2hBpiJxfhA&usqp=CAU"
        },
        {
            id: 3,
            name: "Eugene lee",
            position: "CEO",
            officePhone: "+1",
            mobilePhone: "+2",
            sms: "+3",
            email: "El@gmail.com",
            img: "https://www.w3schools.com/howto/img_avatar.png"
        },
        {
            id: 4,
            name: "John williams",
            position: "Vp of engineering",
            officePhone: "+123-456-7891",
            mobilePhone: "+2",
            sms: "+3",
            email: "jw@gmail.com",
            img: "https://cdn-icons-png.flaticon.com/512/194/194938.png"  
        },
        {
        id: 5,
        name: "Ray Moope",
        position: "vp of sales",
        officePhone: "+123-456-7891",
        mobilePhone: "+2",
        sms: "+3",
        email: "rm@gmail.com",
        img: "https://www.w3schools.com/w3images/avatar6.png" 
          
    },
    {
    id: 6,
    name: "paul Jones",
    position: "QA Manager",
    officePhone: "+123-456-7891",
    mobilePhone: "+2",
    sms: "+3",
    email: "pu@gmail.com",
    img: "https://www.lightningdesignsystem.com/assets/images/avatar2.jpg"  
},
    ];

    const [employeesData, setEmployeesData] = useState(employees);

    const [employeeName, setEmployeeName] = useState();
    const navigate = useNavigate()
    useEffect(() => {
        setEmployeesData(employees)
    }, [])
    useEffect(() => {
        if (employeeName)
            setEmployeesData(employees.filter((elt) => elt.name.toLowerCase().indexOf(employeeName.toLowerCase()) !== -1))
        else
            setEmployeesData(employees)

    }, [employeeName])
    return (
        <div style={{padding: "5px"}}>
            <Header title="Employee Directory" />
            <input onChange={(e) => setEmployeeName(e.target.value)} style={{width:"98%", height: "32px"}} />
            <div style={{padding: "10px"}}>
            {employeesData?.map((elt) => <div onClick={()=> navigate('employee',{ state: elt})}> <EmployeeListItem employee={elt} /></div>)}
            </div>
        </div>
    )
}