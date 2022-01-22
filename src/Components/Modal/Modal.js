// import React from 'react';

// const Modal = ({ results, data }) => {
 
//   return (

//     <ul>
//     <h1>all answer</h1>
//       {results.map((result, i) => (
//         <li key={i} className="mb-6">

//           <p><strong>{result.q}</strong></p>

//           <p className={result.a === data[i].answer ? 'has-background-success has-text-white p-2' : 'has-background-danger has-text-white p-2'}>Your answer: {result.a}</p>

//           {result.a !== data[i].answer && <p className="has-background-link has-text-white p-2">Correct answer: {data[i].answer}</p>}
//         </li>
//       ))}
//     </ul>

//   );
// }

// export default Modal;