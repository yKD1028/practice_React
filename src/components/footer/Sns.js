import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

const Sns = () => {
    return (
        <div className='snsLink'>
            <a rel="noreferrer" href="https://github.com/yKD1028" target="_blank">
                <GitHubIcon fontSize="large" color='#3d3d3b;' /> 
            </a> 

            <a rel="noreferrer" href="https://www.instagram.com/ykd.jp/" target="_blank">
                <InstagramIcon fontSize="large" color='#3d3d3b;' /> 
            </a> 

            <a rel="noreferrer" href="https://youtu.be/iKyqZnDBBAY" target="_blank">
                <YouTubeIcon fontSize="large" color='#3d3d3b;' /> 
            </a>
        </div>
    )
}

export default Sns
