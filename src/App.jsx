import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

/* ===== MAIN PAGES ===== */
import Home from './home/Home';
import Settings from './home/settingPage/Setting.jsx';
import About from './home/aboutPage/about.jsx'
import Account from './home/accountPage/account.jsx';
import DailyG from './home/DailyGoals/dailyGoals.jsx';
import Game from './Game/game.jsx';
import { CoinProvider } from "./context/coincontext";

/* ===== GAME PAGES ===== */
// Random subject selector
import Randomize from './Game/Randomize.jsx';

/* Subject categories */
import MathCTG from './Game/Categories/Math/MathCategory.jsx'
import SciCTG from './Game/Categories/Science/ScienceCategory.jsx'
import FiliCTG from './Game/Categories/Filipino/FilipinoCategory.jsx'
import ApCTG from './Game/Categories/AralingPanlipunan/AralingPanlipunan.jsx'
import EngCTG from './Game/Categories/English/EnglishCategory.jsx'
import MusicArtCTG from './Game/Categories/MusicAndArt/MusicAndArt.jsx'
import PeAndHealthCTG  from './Game/Categories/PhysicalEducationAndHealth/PeAndHealth.jsx';
import GmrcCTG from './Game/Categories/GMRC/GMRC.jsx'
import TleCTG from './Game/Categories/TLE/TLE.jsx';

/* Quiz pages
import ScinceQuiz from './Game/Categories/Science/ScinceQuiz.jsx';
import FilipinoQuiz from './Game/Categories/Filipino/FilipinoQuiz.jsx';
import AralingPanlipunanQuiz from './Game/Categories/AralingPanlipunan/AralingPanlipunanQuiz.jsx';
import EnglishQuiz from './Game/Categories/English/EnglishQuiz.jsx';
import MathQuiz from './Game/Categories/Math/MathQuiz.jsx'
import TLEQuiz from './Game/Categories/TLE/TLEQuiz.jsx';
*/

function App() {

  /* 
    Track the current route
    Used to support "modal routing" where the
    background page remains visible.
  */
  const location = useLocation(); 
  const state = location.state;

  return (
    <>
      {/* 
        MAIN ROUTES
        If a modal is open, render the backgroundLocation.
        Otherwise, render the current location normally.
      */}
      <Routes location={state?.backgroundLocation || location}>

        {/* CORE PAGES */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/setting" element={<Settings />} />
        <Route path="/account" element={<Account />} />
        <Route path="/dailyGoals" element={<DailyG />} />
        <Route path="/game" element={<Game />} />

        {/* RANDOM SUBJECT ROUTE */}
        <Route path="/randomize" element={<Randomize />} />

        {/* CATEGORY PAGES */}
        <Route path="/science" element={<SciCTG />} />
        <Route path="/math" element={<MathCTG />} />
        <Route path="/filipino" element={<FiliCTG />} />
        <Route path="/english" element={<EngCTG />} />
        <Route path="/aralingpanlipunan" element={<ApCTG />} />
        <Route path="/musicart" element={<MusicArtCTG />} />
        <Route path="/pehealth" element={<PeAndHealthCTG/>} />
        <Route path="/gmrc" element={<GmrcCTG/>} />
        <Route path="/tle" element={<TleCTG/>} />

        {/*Quiz Route */}
        <Route path="/game" element={<Game />} />

        {/* QUIZ PAGES
        <Route path="/science_quiz" element={<Game />} />
        <Route path="/filipino_quiz" element={<FilipinoQuiz/>} />
        <Route path="/aralingpanlipunan_quiz" element={<AralingPanlipunanQuiz/>} />
        <Route path="/english_quiz" element={<EnglishQuiz/>} />
        <Route path="/math_quiz" element={<MathQuiz/>} />
        <Route path="/tle_quiz" element={<TLEQuiz/>} />
       */ }
      </Routes>


      {/* 
        MODAL ROUTES
        Rendered only when there is a background location.
        This allows these pages to appear as modals 
        on top of the Home screen instead of full navigation.
      */}
      {state?.backgroundLocation && (
        <Routes>

          {/* REPEATED PAGES FOR MODAL DISPLAY */}
          <Route path="/home" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="/about" element={<About />} />
          <Route path="/setting" element={<Settings />} />
          <Route path="/dailyGoals" element={<DailyG />} />

          {/* RANDOM & CATEGORY ROUTES */}
          <Route path="/randomize" element={<Randomize />} />
          <Route path="/science" element={<SciCTG />} />
          <Route path="/math" element={<MathCTG />} />
          <Route path="/filipino" element={<FiliCTG />} />
          <Route path="/english" element={<EngCTG />} />
          <Route path="/aralingpanlipunan" element={<ApCTG />} />
          <Route path="/musicart" element={<MusicArtCTG />} />
          <Route path="/pehealth" element={<PeAndHealthCTG/>} />
          <Route path="/gmrc" element={<GmrcCTG/>} />
          <Route path="/tle" element={<TleCTG/>} />

          {/* QUIZ ROUTES
          <Route path="/science_quiz" element={<Game />} />
          <Route path="/filipino_quiz" element={<FilipinoQuiz/>} />
          <Route path="/aralingpanlipunan_quiz" element={<AralingPanlipunanQuiz/>} />
          <Route path="/english_quiz" element={<EnglishQuiz/>} />
          <Route path="/math_quiz" element={<MathQuiz/>} />
          <Route path="/tle_quiz" element={<TLEQuiz/>} />
           */}

        </Routes>
      )}
    </>
  );
}

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <CoinProvider>
        <App />
      </CoinProvider>
    </BrowserRouter>
  );
}
