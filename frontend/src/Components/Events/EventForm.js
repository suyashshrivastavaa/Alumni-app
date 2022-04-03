import { useRef } from 'react';





const EventForm = (props) => {

    

      async function addEventHandler(e) {

        e.preventDefault();


        let myForm = document.getElementById('myForm');
        let formData = new FormData(myForm);

        for (var value of formData.values()) {
          console.log(value);
       }
        const response = await fetch('http://localhost:3000/events/form', {
          method: 'POST',
          body: formData,
          
        });

        const data = await response.json();
    
      } 







      return (
       <>
       <form id = "myForm" onSubmit={addEventHandler}>
         
         <div>
           <label htmlFor="title">Event name</label><br></br>
           <input name = "name" type="text" id="title"  ></input><br></br>
         </div>
            
          <div>
            <label htmlFor="date">Event Date</label><br></br>
            <input name="date" type="date" id="date"  ></input><br></br>
          </div>

          <div>
            <label htmlFor="summary">Event Summary</label><br></br>
            <textarea name="summary" rows='5' id='summary' ></textarea>
          </div>

          <div>
            <label htmlFor="img">Associated image</label> <br></br>
  <input name = "image" type="file" id="img" ></input>
          </div>
       

  


  
  <br></br>

  <button>Add Event</button>

       </form>
       </>
    )
}


export default EventForm