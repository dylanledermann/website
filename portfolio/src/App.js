import './App.css';
import {Routes, Route} from 'react-router-dom';
import Layout from './components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </>
  )
}

export default App;
