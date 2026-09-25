import  {useState} from 'react';
import KartuTugas from './KartuTugas';

function TodoList() {
    const [daftarTugas, setDaftarTugas] = useState([
        'Belajar Component React',
        'Belajar state useState',
        'Belajar  props React'
    ]);
    const[inputBaru, setInputbaru] = useState('');
function tambahTugas(e){
    e.preventDefault();
    if (inputBaru.trim() == '') return;
    setDaftarTugas([...daftarTugas, inputBaru ]);
    setInputBaru('');
}

function hapusTugas(indeksHapus){
    const daftarBaru = daftarTugas.filter((_,  indeks) =>  indeks  !== indeksHapus);
    setDaftarTugas(daftarBaru);
}

return (
    <div>
        <h2>Langkah 3 : Daftar Tugas (To-Do List)</h2>

        <form onSubmit={tambahTugas}>
            <input type="text"
            placeholder='Tambah tugas baru..'
            value={inputBaru}
            onChange={(e) =>  setInputbaru(e.target.value)} />
            <button type='submit'></button>
        </form>

        <div>
            {daftarTugas.map((tugas,  indeks) => (
            <KartuTugas
            key={indeks}
            teksTugas={tugas}
            onHapus={() => hapusTugas(indeks)}
             />
             ))} 
        </div>
    </div>
);
}

export default  TodoList;