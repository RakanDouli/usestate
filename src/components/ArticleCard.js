export default function ArticleCard(props) {
  return (
    <div className="Article">
         <hr/>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    
     
    </div>
  );
}
