import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import TodoList from './container/Todos/TodoList';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="todo--list container">
      <Header />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
