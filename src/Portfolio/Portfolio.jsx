import React from 'react'
import img1 from '../../src/Assets/Screenshot 2024-02-09 153537.png'
import img2 from '../../src/Assets/Screenshot 2024-02-09 153620.png'


export default function Portfolio() {
  return (
    <div>
      
      <h2 className='fs-1 d-flex justify-content-center  contact'>PORTFOLIO COMPONENT</h2>

      <div className=' d-flex justify-content-center icon'>
      <i className="fa-sharp fa-solid fa-star m-auto"></i>
      </div>

      <div className='portfoliocontent '>
<div className='container'>
<div className='row  d-flex justify-content-center'>

    <div className='col-lg-4   '>

        <div className='p-5  '>
            <div className='bg-info portfoliowidth d-flex justify-content-center align-items-center'>
        <img src={img1} alt=''className='img1'/>
        <div className='layer'></div>
        </div>
        </div>
    </div>

    <div className='col-lg-4   '>

        <div className='p-5  '>
            <div className='bg-info portfoliowidth d-flex justify-content-center align-items-center'>
        <img src={img1} alt=''className='img1'/>
        <div className='layer'></div>
        </div>
        </div>
    </div>



    <div className='col-lg-4   '>

        <div className='p-5  '>
            <div className='bg-info portfoliowidth d-flex justify-content-center align-items-center'>
        <img src={img1} alt=''className='img1'/>
        <div className='layer'></div>
        </div>
        </div>
    </div>



    <div className='col-lg-4   '>
        
        <div className='p-5  '>
            <div className='bg-info portfoliowidth d-flex justify-content-center align-items-center'>
        <img src={img1} alt=''className='img1'/>
        <div className='layer'></div>
        </div>
        
    </div>
    </div>


    <div className='col-lg-4   '>

        <div className='p-5  '>
            <div className='bg-info portfoliowidth d-flex justify-content-center align-items-center'>
        <img src={img1} alt=''className='img1'/>
        <div className='layer'></div>
        </div>
        </div>
    </div>

    <div className='col-lg-4   '>

        <div className='p-5  '>
            <div className='bg-info portfoliowidth d-flex justify-content-center align-items-center'>
        <img src={img1} alt=''className='img1'/>
        <div className='layer'></div>
        </div>
        </div>
    </div>

   

</div>
</div>
</div>

     

    </div>
  )
}
