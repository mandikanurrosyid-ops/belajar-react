import {useState} from 'react';

function FormNama(){
    const [nama, setNama] = useState('');

    function tanganiInput(event) {
        setNama(event.target.value);
    }

    return (
        <div>
            <h3>Langkah 1: Belajar Input Text</h3>

            <input
             type="text"
             placeholder="Ketik namamu di sini..."
             value={nama}
             onChange={tanganiInput}
             />


             <h4>
                {nama ? `Halo, ${nama}! Selamat belajar React.` : 'Silahkan ketik namamu di atas.'}
             </h4>
        </div>
    );
}

export default FormNama;