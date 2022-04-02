import { useRef } from 'react';





const EventForm = (props) => {

    const titleRef = useRef('');
    const dateRef = useRef('');
    const summaryRef = useRef('');


     
      

      async function addEventHandler(e) {

        e.preventDefault();


        const event = {
          name: titleRef.current.value,
          date: dateRef.current.value,
          summary: summaryRef.current.value
        };

        const response = await fetch('http://localhost:3000/events/form', {
          method: 'POST',
          body: JSON.stringify(event),
          headers: {
            'Accept': 'application/json',
            'Content-Type': "multipart/form-data",


          }
        });
        const data = await response.json();
    
      }
      
    
      return (
       <>
       <form onSubmit={addEventHandler} encType="multipart/form-data">
       <label htmlFor="title">Event name</label><br></br>
  <input type="text" id="title" ref={titleRef} ></input><br></br>

  <label htmlFor="date">Event Date</label><br></br>
  <input type="date" id="date" ref={dateRef} ></input><br></br>

  <label htmlFor="summary">Event Summary</label><br></br>
  <textarea rows='5' id='summary' ref={summaryRef}></textarea>

  <label htmlFor="img">Associated image</label> <br></br>
  <input type="file" id="img"  name="avatar"></input>

  <br></br>

  <button>Add Event</button>

       </form>
       </>
    )
}


export default EventForm