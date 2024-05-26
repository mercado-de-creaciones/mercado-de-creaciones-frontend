import IconStar from "/assets/star.svg"
import IconStarHalf from "/assets/star-half.svg"

export const starRanking = (cant: number) => {
  const starsArray = Array(Math.floor(cant)).fill(null);
  
  return (
    <>
      { starsArray.map((_, i) => <img key={i} src={IconStar} alt="icon" />) }

      { cant !== (Math.floor(cant)) && <img src={IconStarHalf} alt="icon" /> }
    </>
  )
}