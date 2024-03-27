import React from 'react'
import Header2 from '../../Components/Header2'
import Footer from '../../Components/Footer'
import TeamMembers from '../../Components/TeamMembers'
import './index.css'

const Team = () => {
    return (
        <>
            <Header2 />
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10vh', alignItems: 'center', flexDirection: 'column' }}>
                <h1 className='text-blue-500 font-bold text-xl'>Our Team</h1>
                <p className='text-sm'> we all are ready for you </p>
                <div className='container'>
                    <TeamMembers /> 
                </div>
            </div>

            <Footer/>
        </>
    )
}

export default Team