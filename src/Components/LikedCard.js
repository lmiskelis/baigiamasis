import ImageSlider from "./Slider";
function LikedCard({x}) {
  
  return (
    <div className="Likedcard">
      <ImageSlider slides={x.images}/>
      <h1>{x.username}</h1>
    </div>
  );
}

export default LikedCard;