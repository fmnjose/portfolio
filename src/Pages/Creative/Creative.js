import React, {useState} from 'react'
import Thumbnail from '../../Components/Thumbnail/Thumbnail'
import regabofe from '../../Assets/Images/RegabofeBanner.png'
import regabofePosters from '../../Assets/Images/RegabofePosters.png'
import andreCover from '../../Assets/Images/AndreCover.png'
import CreativeModal from '../Modals/CreativeModal/CreativeModal';
import contentText from './ContentText.json';

function regabofeContent(currentLanguage){
  let content=[
    {
      title:contentText.Regabofe[currentLanguage]["title"],
      label:contentText.Regabofe[currentLanguage]["label"],
      anchor:"regabofe",
      text:contentText.Regabofe[currentLanguage]["text"],
      visualContent: () => {
        return(
          <div className='image-container'>
            <img className='image' src={regabofePosters}/>
            <p className='image-label'>Posters by Simão Rodrigues: <a href='https://www.instagram.com/donsimon.edits/'>@donsimon.edits</a></p>
          </div>
        )
      }
    },
    {
      title:contentText.Livestreaming[currentLanguage]["title"],
      label:contentText.Livestreaming[currentLanguage]["label"],
      anchor:"livestreaming",
      text: contentText.Livestreaming[currentLanguage]["text"],
      visualContent: () => {
        return(
          <div className='image-container'>
            <iframe className='image' src="https://www.youtube.com/shorts/HIoGczCcVLg"/>
            <p className='image-label'>Stream link: <a href='https://www.twitch.tv/flip_ze'>twitch.tv/flip_ze</a></p>
          </div>
        )
      }
    },
    {
      title:contentText.VideoEditing[currentLanguage]["title"],
      label:contentText.VideoEditing[currentLanguage]["label"],
      anchor:"video-editing",
      text:contentText.VideoEditing[currentLanguage]["text"],
      visualContent: () => {
        return(
          <div className='image-container'>
            <iframe className='image' src="https://www.youtube.com/shorts/7J5jAq014VY"/>
            <p className='image-label'><a href='https://www.instagram.com/flip_ze/'>Instagram</a></p>
            <p className='image-label'><a href='https://www.youtube.com/@flip_ze'>Youtube</a></p>
            <p className='image-label'><a href='https://www.tiktok.com/@oflip_ze'>Tiktok</a></p>
          </div>
        )
      }
    },
    {
      title:contentText.MusicProduction[currentLanguage]["title"],
      label:contentText.MusicProduction[currentLanguage]["label"],
      anchor:"music-production",
      text: contentText.MusicProduction[currentLanguage]["text"],
      visualContent: () => {
        return(
          <div className='image-container'>
            <img className='image' src={andreCover}/>
            <p className='image-label'><a href='https://on.soundcloud.com/NxSFk'>ANDRÉ - Soundcloud</a></p>
          </div>
        )
      }
    },
    {
      title:contentText['3DModeling'][currentLanguage]["title"],
      label:contentText['3DModeling'][currentLanguage]["label"],
      anchor:"3d-modeling",
      text: contentText['3DModeling'][currentLanguage]["text"],
      visualContent: () => {
        return(
          <div className='image-container'>
            <img className='image' src={regabofe}/>
          </div>
        )
      }
    }
  ]
  return content
}

function Creative({currentLanguage}) {
  const [openId, setOpen] = useState(-1);
  return (
    <div className="thumbnails-container">
        <Thumbnail imageSource={regabofe} setOpen={() => setOpen(0)}>
          <CreativeModal 
            categories = {regabofeContent(currentLanguage)}
            openId={openId} 
            thisId={0}
            onClose={() => setOpen(-1)}
          />
        </Thumbnail>
    </div>
  )
}

export default Creative;