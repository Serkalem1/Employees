export default function EmployeeListItem(props) {
    const { name, position, img } = props.employee
    return (
        <div style={{ display: "flex", cursor:"pointer"}}>
            <div><img width="65" style={{ "borderRadius": "50%" }} src={img} alt={name} /></div>
            <div style={{ placeSelf: "center", paddingLeft: "20px" }}>
                <div>
                    {name}
                </div>
                <div>
                    {position}
                </div>
            </div>
        </div>
    )
}