import { useContext } from "react";
import { AuthContext } from "../../services/auth.context.js";

const Home = () => {
  const { token } = useContext(AuthContext);

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <h2>Welcome Home {token}</h2>
    </div>
  );
};

export default Home;
