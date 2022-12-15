import { useSelector } from 'react-redux';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';


function App() {
  const state = useSelector(state => state)

  return (
    <section className="todoapp">
      <Header />
      {/* !-- This section should be hidden by default and shown when there are todos --> */}
      {
        state.todoList.length > 0 &&
        <>
          <Main />
          <Footer />
        </>
      }


      {/* !-- This footer should hidden by default and shown when there are todos --> */}
      {/* {state.todoList.length > 0 && } */}


    </section>
  )
}


export default App;
