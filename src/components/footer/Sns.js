import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

const Sns = () => {
    return (
        <div className='snsLink'>
            <ul>
                <li>
                    <a rel="noreferrer" href="https://github.com/yKD1028" target="_blank">
                        <GitHubIcon fontSize="large" />
                    </a>
                </li>

                <li>
                    <a rel="noreferrer" href="https://www.instagram.com/ykd.jp/" target="_blank">
                        <InstagramIcon fontSize="large" />
                    </a>
                </li>

                <li>
                    <a rel="noreferrer" href="https://youtu.be/iKyqZnDBBAY" target="_blank">
                        <YouTubeIcon fontSize="large" />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sns
