import { useRef, useState, useContext } from "react";
import { fetchYtToMp3 } from "../api/fetchYtToMp3";
import { DataContext } from "../context/dataContext";
import { parseIdFromLink } from "../utils";

const Form = () => {
  const [urlId, setUrlId] = useState(null);
  const inputRef = useRef(null);
  const {setData} = useContext(DataContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchYtToMp3(urlId)
      .then((data) => {
        if(data.msg !== "success") return alert(data.msg)
        setData({
          data,
          id: parseIdFromLink(urlId),
        })
      })
      .catch((err) => console.log(err))
  };

  const handleChange = () => {
    const value = inputRef.current.value;
    setUrlId(value);
  }
  
  
  return (
    <form className="flex lg:flex-row flex-col justify-center items-center gap-5" onSubmit={handleSubmit}>
      <input ref={inputRef} onChange={handleChange} className="inpt" type="text" placeholder="Enter yt music link" />
      <button className="btn" type="submit">
        Search
      </button>
    </form>
  );
};
export default Form;
