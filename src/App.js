import logo from './logo.svg';
import DataGrid from "./components/data-grid/data-grid-Posts"
import './App.css';
import DataGridPosts from './components/data-grid/data-grid-Posts';
import { useState } from 'react';
import DataGridTodos from './components/data-grid/data-grid-todos';

function App() {
  const [upload, setUpload] = useState(true)
  return (
    <div className="App ">
      <div className='container'>
      <button type="button"  onClick={()=> setUpload(true)} className={upload ? "btn btn-primary" : "btn btn-default"}>Todos</button>
      <button type="button"  onClick={()=> setUpload(false)} className={upload ? "btn btn-default" : "btn btn-primary"}>Posts</button>
      </div>
      {upload ? <DataGridTodos/> : <DataGridPosts/>}
    </div>
  );
}

export default App;
