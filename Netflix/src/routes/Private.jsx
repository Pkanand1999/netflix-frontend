import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Private= ({ children }) => {
  let authToken=useSelector((e)=>{
    return e.subscription
  });
  console.log(authToken);
  if (!authToken) {
    return <Navigate to="/payment" />;
  }
    return children;
};

export default Private;