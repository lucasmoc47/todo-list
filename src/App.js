import React from 'react';
import './App.css';

import TodoApp from './components/TodoApp'

function App() {
	return (
		<div>
			<header className="header">
				<h1>
					todo<span>list</span>
				</h1>
				<h2>A simple todolist app built with React Hooks & Context</h2>
			</header>
			<TodoApp />
   		</div>
	);
}

export default App;
