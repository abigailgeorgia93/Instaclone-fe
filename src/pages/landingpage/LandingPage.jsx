import LogOrSign from "../../components/logOrSign/LogOrSign";
import "./LandingPage.css"

const LandingPage = ({setLoggedUser, setIsLoggedIn}) => {
  return (
    <div className="wrapper">
      <LogOrSign setLoggedUser={setLoggedUser} setIsLoggedIn={setIsLoggedIn} /> 
    </div>
  )
};

export default LandingPage;