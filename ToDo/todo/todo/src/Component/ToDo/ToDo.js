
// import './ToDo.css'


// function ToDo({input,setInput,todo,setTodo}){

//     const onInputChange = (event) => (
//         setInput(event.target.value)
//     )

//     const onFormSubmit = (event) =>{
//         event.preventDefault();
//     }

//     return (      

//         <form className='header' onSubmit={onFormSubmit}>
//             <input 
//                 type="text" 
//                 name="TODO" 
//                 placeholder='Enter ToDo' 
//                 value={input}
//                 required
//                 onChange={onInputChange}
//             />
//             <button className='button-Add' type='submit'>Add</button>

//         </form>

//     );
// }

// export default ToDo;