import ImageContainer from "../../components/imageContainer/ImageContainer2"

const ImagesPage = ({images, setImages}) => {
  return (
    <div><ImageContainer images={images} setImages={setImages}/></div>
  )
}

export default ImagesPage