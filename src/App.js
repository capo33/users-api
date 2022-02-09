import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import HomePage from "./components/HomePage";
import UserDetails from "./components/UserDetails";

import "./App.css";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [users, setUsers] = useState([]);
  console.log(users);

  const url = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    /**** fetching data from the api using axios ****/
    const fetchData = async () => {
      const result = await axios(url);
      try {
        setUsers(result.data);
        setIsLoaded(true);
      } catch (error) {
        setIsLoaded(true);
        setError(error);
      }
    };
    fetchData();

    /**** fetching data from the api using fetch ****/
    /*  fetch("https://jsonplaceholder.typicode.com/users/")
       .then((res) => res.json())
       .then(
         (data) => {
           setIsLoaded(true);
           setUsers(data);
           console.log(data);
         },
         (error) => {
           setIsLoaded(true);
           setError(error);
         }
     );*/
  }, []);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage users={users} />} />
          <Route path="/users/:id" element={<UserDetails users={users} />} />
        </Routes>
      </Router>
    </div>
  );
}
//

export default App;
