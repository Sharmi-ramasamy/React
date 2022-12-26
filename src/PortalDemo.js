import React from 'react'
import ReactDOM  from 'react-dom'


export default function PortalDemo() {
  return ReactDOM.createPortal (
    <div>
    <h2>
      PortalDemo
      </h2>
       
     </div>,
     document.getElementById('portal-root')
  )
}