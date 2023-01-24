import React from 'react'

function CreativeModalLabels({categories}) {
  return (
    <div className='labels-container'>
        {createLabels(categories)}
    </div>
  )
}

function createLabels(categories){
  let content = categories.map((key) => {
      return(
        <div className='label-wrapper'>
          <a href={`#${key.anchor}`}>
            <p className='label'>{key.label}</p>
          </a>
        </div>
      )
    }
  );
  return(content)
}

export default CreativeModalLabels;