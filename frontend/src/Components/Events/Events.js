import classes from './Events.module.css'
import Event from './Event'
import bgimg from '../../Assets/bgimg.jpg'
import { useEffect, useCallback, useState } from 'react';

const Events = (props) => {

    const [events, setEvents] = useState([]);

  const fetchEventsHandler = useCallback(async () => {
    try {
      
      
      const response = await fetch('http://localhost:3000/events/');
      
      
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      const transformedEvents = data.map((event) => {
        return {
        id: event._id,
          name: event.name,
          date: event.date,
          summary: event.summary,
          avatar: event.avatar,
        };
      });

      setEvents(transformedEvents);

    } catch (error) {
        console.log("wrong")
    }
  }, []);

  useEffect(() => {
    fetchEventsHandler();
  }, [fetchEventsHandler]);



    return (
        <>
       <ul>
      {events.map((event) => (
        <Event
        key={event.id}
             name={event.name}
          date={event.date}
          summary={event.summary}
          avatar={event.avatar}
        />
      ))}
    </ul>
        
        </>
    )
    
}

export default Events;