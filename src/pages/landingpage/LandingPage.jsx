import LogOrSign from "../../components/logOrSign/LogOrSign";

const LandingPage = ({setLoggedUser, setIsLoggedIn}) => {
  return (
    <div>
      <LogOrSign setLoggedUser={setLoggedUser} setIsLoggedIn={setIsLoggedIn} /> 
    </div>
  )
};

export default LandingPage;