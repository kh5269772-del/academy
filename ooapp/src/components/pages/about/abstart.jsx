import React from 'react'
import { useLocation } from 'react-router-dom'
function Abstart() {
    let location  = useLocation()
  return (
    <>
    <section className='abstart'>
     <div className="dd">
           <h3>home / {location.pathname.split('/')[1]}</h3>
        <h2>about us</h2>
     </div>


    </section>
    </>
  )
}

export default Abstart