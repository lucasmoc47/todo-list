import React, { useContext } from 'react';
import { TodosContext } from '../../contexts/TodosContext'

import Todo from '../Todo'

// import { Container } from './styles';

export default function TodoList() {
	const todos = useContext(TodosContext)

	return (
		<ul>
			{todos.map(todo => (
				<Todo key={todo.id} {...todo} />
			))}
		</ul>
	);
}
