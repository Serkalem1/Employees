import './employeeCardIcon.css'
export default function EmployeeCardIcon(props) {
    const { name, email, sms, officePhone, mobilePhone } = props.employee
    return (
        <div>
            <div className="emp-list" 
            onClick={()=>window.open(`tel:${officePhone}`)}
            style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                    <div>
                        Call Office
                    </div>
                    <div>
                        {officePhone}
                    </div>
                </div>
                <div style={{ placeSelf: "center" }}>
                    {">"}
                </div>
            </div>
            <div className="emp-list" 
              onClick={()=>window.open(`tel:${officePhone}`)}
            style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                    <div>
                        Call Mobile
                    </div>
                    <div>
                        {mobilePhone}
                    </div>
                </div>
                <div style={{ placeSelf: "center" }}>
                    {">"}
                </div>
            </div>
            <div className="emp-list" 
             onClick={()=>window.open(`sms:${officePhone}`)}
            style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                    <div>
                       SMS
                    </div>
                    <div>
                        {sms}
                    </div>
                </div>
                <div style={{ placeSelf: "center" }}>
                    {">"}
                </div>
            </div>
            <div className="emp-list" 
            onClick={()=>window.open(`mailto:${email}`)}
            style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                    <div>
                       Email
                    </div>
                    <div>
                        {email}
                    </div>
                </div>
                <div style={{ placeSelf: "center" }}>
                    {">"}
                </div>
            </div>
        </div>

    )
}