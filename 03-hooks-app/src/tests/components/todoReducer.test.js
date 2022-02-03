import todoReducer from "../../components/use-reducer/todoReducer";
import todos from "../fixtures/todos";

describe('Testing todoReducer', () => {

    test('should return the default state', () => {
        const state = todoReducer(todos, { });
        expect(state).toEqual(todos);
    });
    
    test('should add a TODO', () => {
        const state = todoReducer(todos, {
            type: 'add',
            payload: {
                id: 2,
                desc: 'Testing once again',
                done: false
            }
        });
        expect(state.length).toBe(3);
        expect(state).toEqual([...todos, {
            id: 2,
            desc: 'Testing once again',
            done: false
        }]);
    });

    test('should remove a TODO', () => {
        let newTodos = [...todos];
        const state = todoReducer(todos, {
            type: 'delete',
            payload: 2
        });
        newTodos.pop();
        expect(state).toEqual(newTodos);
    });

    test('should toggle the first todo', () => {
        const state = todoReducer(todos, {
            type: 'toggle',
            payload: 1
        });
        expect(state[0].done).toBe(true);
    });
});