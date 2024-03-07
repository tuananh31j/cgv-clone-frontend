import { useRoutes } from 'react-router-dom';
import PublicRouter from './routes';
function App() {
    const publicRouter = useRoutes(PublicRouter);
    return <>{publicRouter}</>;
}

export default App;
