import { useSelector } from 'react-redux';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';


function App() {
  const todoList = useSelector(state => state)
  return (
    <section className="todoapp">
      <Header />
      {/* !-- This section should be hidden by default and shown when there are todos --> */}
      {!!todoList && <Main />}

      {/* !-- This footer should hidden by default and shown when there are todos --> */}
      <Footer />
    </section>
  )
}


export default App;
