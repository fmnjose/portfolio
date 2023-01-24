import './TextAndImage.css'
import { processParagraphsToText } from '../../Utility';

function TextAndImage({ title, text, imageSource, button}) {
    return (
        <div className="text-and-image-container">
          <div className="text-container">
            <div className='title'>
              <h1> {title} </h1>
            </div>

            <p className="text">
              {processParagraphsToText(text)}
            </p>
            {button ? button : null}
          </div>
          <div className='image-container'>
            <img src={imageSource} className="image" alt="title-image"/>
          </div>
        </div>
    )
}

export default TextAndImage;