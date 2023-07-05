import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Private= ({ children }) => {
  let authToken=useSelector((e)=>{
    return e.subscription[0].subscription
  });
  if (!authToken) {
    return <Navigate to="/payment" />;
  }
    return children;
};

export default Private;