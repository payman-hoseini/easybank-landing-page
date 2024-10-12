
import Header from './components/header';
import Hero from './components/hero';
import ArticleOne from './components/articleOne';
import LatestArticles from './components/latestArticles';
import Footer from './components/footer';

export default function Home() {
  return (
    <>
      <main className="max-w-[1440px] mx-auto">
        <Header />
        <Hero />
        <ArticleOne />
        <LatestArticles />
        <Footer />
      </main>
    </>
  );
}
