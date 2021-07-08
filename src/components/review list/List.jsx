import React, { useEffect, useState } from "react";
import useFirestore from "../../hooks/useFirestore";
import Card from './Card'
import './list.css'

function List() {
  const [reviews, setreviews] = useState([]);
  const  allreviews  = useFirestore("review");

  useEffect(() => {
    setreviews(allreviews);
  }, [allreviews]);

  return (
    <div className="list">
      {reviews.map((docs) => {
        return (
          <Card  item={docs} key={docs.id} />
        );    
      })}
    </div>
  );
}

export default List;
