import BlogPage from "container/Client/ClientBlogPage/BlogPage";
import ClientHome from "container/Client/ClientHome/ClientHome";
import Contact from "container/Client/Contact/Contact";
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
        index: true,
        path: "/contact",
        element: <Contact  />
    },
    {
        index: true,
        path: "/blog",
        element: <BlogPage />
    }
]