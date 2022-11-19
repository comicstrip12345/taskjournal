import React from 'react'

const Body = () => {
    return (
        <section className='body'>
            <div className='container'>
                <div className='row'>
                    <div className='col-6 menu'>
                        <img src={require('../images/add.png')} alt='menu-pic'/>
                        <img src={require('../images/trash.png')} alt='menu-pic'/>
                    </div>
                    <div className='col-6 toggle'>
                        <select>
                        <option>All</option>
                        <option>Thoughts</option>
                        <option>Tasks</option>
                        </select>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Body