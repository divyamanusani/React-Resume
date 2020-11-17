import '../styles/style.css';
import { Career } from './resumeBody/carrerObjective';
import { SkillsHeading } from './resumeBody/technical/technical';
import { Skills } from "./resumeBody/technical/skills";
import { WorkExperience } from './resumeBody/experience/workExperience'
import { WorkExperience2 } from './resumeBody/experience/experience2';
import { Education } from './resumeBody/education/education';
import { Projects } from './resumeBody/miniProjects/javaProjects';


export const Details = () => {
    return (
        <div class="details">
            <Career />
            <SkillsHeading />
            <Skills />
            <WorkExperience />
            <WorkExperience2 />
            <Education />
            <Projects />
        </div>

    );
}