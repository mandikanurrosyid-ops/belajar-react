function KartuTugas({teksTugas, onHapus})  {
    return (
        <div>
            <span>{teksTugas}</span>

            <button  
            onClick={onHapus}
            style={{
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                padding: '5px 10px',
                borderRadius: '4px',
                cursor:'pointer'
            }}>
                Hapus
            </button>
        </div>
    );
}
export default KartuTugas;