
// import React, { useState } from 'react';

// const FormExample = () => {
//     // State to store the input value
//     const [inputValue1, setInputValue1] = useState('');
//     const [inputValue2, setInputValue2] = useState('');
//     const [inputValue3, setInputValue3] = useState('');

//     // Event handler to update the input value in the state
//     const handleInputChange1 = (e) => {
//         setInputValue1(e.target.value);
//     };
//     const handleInputChange2 = (e) => {
//         setInputValue2(e.target.value);
//     };
//     const handleInputChange3 = (e) => {
//         setInputValue3(e.target.value);
//     }
//     return (
//         <div>
//             <form>
//                 <label >Name:</label>
//                 <input
//                     type="text"
//                     id="name"
//                     value={inputValue1}
//                     onChange={handleInputChange1}
//                 />
//                 <br />
//                 <label htmlFor="inputField">Surname:</label>
//                 <input
//                     type="text"
//                     id="surname"
//                     value={inputValue2}
//                     onChange={handleInputChange2}
//                 />
//                 <br />
//                 <label htmlFor="inputField">Email:</label>
//                 <input
//                     type="email"
//                     id="surname"
//                     value={inputValue3}
//                     onChange={handleInputChange3}
//                 />
//                 <input type='submit' value='submit' />
//             </form>

//             <p> Name: {inputValue1}</p>
//             <p> surname: {inputValue2}</p>
//             <p> email: {inputValue3}</p>
//         </div>
//     );
// };

// export default FormExample;



