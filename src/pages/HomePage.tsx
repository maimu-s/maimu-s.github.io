import HeroSection from '../components/HeroSection';
import NewsSection from '../components/NewsSection';
import TalentSection from '../components/TalentSection';
import ScheduleSection from '../components/ScheduleSection';
import ContactSection from '../components/ContactSection';

function App() {
    return (
        <div className="app">
            <main>
                <HeroSection />
                <NewsSection />
                <TalentSection />
                <ScheduleSection />
                <ContactSection />
            </main>
        </div>
    );
}

export default App;
