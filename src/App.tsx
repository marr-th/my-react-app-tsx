import React, { useEffect } from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { paths } from './constants/paths';

const App: React.FC<React.PropsWithChildren> = ({ children }) => {
  const user = useSelector((state: any)=> state.user); // TODO implement memoize of reselect if it is needed
  const navigate = useNavigate()

  useEffect(()=>{
    if(user){
      navigate(paths.userAccount)
    }else{
      navigate(paths.login)

    }
  },[user, navigate])
  return (
    <div className="App">
      <header className="App-header">
        {children}
      </header>
    </div>
  );
}

export default App;
