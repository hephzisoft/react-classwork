// import List from './List';
import Table from './Table'
import Form from './Form';
import {useState, useEffect} from 'react'

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com/";
  const [reqType, setReqType] = useState('users');
  const [items, SetItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try{
        const response = await fetch (`${API_URL}${reqType}`);
        const data = await response.json();
        SetItems(data);
      } 
      catch(err){
        console.log(err)
      }
    }
    fetchItems();
  }, [reqType])
  return (
    <div className="App">

      <Form reqType={reqType} setReqType={setReqType}/>
      <Table items={items}/>
      {/* <List items={items}/> */}
      
    </div>
  );
}

export default App;
