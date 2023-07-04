import { Navigate } from "react-router-dom";

const Private= ({ children }) => {
  let authToken=localStorage.getItem('payment');
  if (!authToken) {
    return <Navigate to="/payment" />;
  }
    return children;
};

export default Private;