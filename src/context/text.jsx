// import { collection, getDocs, addDoc } from 'firebase/firestore';
// import { db } from '../firebase';
// import React , {useEffect,useState} from 'react'
// const Test = () => {
//   const [data, setData] = useState([]);
//     const addData = async () => {
//     try {
//         const docRef = await addDoc(collection(db, "your-collection-name"), {
//         name: "Sample Name",
//         age: 25,
//         });
//         console.log("Document written with ID: ", docRef.id);
//     } catch (error) {
//         console.error("Error adding document: ", error);
//     }
//     };
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, "your-collection-name"));
//         const items = querySnapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         setData(items);
//       } catch (error) {
//         console.error("Error fetching data: ", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Firestore Data</h1>
//       <ul>
//         {data.map((item) => (
//           <li key={item.id}>{JSON.stringify(item)}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Test;
