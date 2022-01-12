import "./StyleTopLine/Social.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SocialIcons from "./SocialIcons/SocialIcons";

const Social = () => {
  const iconsTegs = [
    ["fab", "twitter"],
    ["fab", "dribbble"],
    ["fab", "instagram"],
    ["fab", "pinterest"],
  ];
  const icons = iconsTegs.map((i) => {
    return <SocialIcons icon={<FontAwesomeIcon icon={i} />} key={i} />;
  });

  return <div className='links'>{icons}</div>;
};

export default Social;
