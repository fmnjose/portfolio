import React from 'react'
import Modal from '../Modal';
import CreativeModalLabels from './CreativeModalLabels';
import './CreativeModal.css'
import { processParagraphsToText } from '../../../Utility';

/**
 * categories is an array of dictionaries {title, text, visualContent}
 * @param {*} param0 
 * @returns 
 */
function CreativeModal({categories, openId, thisId, onClose}) {
  if (openId != thisId) return null;
  return ( 
    <Modal onClose={onClose} modalClassName='creative-modal-container'>
      <CreativeModalLabels categories={categories}/>
      <div className="category-content-container">
        {parseCategories(categories)}
      </div>
    </Modal>
  )
}

function parseCategories(categories){
  let content = categories.map((key) => 
    { return(
        <div id={key.anchor} className='category-container'>
          {key.visualContent()}
          <div className='text-container'>
            <h2 className='title'>{key.title}</h2>
            {processParagraphsToText(key.text)}
          </div>
        </div>
      )
    }
  );
  return(content)
}

export default CreativeModal;
