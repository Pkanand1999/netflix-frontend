import { Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";

const Private= ({ children }) => {
  let authToken=localStorage.getItem('subscribe');
  
  if (!authToken) {
    return <Navigate to="/payment" />;
  }
    return children
};

export default Private;