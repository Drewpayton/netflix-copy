import "./listItem.scss";
import mowgli from "../../assets/mowgli.PNG";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import { useState } from "react";

const ListItem = ({index}) => {
  const [isHovered, setIsHovered] = useState(false)
  const trailer = ""

  return (
    <div className="listItem" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} style={{left: isHovered && index * 225 - 50}}>
      <img src={mowgli} alt="Mowgli" />
      {isHovered && (
        <>
      <video src={trailer} autoPlay={true} loop></video>
      <div className="itemInfo">
        <div className="icons">
            <PlayArrowIcon />
            <AddIcon />
            <ThumbUpOutlinedIcon />
            <ThumbDownOutlinedIcon />
        </div>
        <div className="itemInfoTop">
          <span>1 hour 14 mins</span>
          <span className="limit">Rated E</span>
          <span>2018</span>
        </div>
        <div className="desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</div>
      </div>
      <div className="genre">Family</div>
      </>
      )}
    </div>
      
    
  );
};

export default ListItem;
