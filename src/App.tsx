import React from 'react';
import './App.css';

function App() {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGyuMh1afCXccK0cVmS4R2Teuyec_q5iRUXA&s" alt="logo"/>
            </header>
        <nav className='nav'>
            <div>
                <a>Profile</a>
            </div>
            <div>
                <a>Messages</a>
            </div>
            <div>
                <a>News</a>
            </div>
            <div>
                <a>Music</a>
            </div>
            <div>
                <a>Settings</a>
            </div>
        </nav>
            <div className='content'>
                <img src="https://uplink.weforum.org/uplink/sfc/servlet.shepherd/version/renditionDownload?rendition=ORIGINAL_jpg&versionId=0682o00000XqZEwAAN" alt="ocean"/>
                <div>ava + description</div>
                <div>
                    My posts
                    <div>New post</div>
                    <div>
                        <div>
                            post 1
                        </div>
                        <div>
                            post 2
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
