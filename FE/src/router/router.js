import BlogListPage from "container/Client/ClientBlogPage/BlogListPage";
import ClientHome from "container/Client/ClientHome/ClientHome";
import Contact from "container/Client/Contact/Contact";
import FeatureBrandDetail from "container/Client/FeatureBrandDetail/FeatureBrandDetail";
import SignUp from "container/auth/SingUp";
import Cart from "container/Client/Cart/Cart";
import Login from "container/auth/Login";
import BlogPage from "container/Client/ClientBlogPage/BlogPage";



export const clientRoutes = [
    {
        index: true,
        element: <ClientHome />
    },
    {
        index: true,
        path: "/feature",
        element: <FeatureBrandDetail />
    },
    {
        index: true,
        path: "/contact",
        element: <Contact  />
    },
    {
        index: true,
        path: "/blog",
        element: <BlogListPage />
    },
    {   index: true,
        path: "/login",
        element: <Login />
    },
    {
        index: true,
        path: "/signup",
        element: <SignUp />
    },
    {
        index: true,
        path: "/cart",
        element: <Cart />
    },
    {
        index: true,
        path: "/blog-id",
        element: <BlogPage />
    }
    
    

]