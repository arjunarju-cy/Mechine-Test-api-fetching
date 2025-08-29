import { Routes, Route, BrowserRouter} from 'react-router-dom'
import Login from './Components/Login'
import ListView from './Components/ListView'
import DetailsView from './Components/DetailsView'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/list" element={<ListView />} />
      <Route path="/detail/:id" element={<DetailsView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
