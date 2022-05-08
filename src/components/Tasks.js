import React, { useRef, useState } from 'react'
import TaskList from './TaskList';

const contactInfo = (localStorage.getItem('contactDetails')) ? JSON.parse(localStorage.getItem('contactDetails')) : [];

const Tasks = () => {

    const [contactList, setContactList] = useState(contactInfo);

    // console.log(contactList)

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const messageRef = useRef();

    const onFormSubmit = (event) => {
        event.preventDefault();


        // holds contact submission
        const contactObject = {
            id: Date.now(),
            fName: firstNameRef.current.value,
            lName: lastNameRef.current.value,
            msg: messageRef.current.value
        }
        console.log(contactObject)


        // list.push(contactObject);
        setContactList([...contactList, contactObject]);
        localStorage.setItem('contactDetails', JSON.stringify(contactList));

        console.log(contactObject)

        firstNameRef.current.value = '';
        lastNameRef.current.value = '';
        messageRef.current.value = '';
    }

    return (
        <div className='col-12 task'>
            <div className='row'>
                <div className='col-5 tasksettings'>
                    <form onSubmit={onFormSubmit}>
                        <div className='row'>
                            <div className='col-6'>
                                <p>Name:</p>
                                <input className='name' type='text' name='firstName' ref={firstNameRef}/>
                            </div>
                            <div className='col-6'>
                                <p>Date:</p>
                                <input className='date' type='text' name='lastName' ref={lastNameRef}/>
                            </div>
                        </div>
                        <p>Your tasks:</p>
                        <textarea name='message' ref={messageRef}></textarea> <br/>
                        <input type='submit' value='Submit' name='submit' />
                    </form>
                    
                </div>
            <TaskList contactsMap={contactList} />
        </div>
        </div>
        
        
    )
}

export default Tasks
