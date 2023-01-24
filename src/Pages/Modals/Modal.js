import React from 'react'
import './Common.css'

export default function Modal({onClose, children, modalClassName}) {
  return (
    <div onClick={onClose} className='overlay'>
      <div onClick={(e) => e.stopPropagation()} className={`${modalClassName}`}>
        {children}
      </div>
    </div>
  )
}
