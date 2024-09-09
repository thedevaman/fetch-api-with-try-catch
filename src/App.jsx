import { useState,useEffect } from "react"
const App = ()=>{

 const [photos,setPhotos] = useState([])
 useEffect(()=>test,[])

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
    try {
     const response = await fetch('https://fakestoreapi.com/products')
     const data = await response.json()
    //  console.log(data)
      setPhotos(data)
    }
    catch(error){
      console.log(error)
    }


  }
  return(
    <div>
      <h1>Http Request</h1>
      <button onClick={test}>Click Me</button>
     <div style={
      {marginTop:100,
      width:'100%',
      display:'flex',
      gap:32,
      flexWrap:'wrap'
      }}>
      {
        photos.map((item,index)=>(
          <div key={index} style={{width:"calc(25% - 32px)",
            padding:16,
            boxSizing:'border-box',
            boxShadow:'0 0 8px #ddd',
            borderRadius:8,
            textAlign:'center'
          }}>
               <img src={item.image} style={{height:180}} />
            <h4>{item.title}</h4>
            <p>{item.description.slice(0,80)}</p>
            <p style={{textTransform:'capitalize'}}>{item.category}</p>
         
          </div>
        ))
      }
     </div>
    </div>
  )
}
export default App