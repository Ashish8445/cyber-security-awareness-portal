import TrainingCard from "./TrainingCard";
import SectionTitle from "../common/SectionTitle";
import { awarenessTopics } from "../../data/awarenessTopics";

function TrainingSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          title="Cyber Security Awareness Topics"
          subtitle="Explore the key cybersecurity awareness topics covered during the awareness session before starting your assessment."
        />

        {/* Topic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awarenessTopics.map((topic) => (
            <TrainingCard
              key={topic.id}
              icon={topic.icon}
              title={topic.title}
              description={topic.description}
              questions={topic.questions}
              duration={topic.duration}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default TrainingSection;