import './Projects.css'
import ongoing from './images/ongoing.jpg'
import complited from './images/complited.png'
import projects from './images/projects_icon.png'


export function  Projects(){
    return (
        <div className='projects'>
            <dic className='main_project_cont' >
                <div className='project_container'>
                    <h2 >P r o j e c t s</h2>
                    <img src={projects} alt='service icon' className='service_icon' />

                </div>
                
            </dic>

            <div className='poject_container'>
                {/* first servis pack */}
                <div className='services'>
                    <div>
                        <button className='service_button'>ongoing</button>
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