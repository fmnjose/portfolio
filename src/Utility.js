export function processParagraphsToText(paragraphsArray){
    return  paragraphsArray.map((paragraphText) => {
      return(
        <p className='text'>{paragraphText}</p>
      )
    })
}