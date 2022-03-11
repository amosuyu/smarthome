import Login from "container/auth/Login";
import ClientHome from "container/Client/ClientHome/ClientHome";
import FeatureBrandDetail from "container/Client/FeatureBrandDetail/FeatureBrandDetail";
import SignUp from "container/auth/SingUp";
import Cart from "container/Client/Cart/Cart";
import Products from 'container/Client/Products/Products'

export const clientRoutes = [
    {
        index: true,
        element: <ClientHome />
    },
    {
        path: "/feature",
        element: <FeatureBrandDetail />
    },
    {
        path : "/login",
        element : <Login />
    },
    {
        path : "/signup",
        element : <SignUp />
    },
    {
        path : "/cart",
        element : <Cart />
    },
    {
        path: '/products',
        element: <Products />
    }
    

]