import './App.css';
import routes from "./routes"
import { useRoutes } from 'react-router-dom';
import Header from './component/Hearder';
import Sidebar from './component/SideBar';
function App() {
  const router = useRoutes(routes)
  return (
    <>
    <Header />
    <div className="container px-0">
      <main className="main">
        <div className="row justify-content-between mx-0">
          <Sidebar />

          {router}
        </div>
      </main>
    </div>
  </>
  );
}

export default App;
