import React from 'react'

const ThoughtList = (props) => {
    return (

        <div className='col-7 taskNoted'>
            {props.contactsMap.map((row) => (
                <button className='task'>
                        <p className='name'>{row.fName} <span className='date'>{row.lName}</span></p>
                        <span className='message'>{row.msg}</span>
                </button>
                        
            ))}
        </div>
    )
}

export default ThoughtList
