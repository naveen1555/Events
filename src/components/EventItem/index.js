import './index.css'

const EventItem = props => {
  const {eventDetails, clickedEventDetails, isActive} = props

  const {id, imageUrl, name, location} = eventDetails

  const eventImageClass = isActive ? 'event-image active' : 'event-image'

  const onClickEventItem = () => {
    clickedEventDetails(id)
  }

  return (
    <li className="event-item">
      <button type="button" className="event-button" onClick={onClickEventItem}>
        <img src={imageUrl} alt="event" className={eventImageClass} />
      </button>
      <p className="event-name">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}

export default EventItem
