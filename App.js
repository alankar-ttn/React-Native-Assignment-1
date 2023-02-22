import React, {useState} from 'react';
import LandingScreen from './screens/LandingScreen';
import LoginScreen from './screens/LoginScreen';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return showLogin ? (
    <LoginScreen setShowLogin={setShowLogin} />
  ) : (
    <LandingScreen setShowLogin={setShowLogin} />
  );
};

export default App;
