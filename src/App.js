import './App.css';
import {   Routes , Route } from 'react-router-dom';
import routes from './pages/index'


function App() {

    return (
        <Routes >
            {
            routes.map((data,index) => (
                <Route onUpdate={() => window.scrollTo(0, 0)} exact={true} path={data.path} element={data.component} key={index} />
            ))
            }
      </Routes>
    );
}

export default App;
