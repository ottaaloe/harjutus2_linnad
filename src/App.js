import './App.css';
import Linn from './Linn';
import piltMiami from './pix/miami.jpg';
import piltHaapsalu from './pix/haapsalu.png';
import piltParnu from './pix/parnu.jpg';

const LINNAD = [
  {
    nimi: 'Haapsalu',
    kirjeldus: "Haapsalu is a seaside resort town located on the west coast of Estonia. It is the administrative centre of Lääne County, and on 1 January 2020 it had a population of 9,375.",
    pilt: piltHaapsalu
  },
  {
    nimi: 'Pärnu',
    kirjeldus: "Pärnu is a resort city in southwestern Estonia, overlooking Pärnu Bay. The city is bisected by the Pärnu River, which has paths on both banks, both of which end in stone jetties in the bay. ",
    pilt: piltParnu
  },
  {
    nimi: 'Miami',
    kirjeldus: "Miami, officially the City of Miami, is a coastal metropolis and the seat of Miami-Dade County in South Florida. With a population of 442,241 as of the 2020 census, it is the second-most populous city in the state of Florida after Jacksonville.",
    pilt: piltMiami
  },
];

function App() {
  return(
    <div className="App">
      {LINNAD.map((linn) => (
          <Linn andmed={linn} />
        ))}
    </div>
  );
}

export default App;
