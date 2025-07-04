import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./Routes/Routes.jsx";
import { ToastContainer } from "react-toastify";
import AuthProvider from "./AuthContext/AuthProvider.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  delay: 1000,
  duration: 400,
  easing: "ease",
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>
  </StrictMode>
);
