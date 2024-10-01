import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Notification = () => {
  return (
    <div>
      <ToastContainer />
    </div>
  );
};

export const notify = (message) => {
  toast(message);
};

export default Notification;
