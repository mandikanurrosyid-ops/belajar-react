import TombolHitung from './TombolHitung';
import FormNama from './FormNama';

function App() {
  return (
    <div>
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
      <h1>Aplikasi Belajar React</h1>
      <p>Proyek latihan komponen dasar dan state</p>
      </header>

      <main>
        <section>
          <TombolHitung />
        </section>

        <section>
          <FormNama />
        </section>
      </main>
    </div>
  );
}

export default App;