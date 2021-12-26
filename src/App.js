import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';
import Loader from './components/Loader';
import {useDispatch, useSelector} from 'react-redux';
import {appSelector, authSucces} from './todo_store/appReducer/AppReducer';
import Auth from './components/Auth';
import { useEffect } from 'react';

function App() {
  const isLoading = useSelector(appSelector).isLoading;
  const auth = useSelector(appSelector).auth; // забирает данные как mapstatetoprops 
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(authSucces())
  }, [dispatch])


  return (
    <div className="App">
      {auth ? 
      <>
        <Header />
          	<hr />
        <TodoList /> 
      </> 
      : 
      <Auth></Auth>}
      {isLoading && <Loader />}
    </div>
  );
}



export default App;
