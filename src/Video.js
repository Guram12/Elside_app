import './Video.css'
import ReactPlayer from 'react-player';

export function Video() {


    return (
        
            <div className='video-container'>
                <ReactPlayer
                    className='video'
                    url='./video4.mp4'
                    playing={true}
                    controls={true}
                    loop={true}
                    width='100%'
                    height='100%'
                    volume={false}
                />
            </div>
        
    );
}


