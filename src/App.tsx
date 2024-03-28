
import Carousel from './Carousel';
// import ProjectList from './ProjectList';
import { useState, useEffect } from 'react';
// import Project from './Project';
import { ProjectProps } from './type';




function App() {
  const [projects, setProjects] = useState<ProjectProps[]>([]);

    useEffect(() => {
      fetch('https://dimitrihoareau.fr/api/projects/')
        .then(response => response.json())
        .then((data: ProjectProps[]) => { 
          setProjects(data);
        })
        .catch(error => {
          console.error('Error fetching data: ', error);
        });
  }, []);

  return (
    <>
    <Carousel projects={projects} />
    </>
  )
}




export default App

