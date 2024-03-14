import { useRoutes } from 'react-router-dom';
import PublicRouter from './routes';
import { ToastContainer } from 'react-toastify';
function App() {
    const publicRouter = useRoutes(PublicRouter);
    return (
        <>
            {publicRouter}
            <ToastContainer />
        </>
    );
}

export default App;
