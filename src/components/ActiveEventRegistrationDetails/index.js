import './index.css'

const registrationStatus = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {renderEventRegistrationDetails} = props

  const renderNoActiveView = () => (
    <div className="no-active-event-container">
      <p className="heading">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  const renderYetToRegisterView = () => (
    <div className="yet-to-register-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-register-image"
      />
      <p className="description">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="register-btn">
        Register Here
      </button>
    </div>
  )

  const renderRegisteredView = () => (
    <div className="registered-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-image"
      />
      <h1 className="registered-heading">
        You have already registered for the event
      </h1>
    </div>
  )

  const renderRegistrationClosedView = () => (
    <div className="closed-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="closed-view-image"
      />
      <h1 className="registration-closed-heading">
        Registrations Are Closed Now!{' '}
      </h1>
      <p className="registration-closed-description">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  const renderRegistrationEventDetails = () => {
    switch (renderEventRegistrationDetails) {
      case registrationStatus.yetToRegister:
        return renderYetToRegisterView()
      case registrationStatus.registered:
        return renderRegisteredView()
      case registrationStatus.registrationsClosed:
        return renderRegistrationClosedView()
      default:
        return renderNoActiveView()
    }
  }

  return (
    <div className="registration-status-container">
      {renderRegistrationEventDetails()}
    </div>
  )
}

export default ActiveEventRegistrationDetails
