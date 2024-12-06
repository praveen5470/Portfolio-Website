import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/football.png';
import netflix from '../../assets/netflix.png';
import weather from '../../assets/weather.png';
import ecommerce from '../../assets/shopping-bag.png'
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        
        <ProjectCard
          src={netflix}
          link="https://praveen5470.github.io/Netflix-React/"
          h3="Netflix"
          p="Netflix-Clone"
        />
        <ProjectCard
          src={weather}
          link="https://praveen5470.github.io/Weather-App/"
          h3="Weather-Forecasting"
          p="Weather Forecasting Website "
        /> 
        <ProjectCard
          src={ecommerce}
          link="https://praveen5470.github.io/Ecommerce-Website/"
          h3="Shop Me"
          p="Ecommerce Website"
        />
        <ProjectCard
          src={viberr}
          link="https://praveen5470.github.io/football-match/"
          h3="FootBall Game"
          p="A Simple Football Game Interface "
        
        />
      </div>
    </section>
  );
}

export default Projects;
