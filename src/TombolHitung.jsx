import  {useState} from  "react";

function TombolHitung() {
  const [jumlah, setjumlah] = useState(0);

  function tambahAngka() {
    setjumlah(jumlah +1);
  }

  return (
    <div>
      <h2>Jumlah klik : {jumlah}</h2> 
      <button onClick={tambahAngka}>
        Klik Aku!
      </button>
    </div>
  );
}

export default TombolHitung;