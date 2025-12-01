import logo from './logo.svg';
import './App.css';
import profileCard from '../src/profileCard.js'

function App() {
  return (
    <div>
      {profileCard.map((profileCard, index) => (
        <div key={index} >
          <div id="main-container">
            <div id="img-container">
              <img src={profileCard.image} alt={profileCard.name} />
              <h2>{profileCard.name}</h2>
              <h1>{profileCard.jobTitle}</h1>
            </div>

            <p>{profileCard.bio}</p>
          </div>

        </div>
      ))}
    </div>

  );
}

export default App;
