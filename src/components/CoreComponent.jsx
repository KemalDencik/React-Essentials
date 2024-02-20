
export default function CoreComponent({image, title, description}) {
    return (
      <li>
        <img alt={title} src={image} />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    );
  }