import './App.css';
import Banner from './components/Banner/Banner';
import Row from './components/Row/Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      {/* Navbar */}

      <Banner />

      <Row title = "Expoflix Origianl" fetchUrl={requests.fetchExpoflixOriginals} isLargeRow/>
      <Row title = "Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title = "Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title = "Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title = "Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title = "Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title = "Romantic Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title = "Documentaries" fetchUrl={requests.fetchDocumantaries}/>
      
    </div>
  );
}

export default App;
