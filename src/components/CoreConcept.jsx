




export default function CoreConcept ({image, Title, description}) {
  return (
    <li> 
    <img src={image} alt={Title} />
    <h3>{Title}</h3>
    <p>{description}</p>
    </li>
    
  );
}