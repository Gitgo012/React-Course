import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/coreConcepts.jsx';
import Examples from './components/examples.jsx';


function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts></CoreConcepts>
        <Examples></Examples>
      </main>
    </>
  );
}

export default App;
