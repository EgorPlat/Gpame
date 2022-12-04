import { useEffect } from 'react';
import { useHistory } from 'react-router';
import './App.css';
import Router from './router/router';

function App() {

  const router = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('access-token');
    if (token && token.length !== 0) {
      router.push('/main');
    } else {
      router.push('/authorization');
    }
  }, []);
  
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
