import './Projects.css';
import ongoing from './images/ongoing.jpg';
import complited from './images/complited.png';
import projects from './images/projects_icon.png';
import { Link } from 'react-router-dom';





export function  Projects(){
    return (
        <div className='projects'>
            <div className='main_project_cont' >
                <div className='project_container'>
                    <h2 >P r o j e c t s</h2>
                    <img src={projects} alt='service icon' className='service_icon' />
                </div>
                
            </div>

            <div className='poject_container'>
                {/* first servis pack */}
                <div className='services'>
                    <div>
                        <Link to={'/projects/ongoing'}  >
                            <button className='service_button'>ongoing</button>
                        </Link>
                    </div>

                    <div>
                        <img src={ongoing} alt="electrical inginering"  className='electrical'/> 
                    </div>
                </div>

                {/* second servis pack */}
                <div className='services'>
                    <div>
                        <button className='service_button'>complited</button>
                    </div>

                    <div>
                        <img src={complited} alt="electrical inginering"  className='electrical'/> 
                    </div>
                </div>
            </div>
            
        </div>
    )
}