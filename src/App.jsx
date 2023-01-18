import './App.css';
import Banner from './components/Banner';
import ContentContainer from './components/ContentContainer';
import StoreOne from './components/StoreOne';
import TextHeading from './components/TextHeading';

import ThreeColumnGrid from './components/ThreeColumnGrid';
import Product from './components/Product';
import Footer from './components/Footer';

export default function App() {
  return (
    <main>
      <div id="SiteContent">
        {/*linkTitle,text,link,image*/}
        <Banner 
          linkTitle="SITE TITLE"
          text="THIS IS THE SITE DESCRIPTION"
          link="#"
          image='https://cdn2.myminifactory.com/assets/object-assets/62ef8dcc7bd7a/images/720X720-sovereign001.jpg'
          
        />

        <TextHeading
          text="FEATURED PRINT"
          link="#"
        />

        <ContentContainer
          image="https://i.ebayimg.com/images/g/-LoAAOSwcYpjvfdD/s-l1600.png"
          title="CONTENT ONE"
          text="Content ONE DESCRIPTION"
          
        />

        <StoreOne />
        
        <Footer />

      </div>
    </main>
  )
}
