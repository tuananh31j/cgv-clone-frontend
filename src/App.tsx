import { useRoutes } from 'react-router-dom';
import AppRoutes from './routes';
import { ToastContainer } from 'react-toastify';
function App() {
    const appRoutes = useRoutes(AppRoutes);
    return (
        <>
            {appRoutes}
            <ToastContainer />
        </>
    );
}

export default App;
