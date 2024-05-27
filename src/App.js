import './App.css';
import routes from "./routes"
import { useRoutes } from 'react-router-dom';
import Header from './component/Hearder';
function App() {
  const router = useRoutes(routes)
  return (
    <div className="App">
      <Header />
      {router}
    </div>
  );
}

export default App;
