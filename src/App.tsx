import './App.css'
import OurCard from './components/OurCard'

import { v4 as uuidv4 } from 'uuid';
import OurHeader from './components/OurHeader'
import OurIntro from './components/OurIntro'
import OurFirstCard from './components/OurFirstCard'
import OurBelowSection from './components/OurBelowSection'
import OurFooter from './components/OurFooter';
import OurLastCard from './components/OurLastCard';


function App() {
  uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

  const headerStrings: string[] = ['Home', 'About', 'Contact', 'Landing', 'Buy Now'];
  
  const firstCardSrc: string = 
    'src/assets/images/undraw_mobile_login_ikmv.png';
  const firstCardTitles: string[] = [
    'Light, Fast & Powerful', 'Title Goes Here', 'Title Goes Here'];
  const firstCardTexts: string[] = [
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ' +
    'Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus ' +
    'mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa ' +
    'quis enim.',
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
  ];

  const cardSrcs: string[] = [
    'src/assets/images/undraw_happy_news_hxmt (1).png',
    'src/assets/images/undraw_social_influencer_sgsv.png',
  ];
  const cardTitles: string[] = [
    'Light, Fast & Powerful',
    'Light, Fast & Powerful',
  ];
  const cardTexts: string[] = [
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
  ];

  const lastCardTexts: string[] = [
    'Light, Fast & Powerful',
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
  ];
  
  const belowText: string = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus';

  return (
    <body>
      <OurHeader strings={headerStrings}/>

      <main className='padding-page'>
        <section>
          <OurIntro/>        
        </section>

        <section>
          <OurFirstCard imgsrc={firstCardSrc} titles={firstCardTitles} texts={firstCardTexts}/>
          <OurCard srcImg={cardSrcs[0]} title={cardTitles[0]} text={cardTexts[0]}/>
          <OurCard srcImg={cardSrcs[1]} title={cardTitles[1]} text={cardTexts[1]}/>
          <OurLastCard title={lastCardTexts[0]} text={lastCardTexts[1]}/>
        </section>

        <section>
          <OurBelowSection text={belowText}/>
        </section>
      </main>

      <footer>
        <OurFooter/>
      </footer>      
    </body>
  )
}

export default App
