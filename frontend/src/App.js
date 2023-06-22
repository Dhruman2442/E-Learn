import "./App.css";
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";
import { Route, Routes } from "react-router-dom";
import ForgotPassword from "./components/ForgotPassword";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route exact path="/" component={Home} /> */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="*" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
