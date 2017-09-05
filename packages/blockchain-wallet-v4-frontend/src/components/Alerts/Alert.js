import React from 'react'

const Alert = ({ type, message, id, onDismiss }) => (
  <div className={`alert alert-${type} alert-dismissable`}>
    <button type='button' className='close' onClick={() => onDismiss(id)}>
      <span>&times;</span>
    </button>
    <div><span>{message}</span></div>
  </div>
)

export default Alert
