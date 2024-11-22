"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    redirect("/");
  }, []);
  return <div>404 Not Found</div>;
};
export default NotFound;
