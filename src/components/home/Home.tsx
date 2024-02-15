import OurBelowSection from "./OurBelowSection";
import OurCard from "./OurCard";
import OurFirstCard from "./OurFirstCard";
import OurFooter from "./OurFooter";
import OurHeader from "./OurHeader";
import OurIntro from "./OurIntro";
import OurLastCard from "./OurLastCard";

function Home() {
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
        <div>
            <OurHeader strings={headerStrings} />

            <main className='padding-page'>
                <section>
                    <OurIntro />
                </section>

                <section>
                    <OurFirstCard imgsrc={firstCardSrc} titles={firstCardTitles} texts={firstCardTexts} />
                    <OurCard srcImg={cardSrcs[0]} title={cardTitles[0]} text={cardTexts[0]} />
                    <OurCard srcImg={cardSrcs[1]} title={cardTitles[1]} text={cardTexts[1]} />
                    <OurLastCard title={lastCardTexts[0]} text={lastCardTexts[1]} />
                </section>

                <section>
                    <OurBelowSection text={belowText} />
                </section>
            </main>

            <footer>
                <OurFooter />
            </footer>
        </div>
    );
}

export default Home;