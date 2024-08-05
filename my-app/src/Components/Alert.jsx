import React from 'react'

const Alert = ({message, show}) => {

    if(!show){
        return null
    }
  return (
    <div className='modal-overlay'>
      <div className='modal-content'>
            <p>{message}</p>
      </div>
    </div>
  )
}

export default Alert    
