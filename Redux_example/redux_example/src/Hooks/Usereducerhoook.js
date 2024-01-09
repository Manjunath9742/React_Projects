import React,{useReducer} from 'react';
 const reducer=(state,action)=>{
      switch(action.type){
        case 'INCREMENT':
          return {count:state.count+1};
            case 'DECREMENT':
          return {count:state.count-1};
           default:
        return state;
      }
     

    };
function App() {
      const[state,dispatch]=useReducer(reducer,{count:0});

   
  return (
    <div >
    <h1>count:{state.count}</h1>
      <button onClick={()=>dispatch({type:'INCREMENT'})}>INCREMENT</button>
        <button onClick={()=>dispatch({type:'DECREMENT'})}>DECREMENT</button>
    </div>

  );
}

export default App;


// function reducer(state, action) {
//   // eslint-disable-next-line default-case
//   switch (action.type) {
//     case 'incremented_age': {
//       return {
//         name: state.name,
//         age: state.age + 1
//       };
//     }
//     case 'changed_name': {
//       return {
//         name: action.nextName,
//         age: state.age
//       };
//     }
   
//   }
//   throw Error('Unknown action: ' + action.type);
// }

// const initialState = { name: 'Taylor', age: 42 };

// export default function Form() {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   function handleButtonClick() {
//     dispatch({ type: 'incremented_age' });
//   }

//   function handleInputChange(e) {
//     dispatch({
//       type: 'changed_name',
//       nextName: e.target.value
//     }); 
//   }

//   return (
//     <>
//       <input
//         value={state.name}
//         onChange={handleInputChange}
//       />
//       <button onClick={handleButtonClick}>
//         Increment age
//       </button>
//       <p>Hello, {state.name}. You are {state.age}.</p>
//     </>
//   );
// }

