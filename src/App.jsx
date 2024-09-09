import { useState } from "react"
const App = ()=>{

 const [photos,setPhotos] = useState([])

  // const test =() =>{
    // fetch('https://jsonplaceholder.typicode.com/photos')
    
    // .then((response)=>response.json())

    // .then((photos)=>{
    //   console.log(photos)
    // })
    
    // .catch((error)=>{
    //   console.log(error)
    // })
// }
const test = async ()=>{
    try{
     const response = await fetch('https://jsonplaceholder.typicode.com/photos')
     const data =  response.json()
     console.log(data)
    //  setPhotos(data)
    }
    catch(error){
      console.log(error)
    }


  }
  return(
    <div>
      <h1>Http Request</h1>
      <button onClick={test}>Click Me</button>
     <div style={{marginTop:100,width:'80%'}}>
   
     </div>
    </div>
  )
}
export default App