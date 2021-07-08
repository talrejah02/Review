import './App.css';
import Login from './components/login/Login';
import Review from './components/review/Review';
import {auth} from './firebase/Config';
import {useAuthState} from 'react-firebase-hooks/auth';


function App() {
  const [user] = useAuthState(auth)

  return (
    <section className="App">
      {user?
      <Review/>:
      <Login/>
    }
    </section>
  );
}

export default App;
