const List=(props)=>{
    return (
        <>
        <h1>{props.heading}</h1>
        <ul>
            <li>{props.li1}</li>
            <li>{props.li2}</li>
            <li>{props.li3}</li>
            <li>{props.li4}</li>
        </ul>
        </>
    )
}


export default List