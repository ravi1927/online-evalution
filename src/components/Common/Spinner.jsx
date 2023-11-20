import { CircularProgress } from "@mui/material";
import Heart from "./Heart";

function Spinner() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Heart/>
    </div>
  );
}

export default Spinner;
