export default function TripLists() {

    fetch('http://localhost:3000/trips')
    .then(response => response.json())
    .then(json => console.log(json))


  return (
    <div>
      <h2>Trip List</h2>
    </div>
  )
}

