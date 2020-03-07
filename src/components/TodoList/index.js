import React, { useContext } from 'react';
import { TodosContext } from '../../contexts/TodosContext'

import Todo from '../Todo'

// import { Container } from './styles';

export default function TodoList() {
	const todos = useContext(TodosContext)

	return (
		<ul style={{ paddingLeft: 10, width: '95%' }}>
			{todos.map(todo => (
				<Todo key={todo.id} {...todo} />
			))}
		</ul>
	);
}
