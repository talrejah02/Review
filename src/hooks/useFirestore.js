import { useEffect, useState } from "react";
import { firestore } from "../firebase/Config";

const useFirestore = (collection) => {
  const [allreviews, setAllreviews] = useState([]);

  useEffect(() => {
    let unsub = firestore
      .collection(collection)
      .orderBy('createdAt','desc')
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          documents.push({
            ...doc.data(),
            id: doc.id,
          });
        });
        setAllreviews(documents);
      });
    return () => unsub();
  }, [collection]);
  
 
  return allreviews;
};

export default useFirestore;