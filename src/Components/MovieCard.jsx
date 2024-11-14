import { useEffect } from "react";
import { moviesData } from "../assets/Movies Json/movies";


// const data = [
//     {
//     id : 1,
//     img:"iron-man.jpeg",
//     rating : 3,
//     desc :  'The description'
// },
// {
//     id : 2,
//     img:"iron-man.jpeg",
//     rating : 3,
//     desc :  'The description'
// },
// {
//     id : 3,
//     img:"iron-man.jpeg",
//     rating : 3,
//     desc :  'The description'
// },
// {
//     id : 4,
//     img:"iron-man.jpeg",
//     rating : 3,
//     desc :  'The description'
// },
// {
//     id : 5,
//     img:"iron-man.jpeg",
//     rating : 3,
//     desc :  'The description'
// },
// {
//     id : 6,
//     img:"iron-man.jpeg",
//     rating : 3,
//     desc :  'The description'
// },
// {
//     id : 7,
//     img:"iron-man.jpeg",
//     rating : 3,
//     desc :  'The description'
// },
// ];

const MovieCard = () => {
    console.log(moviesData);

    // useEffect(() => {
    //  console.log('useEffect');
    // })

    return(
        <div style={{width:'100%', height:'auto', display:'flex', flexWrap:'wrap', 
            justifyContent:'space-evenly', backgroundColor:'#d9dbe8'
          }}>
            
            {moviesData.map((data) => {
                return(
           <>
           <div style={{width:350, borderWidth:2, borderColor:'blue',
             backgroundColor:'#f8f9f9', 
              borderRadius:10, marginBottom:10, padding:5, paddingRight:5, paddingLeft:5,}}>
           <div key={data}>
            <img src={data.Images[0]} alt="iron-man.jpeg"
            style={{width:350, height:300, objectFit:'cover'}}
            />
           </div>
           <div>
            <p>Title : {data.Title}</p>
           <p>Rating : {data.Rated}</p>
           <p>Released : {data.Year}</p>
           <button style={{
            backgroundColor: data.Rated === 'N/A'? '#fb2254' : '#fff'
            
           }}>Watch Now</button>
           </div>
           </div>
            </>
                )
            })}
        </div>
    )
};

export default MovieCard;