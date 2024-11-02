import React from 'react';
import Info from './components/Info';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
    const header_map = new Map();
    header_map.set('mailto:sethsuk@seas.upenn.edu', 'Email');
    header_map.set('https://www.linkedin.com/in/seth-sukboontip/', 'LinkedIn');
    header_map.set('https://github.com/sethsuk', 'GitHub');
    header_map.set('https://www.instagram.com/kilroys_magical_world/', '📷');

    const info_map = new Map();
    info_map.set('Hometown', 'Bangkok, Thailand');
    info_map.set('Skill Set', 'Backend development, Databases, RESTful APIs');
    info_map.set('Passions', 'Digital & film photography, Drumming, Thai basil crispy pork belly, Late-night izakaya runs');
    info_map.set('Current Interest Phase', 'Budget audiophile, Custom mechanical keyboards, Photo book collages');

    return (
        <div>
            <Header header_map={header_map} />

            <main class="container">
                <div class="left-section">
                    <div class="name">
                        <h1>Seth Sukboontip</h1>
                        <h3>Computer Science, BSE @ UPenn '27</h3>
                    </div>

                    <div class="info">
                        <Info info_map={info_map} />
                    </div>

                </div>

                <div class="pfp">
                    <img src="images/seth_sukboontip_image.jpg" alt="Headshot of Seth Sukboontip"/>
                </div>

            </main>

            <Footer footer="2024 Seth Sukboontip. All rights reserved." />
        </div>
    );
};

export default App;