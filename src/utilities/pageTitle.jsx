import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const usePageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const routeName = location.pathname; // Get the current route path
    let title = "Toy-Shop"; // Default title

    // Update the title based on the current route
    if (routeName === "/") {
      title = "Toy-Shop | Home";
    } else if (routeName === "/allToys") {
      title = "Toy-Shop | All-Toys";
    } else if (routeName === "/myToys") {
      title = "Toy-Shop | My-Toys";
    }
     else if (routeName === "/addAToy") {
      title = "Toy-Shop | Add-A-Toy";
    }
     else if (routeName === "/blog") {
      title = "Toy-Shop | Blog";
    }
     else if (routeName === "/login") {
       title = "Toy-Shop | Login";
     } else if (routeName === "/register") {
       title = "Toy-Shop | Register";
     }

    document.title = title; // Update the document title
  }, [location.pathname]);
};
export default usePageTitle;