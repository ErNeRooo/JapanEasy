import { addDoc, collection, where, query, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

const WordsDataSeeder = async (startIndex: number = 1) => {
  await fetch("../../../public/dictionaryData.json")
    .then((res) => res.json())
    .then((data) => {
      for (let i = startIndex; i <= data.length; i++) {
        const queryy = query(
          collection(db, "words"),
          where("Rank", "==", data[i].Rank)
        );

        getDocs(queryy).then((snapshot) => {
          if (snapshot.empty) {
            addDoc(collection(db, "words"), data[i]).then(() => {
              console.log(
                "Successfully added: " +
                  data[i].Rank +
                  ". " +
                  data[i].Lemma +
                  " " +
                  data[i].Romaji
              );
            });
          } else {
            console.log(
              "There are already " +
                data[i].Rank +
                ". " +
                data[i].Lemma +
                " " +
                data[i].Romaji
            );
            snapshot.forEach((doc) => {
              console.log(
                "id: ",
                doc.id,
                "count: ",
                snapshot.size,
                "=>",
                doc.data()
              );
            });
          }
        });
      }
    });
};

export default WordsDataSeeder;
