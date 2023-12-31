
const LocationInfoBox = ({ info }) => {
  return (
    <div className="location-info fade-transition">
        <h2>Event Location Info</h2>
        <ul>
            <li>ID: <strong>{info.id}</strong></li>
            <li>TITLE: <strong>{info.title}</strong></li>
        </ul>
    </div>
  )
}

export default LocationInfoBox