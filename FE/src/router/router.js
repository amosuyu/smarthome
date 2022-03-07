import Login from "container/auth/Login";
import ClientHome from "container/Client/ClientHome/ClientHome";
import FeatureBrandDetail from "container/Client/FeatureBrandDetail/FeatureBrandDetail";


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
    }
]