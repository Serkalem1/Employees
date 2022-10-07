import { useLocation } from "react-router";
import EmployeeCardIcon from "../../components/employeeCardIcon/employeeCardIcon";
import EmployeeHeader from "../../components/employeeHeader/employeeHeader";
import EmployeeListItem from "../../components/employeeListItem/employeeListItem";
import Header from "../../components/header/header";

export default function Employee() {
    const {state} = useLocation();
console.log(state)
    return (
        <div >
            <Header title="Employee" />
            <div style={{margin: "25px", border: "1px solid gainsboro", borderRadius: "9px"}}>
            <EmployeeHeader employee={state}/>
            <EmployeeCardIcon employee={state}/>
            </div>
        </div>
    )
}