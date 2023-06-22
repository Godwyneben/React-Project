import { useState, useEffect } from "react"

// styles 
import './TripLists.css'
export default function TripLists() {
    const [trips, setTrips] = useState([])
    
    useEffect(() => {  
        fetch('http://localhost:3000/trips')
        .then(reponse => reponse.json())
        .then(json => setTrips(json))
    }, [])

    
    console.log(trips)

    return (
        <div className="trip-list">
            <h2>Trip List</h2>  
            <ul>
                {trips.map(trip => (
                    <li key={trip.id}>
                        <h3>{trip.title}</h3>
                        <p>{trip.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
