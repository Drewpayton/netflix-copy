import "./watch.scss";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Watch = () => {
  return <div className="watch">
    <div className="back">
        <ArrowBackIcon />
        Home
    </div>
    <video className="video" autoPlay progress controls src=""></video>
  </div>;
};

export default Watch;
