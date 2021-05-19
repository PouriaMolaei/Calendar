import './App.css';
import Main from './containers/Main';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import TasksReducer from './store/reducers/tasks'; 
import ReduxThunk from 'redux-thunk';

const store = createStore(TasksReducer, applyMiddleware(ReduxThunk));

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
