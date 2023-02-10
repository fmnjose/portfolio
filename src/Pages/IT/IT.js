import React, {useState} from "react";
import celfocus from "../../Assets/Images/CelfocusBlack.png"
import lovelystay from "../../Assets/Images/Lovelystay.png"
import memcached from "../../Assets/Images/Memcached.png"
import Thumbnail from "../../Components/Thumbnail/Thumbnail";
import ITModal from "../Modals/ITModal/ITModal";
import contentText from "./ContentText.json";
import './IT.css'

function IT({currentLanguage}) {
    const [openId, setOpen] = useState(-1);
    return(
      <div className="thumbnails-container">
        <Thumbnail imageSource={celfocus} setOpen={() => setOpen(0)}>
          <ITModal 
            title={'Celfocus'}
            text= {contentText.Celfocus[currentLanguage].description}
            technologiesList={contentText.Celfocus[currentLanguage].technologies}
            imageSource={celfocus}
            openId={openId} 
            thisId={0}
            onClose={() => setOpen(-1)}/>
        </Thumbnail>

        <Thumbnail imageSource={lovelystay} setOpen={() => setOpen(1)}>
          <ITModal 
            title={'Lovelystay'}
            text= {contentText.Lovelystay[currentLanguage].description}
            technologiesList={contentText.Lovelystay[currentLanguage].technologies}
            imageSource={lovelystay}
            openId={openId} 
            thisId={1}
            onClose={() => setOpen(-1)}/>
        </Thumbnail>
        <Thumbnail imageSource={memcached} setOpen={() => setOpen(2)}>
        <ITModal 
            title={"'Improving Web Applications using a Variant of Memcached'"}
            text= {contentText.Memcached[currentLanguage].description}
            technologiesList={contentText.Memcached[currentLanguage].technologies}
            imageSource={memcached}
            openId={openId} 
            thisId={2}
            onClose={() => setOpen(-1)}/>
        </Thumbnail>
      </div>
    )
}

export default IT;