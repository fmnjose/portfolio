import React from 'react'
import Modal from '../Modal';
import './ITModal.css'
import { processParagraphsToText } from '../../../Utility';

function ITModal({title, text, imageSource, openId, thisId, onClose}) {
  if (openId != thisId) return null;
  return (
      <Modal onClose={onClose} modalClassName='it-modal-container'>
        <div className='image-container'>
          <img className='image' src={imageSource}/>
        </div>
        <div className='text-container'>
          <h2 className='title'>{title}</h2>
          {processParagraphsToText(text)}
        </div>
      </Modal>
  )
}

export default ITModal;
