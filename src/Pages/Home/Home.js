import { Link } from 'react-router-dom';
import companiesLogo from '../../Assets/Images/CompaniesLogo.png';
import regabofe3dBanner from '../../Assets/Images/Regabofe3DBanner.png';
import '../../Assets/Styles/Common.css'
import TextAndImage from '../../Components/TextAndImage/TextAndImage';
import TextAndImageReverse from '../../Components/TextAndImageReverse/TextAndImageReverse';
import contentText from './ContentText.json';

const BUTTON_TEXT = {
  "PT": "Saber mais",
  "EN": "Learn more"
}

function generateButton(buttonText, route){
  return(
    <Link to={route}>
      <button type='button' className='learn-more-button'>
        {buttonText}
      </button>
    </Link>
  )
}

function Home({currentLanguage}) {
    return(
      <div>
        <TextAndImage 
          title={contentText["ITWork"][currentLanguage]["title"]}
          text={contentText["ITWork"][currentLanguage]["text"]}
          button={generateButton(BUTTON_TEXT[currentLanguage], "/it")}
          imageSource={companiesLogo}
        />
        <TextAndImageReverse
          title={contentText["Creative"][currentLanguage]["title"]}
          text={contentText["Creative"][currentLanguage]["text"]}
          button={generateButton(BUTTON_TEXT[currentLanguage], "/creative")}
          imageSource={regabofe3dBanner}
        />
      </div>
    )
}

export default Home;