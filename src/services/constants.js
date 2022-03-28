import axios from "axios";

export default async function fetchData(input) {
    //axios call
   const CLIENT_URL= `https://api.openweathermap.org/data/2.5/weather?zip=`
    const API_KEY=`,us&units=imperial&appid=06e90c6e7db3977b68617818160ff9aa` 
    const ZIP=`07621`
    
    try{
        
        if(!input){
          let response  = await axios.get(`${CLIENT_URL}${ZIP}${API_KEY}`)
        let result = response.data
        // console.log(result)
        return result   
        }
        else{
         let response  = await axios.get(`${CLIENT_URL}${input}${API_KEY}`) 
           let result = response.data
           return result   
        }
        
       
        

    }
    catch (error) {
        console.log(error)
    }  
   

}




// import axios from "axios";

//  const fetchData = async () => {
//     //axios call
//    const CLIENT_URL= `https://api.openweathermap.org/data/2.5/weather?zip=`
//     const API_KEY=`,us&units=imperial&appid=1c17a424a47b25a487323cfeff2a4d44` 
//     let response;
//     try{
        
//         response = await axios.get(`${CLIENT_URL}07621${API_KEY}`)
        
//         console.log(response.data)

//     }
//     catch (error) {
//         console.log(error)
//     }  

//     return response?.data ? response?.data : null
   

// }

// export default fetchData