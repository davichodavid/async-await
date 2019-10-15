import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const fetchedData = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );
      setData(fetchedData.data);
      console.log(fetchedData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='App'>
      {data.map(clump => (
        <p key={clump.id}>
          {clump.title} is the reason I like the number {clump.id}
        </p>
      ))}
      will this work
    </div>
  );
}

export default App;
