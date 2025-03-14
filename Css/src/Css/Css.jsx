import { Routes, Route } from "react-router-dom";
import TransEffect from "./Animation/TransEffect";
import Keyframes from "./Animation/Keyframes";
import Loading from "./Animation/Loading";

const Css = () => {
  return (
    <Routes>
      <Route path="/trans-effect" element={<TransEffect />} />
      <Route path="/Keyframes" element={<Keyframes />} />
      <Route path="/loading" element={<Loading />} />
    </Routes>
  );
};

export default Css;
