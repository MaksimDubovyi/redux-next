import Link from "next/link";

const ItemList = ({ id ,title}) => {

  return (
    <li className="list-group-item">
     <Link   className="btn btn-primary" href={`/posts/${id}`}>{title}</Link>
     
    </li>
  );
};

export { ItemList };

