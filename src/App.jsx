import './App.css';
import Banner from './components/Banner';
import Button from './components/Button';
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
          linkTitle="3DMI.CO 3d Prints"
          text="Warhammer 40k Proxy Models"
          link="https://www.ebay.com/itm/225290472541"
          image='https://i.ebayimg.com/images/g/gd4AAOSwcnhjzJ~b/s-l500.png'
          
        />

        <TextHeading
          text="Warhammer 40k Proxy Chaos Marines"
          link="https://www.ebay.com/itm/225290472541"
        />

        <ContentContainer
          image="https://i.ebayimg.com/images/g/-LoAAOSwcYpjvfdD/s-l1600.png"
          title=" X16 Midnight Sovereign Chaos Marine Warhammer 40k Proxies"
          text="From Surrogate Miniatures July Patreon Release. For your favorite Grim Dark tabletop strategy game.
      X16 Warhammer 40K Proxy Surrogate Miniatures Midnight Sovereigns Chaos Marines

These are 3d printed under license from Surrogate Miniatures.  Similar to Chaos Space Marines from Games Workshop
Models are washed and cured and require assembly.  Sixteen Chaos marine proxy models from Surrogate Miniatures.  "

          height="350px"
          width=""
          link="https://www.ebay.com/itm/225352439758"
          
        />

        <StoreOne />
        
        <Footer />

      </div>
    </main>
  )
}
