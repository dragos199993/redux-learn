import expect from 'expect';


const counter = (state = 0, action) => {
    switch(action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

expect(counter(1, { type: 'INCREMENT' })).toBe(2);
expect(counter(1, { type: 'DECREMENT' })).toBe(0);
expect(counter(1, { type: 'SOMETHING_ELSE' })).toBe(1);
expect(counter(undefined, {})).toBe(0);
console.log('tests passed');