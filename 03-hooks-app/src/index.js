import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import HooksApp from './HooksApp';
// import Counter from './components/use-state/Counter';
// import CounterCustom from './components/CounterCustom';
// import SimpleForm from './components/use-effect/SimpleForm';
// import CustomForm from './components/use-effect/CustomForm';
// import MultipleCustomHooks from './components/use-fetch/MultipleCustomHooks';
// import { FocusScreen } from './components/use-ref/FocusScreen';
// import UseRefExample from './components/use-ref/UseRefExample';
// import Layout from './components/useLayoutEffect/Layout';
// import './components/use-reducer/intro-reducer';
// import Todos from './components/use-reducer/Todos';
import MainApp from './components/use-context/MainApp';


ReactDOM.render(
    <MainApp />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
