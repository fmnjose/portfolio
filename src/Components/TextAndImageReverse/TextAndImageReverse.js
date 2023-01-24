import './TextAndImageReverse.css'

function TextAndImageReverse({ title, text, imageSource, button}) {
    return (
        <div className="text-and-image-reverse-container">
          <div className='image-container'>
            <img src={imageSource} className="image" alt="photo"/>
          </div>
          <div className="text-container">
            <div className='title'>
              <h1> {title} </h1>
            </div>

            <p className="text">
              {text}
            </p>
            {button ? button : null}
          </div>
        </div>
    )
}

export default TextAndImageReverse;