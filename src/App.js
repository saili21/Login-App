
import './App.css';
import Footer from './Footer';
import Login from './Login/Login';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CreateAccountForm from './CreateAccount';

function App() {
  return (
    <div className="App" style={{ minHeight: "100 vh" }}>
      <div class="page-wrap" style={{  marginBottom:60 }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="create-account" element={<CreateAccountForm />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
