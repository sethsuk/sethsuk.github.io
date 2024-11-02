import React from 'react';

const App = () => {
  return (
    <div>
        <header>
            <div class="header-banner">
                <ul class="header-links">
                    <li><a href="mailto:sethsuk@seas.upenn.edu" target="_blank">Email</a></li>
                    <li><a href="https://www.linkedin.com/in/seth-sukboontip/" target="_blank">LinkedIn</a></li>
                    <li><a href="https://github.com/sethsuk" target="_blank">GitHub</a></li>
                    <li><a href="https://www.instagram.com/kilroys_magical_world/" target="_blank">📷</a></li>
                </ul>
            </div>
        </header>

        <main class="container">
            <div class="left-section">
                <div class="name">
                    <h1>Seth Sukboontip</h1>
                    <h3>Computer Science, BSE @ UPenn '27</h3>
                </div>
                <div class="info">
                    <p><strong>Hometown:</strong> Bangkok, Thailand</p>
                    <p><strong>Skill Set:</strong> Backend development, Databases, RESTful APIs</p>
                    <p><strong>Passions:</strong> Digital & film photography, Drumming, Thai basil crispy pork belly, Late-night izakaya runs</p>
                    <p><strong>Current Interest Phase:</strong> Budget audiophile, Custom mechanical keyboards, Photo book collages</p>
                </div>
            </div>
            <div class="pfp">
                <img src="images/seth_sukboontip_image.jpg" alt="Headshot of Seth Sukboontip"/>
            </div>
        </main>

        <footer>
            <p>&copy; 2024 Seth Sukboontip. All rights reserved.</p>
        </footer>
    </div>
  );
};

export default App;