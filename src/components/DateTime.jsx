import React from "react";

const DateTime = () => {
  const formatDateTime = () => {
    const now = new Date();

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const day = days[now.getDay()];
    const month = months[now.getMonth()];
    const date = now.getDate();

    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");

    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    return `${day} ${month} ${date} ${hours}:${minutes}${ampm}`;
  };

  return <div>{formatDateTime()}</div>;
};

export default DateTime;
