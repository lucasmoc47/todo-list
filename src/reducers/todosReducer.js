import { v4 as uuidv4 } from 'uuid'
import { ADD_TODO } from '../constants/actions'


const reducer = (state, action) => {
	const newTodo = { id: uuidv4(), task: action.task, completed: false }

	switch(action.type) {
		case ADD_TODO:
			return [...state, newTodo]
		default:
			return state
	}
}

export default reducer