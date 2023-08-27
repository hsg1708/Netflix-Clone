import React from 'react'

export default function Footer() {
  const year=new Date().getFullYear()
  return (
    <div className='footer' style={{color:"white"}}>
      copyright © {year}. All rights reserved 
    </div>
  )
}
