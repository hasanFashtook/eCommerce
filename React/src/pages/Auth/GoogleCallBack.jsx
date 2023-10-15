import axios from "axios";
import { useEffect } from "react";
import { baseUrl, googelCallBack } from "../../API/Api";
import { useLocation } from "react-router-dom";

export default function GoogleCallBack() {

  const path = useLocation().search;

  useEffect(() => {
    axios(`${baseUrl}/${googelCallBack}/${path}`)
      .then(res => console.log(res))
      .catch((err) => console.log(err))
  }, [path]);

  return (
    <div className='GoogleCallBack'>
      Google Call Back
    </div>
  );
}
