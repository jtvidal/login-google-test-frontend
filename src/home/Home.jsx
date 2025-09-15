import { useContext } from "react";
import { AuthContext } from "../../services/auth.context.js";

const Home = () => {
  const { token } = useContext(AuthContext);

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <h2>Welcome Home</h2>
      <p>{token}</p>
    </div>
  );
};

export default Home;
