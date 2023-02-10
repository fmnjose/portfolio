import React from 'react'
import Modal from '../Modal';
import './ITModal.css'
import { processParagraphsToText } from '../../../Utility';

function ITModal({title, text, technologiesList, imageSource, openId, thisId, onClose}) {
  if (openId != thisId) return null;
  return (
      <Modal onClose={onClose} modalClassName='it-modal-container'>
        <div className='image-container'>
          <img className='image' src={imageSource}/>
        </div>
        <div className='text-container'>
          <h2 className='title'>{title}</h2>
          {processParagraphsToText(text)}

          <TechnologiesList 
          techTitle={technologiesList.title}
          techList={technologiesList.list}
          />
        </div>
        
      </Modal>
  )
}

function TechnologiesList({techTitle, techList}) {
  let list = techList.map(element => {
    return(<li>{element}</li>)
  })
  console.log(list)

  return (
    <div>
      <h2 className='title'>{techTitle}</h2>
      {list}
    </div>
  )
}

export default ITModal;
