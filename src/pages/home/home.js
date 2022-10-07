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
            officePhone: "+1",
            mobilePhone: "+2",
            sms: "+3",
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
            img: "https://www.w3schools.com/howto/img_avatar2.png"
        },
        {
            id: 3,
            name: "James King 3",
            position: "Presedient and CEO",
            officePhone: "+1",
            mobilePhone: "+2",
            sms: "+3",
            email: "jk@gmail.com",
            img: "https://www.w3schools.com/howto/img_avatar.png"
        }
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