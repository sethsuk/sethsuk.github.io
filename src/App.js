import React from 'react';
import Info from './components/Info';
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './components/Projects';

const App = () => {
    const header_map = new Map();
    header_map.set('mailto:sethsuk@seas.upenn.edu', 'Email');
    header_map.set('https://www.linkedin.com/in/seth-sukboontip/', 'LinkedIn');
    header_map.set('https://github.com/sethsuk', 'GitHub');
    header_map.set('https://www.instagram.com/kilroys_magical_world/', '📷');

    const info_map = new Map();
    info_map.set('Hometown', 'Bangkok, Thailand');
    info_map.set('Skill Set', 'Machine learning frameworks, SQL databases, RESTful APIs');
    info_map.set('Passions', 'Digital & film photography, Drumming, Thai basil crispy pork belly, Late-night izakaya runs');
    info_map.set('Current Interests', 'Budget audiophile, Custom mechanical keyboards, Photo book collages');

    const project_map = new Map();
    project_map.set('Image2GPS', {
        description: 'ML model that predicts the GPS location based on purely visual features.',
        technologies: ['PyTorch', 'ResNet', 'PCA'],
        link: 'https://huggingface.co/Latitude-Attitude',
        link_label: 'Hugging Face'
    });
    project_map.set('InstaLite', {
        description: 'Social media app mimicking Instagram with recommendation system.',
        technologies: ['React', 'Node.js', 'MySQL'],
        link: 'https://github.com/sethsuk/InstaLite',
        link_label: 'GitHub'
    });
    project_map.set('Weather Prediction', {
        description: 'ML model that predicts weather conditions given high-alt balloon data.',
        technologies: ['scikit-learn', 'ARIMA', 'Random Forest'],
        link: 'https://github.com/PennAerospaceClub/f24-weather-prediction',
        link_label: 'GitHub'
    });

    return (
        <div>
            <Header header_map={header_map} />

            <main class="container">
                <div class="left-section">
                    <div class="name">
                        <h1>Seth Sukboontip</h1>
                        <h3>University of Pennsylvania, Class of 2027</h3>
                        <h3>— Computer Science, BSE</h3>
                        <h3>— Computer & Information Science, MSE</h3>
                        <h5>Accelerated Master's program — concurrent completion</h5>
                    </div>

                    <div class="info">
                        <Info info_map={info_map} />
                    </div>

                </div>

                <div class="pfp">
                    <img src="images/seth_sukboontip_image.jpg" alt="Headshot of Seth Sukboontip"/>
                </div>

            </main>

            <Projects project_map={project_map} />

            <Footer footer="2025 Seth Sukboontip. All rights reserved." />
        </div>
    );
};

export default App;