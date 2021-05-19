import './App.css';
import Main from './containers/Main';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import TasksReducer from './store/reducers/tasks'; 

const store = createStore(TasksReducer);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Main />
      </Provider>
    </div>
  );
}

export default App;
