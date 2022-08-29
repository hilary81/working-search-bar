/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-comment-textnodes */
function Card(props){
  return (
     <div>
        <h3>{props.name}</h3>
        // eslint-disable-next-line jsx-a11y/anchor-has-content
        <a href={props.url}></a>
        <p>{props.snippet}</p>

     </div>


  )

}
export default Card;