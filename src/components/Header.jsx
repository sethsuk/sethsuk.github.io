import React from 'react';

const Header = ({ header_map }) => {
    return (
        <header>
            <div class="header-banner">
                <ul class="header-links">
                    {Array.from(header_map.entries()).map(([link, desc], index) => (
                        <li key={index}><a href={link} target="_blank">{desc}</a></li>
                    ))}
                </ul>
            </div>
        </header>
    );
  };
  

export default Header;
