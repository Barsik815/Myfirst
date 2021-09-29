import reportWebVitals from './reportWebVitals';
import { rerenderEntireTree } from './render';
import state from './Redux/state'

rerenderEntireTree(state);
reportWebVitals();