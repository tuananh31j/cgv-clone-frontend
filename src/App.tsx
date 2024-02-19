import { useRoutes } from 'react-router-dom';
import PublicRouter from './routes';
function App() {
    const publicRoutert = useRoutes(PublicRouter);
    return <>{publicRoutert}</>;
}

export default App;
