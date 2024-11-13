const data = [
    {
    id : 1,
    img:"iron-man.jpeg",
    rating : 3,
    desc :  'The description'
},
{
    id : 2,
    img:"iron-man.jpeg",
    rating : 3,
    desc :  'The description'
},
{
    id : 3,
    img:"iron-man.jpeg",
    rating : 3,
    desc :  'The description'
},
{
    id : 4,
    img:"iron-man.jpeg",
    rating : 3,
    desc :  'The description'
},
{
    id : 5,
    img:"iron-man.jpeg",
    rating : 3,
    desc :  'The description'
},
{
    id : 6,
    img:"iron-man.jpeg",
    rating : 3,
    desc :  'The description'
},
{
    id : 7,
    img:"iron-man.jpeg",
    rating : 3,
    desc :  'The description'
},
];

const MovieCard = () => {

    return(
        <div style={{width:'100%', height:350, display:'flex', flexWrap:'wrap', 
            justifyContent:'space-evenly', 
          }}>
            
            {data.map((movie) => {
                return(
           <>
           <div style={{width:250, borderWidth:2, borderColor:'blue',
             backgroundColor:'grey', color:"white",
              borderRadius:10, marginBottom:10,}}>
           <div key={movie.id}>
            <img src={movie.img} alt="iron-man.jpeg"
            style={{width:250, height:300}}
            />
           </div>
           <div>
           <h3>Rating : {movie.rating}</h3>
           <h3>{movie.desc}</h3>
           </div>
           </div>
            </>
                )
            })}
        </div>
    )
};

export default MovieCard;