import photo from '../../Assets/Images/Photo.png';
import '../../Assets/Styles/Common.css'
import TextAndImage from '../../Components/TextAndImage/TextAndImage';
import { processParagraphsToText } from '../../Utility';
import contentText from './ContentText.json'

function About({currentLanguage}) {
    return(
      <TextAndImage 
        title={contentText[currentLanguage]["title"]}
        text={processParagraphsToText(contentText[currentLanguage]["text"])}
        imageSource={photo}
      />
    )
}

export default About;