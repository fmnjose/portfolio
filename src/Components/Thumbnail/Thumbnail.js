import './Thumbnail.css'

function Thumbnail({imageSource, children, setOpen}) {
    return (
        <div className="thumbnail-container">
          <img
            onClick={setOpen} 
            src={imageSource} 
            className="image" 
            alt="thumbnail-image"
          />
          {children}
        </div>
    )
}

export default Thumbnail;