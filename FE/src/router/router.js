import Login from "container/auth/Login";
import ClientHome from "container/Client/ClientHome/ClientHome";
import FeatureBrandDetail from "container/Client/FeatureBrandDetail/FeatureBrandDetail";
import SignUp from "container/auth/SingUp";
import Cart from "container/Client/Cart/Cart";




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
        index :true,
        path : "/login",
        element : <Login />
    },
    {
        index :true,
        path : "/signup",
        element : <SignUp />
    },
    {
        index :true,
        path : "/cart",
        element : <Cart />
    },
    
    

]