
import Carousel from './Carousel';
import Filter from './Filter';
import { useState, useEffect } from 'react';
import { ProjectProps, VisibleTagsProps } from './type';


function App() {
  const [projects, setProjects] = useState<ProjectProps[]>([]);

  const [visibleTags, setVisibleTags] = useState<VisibleTagsProps>({
    aws: false,
    docker: false,
    vue: false,
    python: false,
    css: false,
    wordpress: false,
    javascript: false,
    openedx: false,
    react: false,
    django: false,
  });

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
    <Filter visibleTags={visibleTags} setVisibleTags={setVisibleTags}/>
    <Carousel projects={projects} visibleTags={visibleTags} />
    </>
  )
}




export default App

