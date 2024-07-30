import { Outlet, useNavigation } from "react-router-dom";
import "./dashboardLayout.css";
import { useAuth } from "@clerk/clerk-react";
import { useEffect } from "react";

const DashboardLayout = () => {


  const {userId, isLoaded} = useAuth()

  const navigate = useNavigation()

  useEffect(() => {
    if (isLoaded && !userId) {
      navigate("/sign-in")
    }
  },[isLoaded, userId, navigate])

  if (!isLoaded) return "Loading..."
  return (
    <div className="dashboardLayout">
      <div className="menu">Menu</div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;