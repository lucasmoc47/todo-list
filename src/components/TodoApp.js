import React from 'react';
import { TodosProvider } from '../contexts/TodosContext'

import TodoList from './TodoList'
import TodoForm from './TodoForm'

// import { Container } from './styles';

export default function TodoApp() {
	return (
		<TodosProvider>
			<TodoForm />
			<TodoList />
		</TodosProvider>
	);
}
