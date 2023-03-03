/**
 * 
 *   APP ANALIZI
 * 
 *  HEADER DA BASLIK VAR
 *  TEKRARLAYAN CARDLARIMIZ VAR
 *  KARTLARIN ICERISINDE
 * 
 *    - SOLDA 
 *    BIR RESIM VAR
 *    - SAGDA
 *    LOCATION YAZIYOR VE ONUN SOLUNDA GOOGLE MAP LINKI(EX MOUNT FUJI) VAR
 *    BUNUN ALTINDA RESMIN OLDUGU YERIN BASLIGI VAR
 *    BUNUN DA ALTINDA DAHA KÜCÜK BIR BASLIK VAR HANGI TARIHLERDE GIDILDIGI YAZIYO
 *    EN ALT KISIMDA DA ICERIK VAR (P)
 * 
 *    APLIKASYONUN EN ALTINDA FOOTER BÖLÜMÜNDE CODDED BY VAR
 * 
 * 
 * 
 */



import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import data from "./data"
import Footer from './components/Footer';
import "@fontsource/inter";
import "@fontsource/roboto";

const cards = data.map(cardData =>{
  return(
    <Card data={cardData}/>
  )
})

function App() {
  return (
    <div className="App">
      <Header/>
      <section>
        {cards}
      </section>
      <Footer/>
    </div>
  );
}

export default App;
