export const Card = ({result}) => {
    return (
        <div className="card-Style">
        <div key={result.text}> 
        <p> 
       {result.text}  
       </p>  
         </div>
        </div>
    )
}