import TaskList from './components/TaskList';
import ContextProvider from './context/ContextProvider';
import './App.css';

function App() {
  return (
      <ContextProvider>
        <TaskList></TaskList>
      </ContextProvider>
  );
}

export default App;
