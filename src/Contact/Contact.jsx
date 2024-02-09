import React from 'react'

export default function Contact() {
  return (
    <div>
      <h2 className='fs-1 d-flex justify-content-center  contact'>CONATCT SECTION</h2>

      <div className=' d-flex justify-content-center icon'>
      <i className="fa-sharp fa-solid fa-star m-auto"></i>
      </div>

      <form className='w-50 container mb-5'>
        <input type='text'className='form-control mb-5' placeholder='userName'></input>
        <input type='text'className='form-control mb-5 ' placeholder='userAge'></input>
        <input type='text'className='form-control mb-5' placeholder='userEmail'></input>
        <input type='text'className='form-control mb-5' placeholder='userPassword'></input>
        <button className='btn btn-info'>SENDMESSAGE</button>
        
      </form>

      <div className='aboutcontent text-white'>
<div className='container'>
<div className='row'>
    <div className='col-lg-4  '>

        <div className='p-5 text-center '>
<h2>LOCATION</h2>
<p>2215 John Daniel Drive</p>
<p>Clark, MO 65243</p>
        </div>
    </div>

    <div className='col-lg-4  '>

<div className='p-5 text-center'>
<h2>AROUND THE WEB</h2>
<p>2215 John Daniel Drive</p>
<p>Clark, MO 65243</p>
</div>
</div>
<div className='col-lg-4  '>

        <div className='p-5 text-center'>
<h2>ABOUT FREELANCER</h2>
<p>Freelance is a free to use, licensed <br></br>Bootstrap theme created by Route</p>

        </div>
    </div>
</div>
</div>
</div>

    </div>
  )
}
