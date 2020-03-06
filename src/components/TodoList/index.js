import React, { useContext } from 'react';
import { TodosContext } from '../../contexts/TodosContext'

// import { Container } from './styles';

export default function TodoList() {
	const todos = useContext(TodosContext)

	return (
		<ul>
			{todos.map(todo => (
				<li key={todo.id}>{todo.task}</li>
			))}
		</ul>
	);
}
