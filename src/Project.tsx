
import './Project.css'
import { Tool, ProjectProps } from './type';

const Project: React.FC<ProjectProps> = ({ id,name, short_description, tools, link, picture }) => {

    const imageSrc = `https://dimitrihoareau.fr${picture}`;

    return (
            <div className='project' key={id}>
                <div className='project_image_container'>
                <img className='project_image' src={imageSrc} alt={`Project ${name}`} />
                </div>
                <p className='project_name'>{name}</p>
                <p className='project_description' >{short_description}</p>
                <ul>
                {tools.map((tool: Tool) => {
                    const imageName = tool.name.toLowerCase();
                    const imagePath = `https://dimitrihoareau.fr/media/${imageName}.png`;
                    return <li className='tool-li' key={tool.name}><img src={imagePath} alt={`Tool ${tool.name}`} className="tool-logo" /></li>;
                })}
                </ul>
                <a href={link} target="_blank" rel="noopener noreferrer">Visit Project</a>
            </div>
  )
}

export default Project

