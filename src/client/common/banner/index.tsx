import { Toaster } from "react-hot-toast";

function Banner() {
  return (
    <div>
      <Toaster position="top-right" reverseOrder={true} />
    </div>
  );
}

export { Banner };
