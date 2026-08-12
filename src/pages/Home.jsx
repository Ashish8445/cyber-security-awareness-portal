import Navbar from "../components/common/Navbar";
import Hero from "../components/home/Hero";
import SecurityNotice from "../components/home/SecurityNotice";
import TrainingSection from "../components/home/TrainingSection";
import ProgramInformation from "../components/home/ProgramInformation";
import Footer from "../components/common/Footer";
import AssessmentOverview from "../components/home/AssessmentOverview";

function Home() {
  return (
    <>
  <Navbar />
  <Hero />
  <SecurityNotice />
  <AssessmentOverview />
  <TrainingSection />
  <ProgramInformation />
  <Footer />
</>
  );
}

export default Home;