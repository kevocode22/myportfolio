import React from 'react'
import info from '../assets/webs.json'

const Cards = () => {

const card = info.webs
  return (
    <div className="flex justify-center w-full p-3 flex-wrap">
        {card.map(c =>
<div className="card m-10">
    <div className="circle"></div>
    <div className="circle"></div>

    <div className="card-inner" style={{fontSize:"1.5rem", height:"100%"}}>
    <video autoPlay loop muted src={c.image}/>
    <h4>{c.name}</h4>
    <p style={{fontSize:"1.2rem", padding:"0.5rem", height:"40%"}} className="flex justify-center items-center">{c.description}</p>
    <div className="flex justify-center m-1">
   <a href={c.web} target="_blank" rel="noreferrer"><button className='mx-2 bg-[#ffc23d] text-dark'><img src="https://icon-library.com/images/www-icon-vector/www-icon-vector-12.jpg" style={{height:"1.5rem", width:"1.5rem", marginRight:"0.3rem", backgroundColor:"#ffc23d", borderRadius:"50%"}} alt="Icon" />Web</button></a>
   <a href={c.git} target="_blank" rel="noreferrer"><button className='bg-[#ffc23d] text-dark'><img src="https://cdn-icons-png.flaticon.com/512/1051/1051377.png?w=360" style={{height:"1.5rem", width:"1.5rem", marginRight:"0.3rem", backgroundColor:"#ffc23d", borderRadius:"50%"}} alt="Icon" />Github</button></a>
   </div>
    </div>
    
</div>)}
    </div>
  )
}

export default Cards








