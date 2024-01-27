import Navbar from "./component/Navbar";
import Form from "./component/Form";
import { useContext } from "react";
import { DataContext } from "./context/dataContext";
import SearchedMusic from "./component/SearchedMusic";

function App() {

  const { data } = useContext(DataContext);
  
  return (
    <div>
      <Navbar />
      <Form />
      <div>
        {data && (
          <SearchedMusic data={data} />
        )}
      </div>
    </div>
  );
}

export default App;
