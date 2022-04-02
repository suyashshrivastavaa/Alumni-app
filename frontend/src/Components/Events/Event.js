



const Event = (props) => {


    return (
        <>
       <li>
      <h2>{props.name}</h2>
      <h3>{props.summary}</h3>
      <h3>{props.date}</h3>
    </li>
        </>
    )
}


export default Event