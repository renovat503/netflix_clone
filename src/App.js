
import './App.css';
import Navbar from './components/Navbar';
import MovieSection from './components/MovieSection';
import Category from './components/Category';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import requests from './Requests';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MovieSection />
      <Category title = "Netflix Originals"fetchUrl = {requests.fetchNetflixOriginals}/>
      <Category title = "Trending Now"fetchUrl = {requests.fetchTrending}/>
      <Category title = "Top Rated"fetchUrl = {requests.fetchTopRated}/>
      <Category title = "Action Movies"fetchUrl = {requests.fetchActionMovies}/>
      <Category title = "Comedie Movies"fetchUrl = {requests.fetchComedieMovies}/>
      <Category title = "Horror Movies"fetchUrl = {requests.fetchHorrorMovies}/>
      <Category title = "Romance Movies"fetchUrl = {requests.fetchRomanceMovies}/>
      <Category title = "Documentaries"fetchUrl = {requests.fetchDocumentaries}/>
      <CallToAction />
      <Footer/>
    </div>
  );
}

export default App;
