import React from 'react';

import SingIn from './pages/SignIn';
// import SingUp from './pages/SingUp';
import GlobalStyle from './styles/global';

import ToastContainer from './components/ToastContainer';
import { AuthProvider } from './hooks/auth';
import { ToastProvider } from './hooks/toast';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <ToastContainer>
        <SingIn />
      </ToastContainer>
    </AuthProvider>

    <ToastContainer />

    <GlobalStyle />
  </>
);

export default App;
