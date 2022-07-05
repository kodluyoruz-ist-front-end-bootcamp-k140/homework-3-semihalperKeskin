import { useState } from 'react';
import './App.css';
import { DataGridFnPosts, DataGridFnTodos, DataGridClsPosts, DataGridClsTodos} from './components/data-grid'


function App() {
  const [upload, setUpload] = useState(true)
  const [chooseFunc, setChooseFunc] = useState(true)

  return (
    <div className="App ">
      <div className='container'>
      <div className="Row">
      <button type="button"  onClick={()=> setChooseFunc(true)} className={chooseFunc ? "btn btn-primary" : "btn btn-default"}>Class components</button>
      <button type="button"  onClick={()=> setChooseFunc(false)} className={chooseFunc ?  "btn btn-default" : "btn btn-primary"}>function components</button>
      </div>

      {chooseFunc ? <div className="Row">
      <button type="button"  onClick={()=> setUpload(true)} className={upload ? "btn btn-primary" : "btn btn-default"}>Todos</button>
      <button type="button"  onClick={()=> setUpload(false)} className={upload ? "btn btn-default" : "btn btn-primary"}>Posts</button>
      {upload ? <DataGridClsTodos/>  : <DataGridClsPosts/>}
      </div>
      :
      <div className="Row">
      <button type="button"  onClick={()=> setUpload(true)} className={upload ? "btn btn-primary" : "btn btn-default"}>Todos</button>
      <button type="button"  onClick={()=> setUpload(false)} className={upload ? "btn btn-default" : "btn btn-primary"}>Posts</button>
      {upload ? <DataGridFnTodos/>  : <DataGridFnPosts/>}
      </div>}
      </div>
      
    </div>
  );
}

export default App;
