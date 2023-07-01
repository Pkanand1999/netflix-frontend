
import { onAuthStateChanged} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { firebaseAuth } from "../utils/firebase-config";
export default function Netflix() {
  const navigate=useNavigate();
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser) navigate("/login");
  });
  return (
    <div>Netflix</div>
  )
}
