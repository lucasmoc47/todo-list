import React from 'react';
import { TodosProvider } from '../contexts/TodosContext'

import TodoList from './TodoList'

// import { Container } from './styles';

export default function TodoApp() {
	return (
		<TodosProvider>
			<TodoList />
		</TodosProvider>
	);
}
