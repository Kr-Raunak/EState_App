import React from 'react';
import '../styles/OurTeam.css';
import RaunakImg from '../assets/Raunak_imagei.png';


const MeetTheTeam = () => {
    return (
        <section id="meet-team-1332">
            <div className="cs-container">
                <div className="cs-content">
                    <span className="cs-topper">Our Expert Team</span>
                    <h2 className="cs-title">Our Awesome Team Members</h2>
                    <p className="cs-text">
                        In the new era of technology we look in the future with certainty and for any post types, or just they are so much great of all to a program.
                    </p>
                </div>
                <ul className="cs-card-group">
                    <li className="cs-item">
                        <picture className="cs-picture">
                            {/* Mobile Image */}
                            <source media="(max-width: 600px)" srcSet={RaunakImg} />
                            {/* Tablet and above Image */}
                            <source media="(min-width: 601px)" srcSet={RaunakImg} />
                            <img loading="lazy" decoding="async" src={RaunakImg} alt="person" width="305" height="407" />
                        </picture>
                        <div className="cs-info">
                            <span className="cs-name">Kumar Raunak </span>
                            <span className="cs-job">CEO(Chief Enthusiasm Officer)</span>
                        </div>
                    </li>
                    <li className="cs-item">
                        <picture className="cs-picture">
                            {/* Mobile Image */}
                            <source media="(max-width: 600px)" srcSet="https://wallpapercave.com/wp/wp7047913.jpg" />
                            {/* Tablet and above Image */}
                            <source media="(min-width: 601px)" srcSet="https://wallpapercave.com/wp/wp7047913.jpg" />
                            <img loading="lazy" decoding="async" src="https://wallpapercave.com/wp/wp7047913.jpg" alt="person" width="305" height="407" />
                        </picture>
                        <div className="cs-info">
                            <span className="cs-name">Gaur Gopal</span>
                            <span className="cs-job">Head of Client Relations  </span>
                        </div>
                    </li>
                    <li className="cs-item">
                        <picture className="cs-picture">
                            {/* Mobile Image */}
                            <source media="(max-width: 600px)" srcSet="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202306/annamalai-sixteen_nine.jpg?VersionId=nXjrjycrjP3fJ5T5aFKZVyvS6K1yunl_" />
                            {/* Tablet and above Image */}
                            <source media="(min-width: 601px)" srcSet="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202306/annamalai-sixteen_nine.jpg?VersionId=nXjrjycrjP3fJ5T5aFKZVyvS6K1yunl_" />
                            <img loading="lazy" decoding="async" src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202306/annamalai-sixteen_nine.jpg?VersionId=nXjrjycrjP3fJ5T5aFKZVyvS6K1yunl_" alt="person" width="305" height="407" />
                        </picture>
                        <div className="cs-info">
                            <span className="cs-name">Annamalai</span>
                            <span className="cs-job">Negotiation Specialist (Master of the Deal)</span>
                        </div>
                    </li>
                    <li className="cs-item">
                        <picture className="cs-picture">
                            {/* Mobile Image */}
                            <source media="(max-width: 600px)" srcSet="https://img.freepik.com/premium-photo/confident-indian-college-boy-formal-suit-showcasing-athletic-physique_878783-15087.jpg" />
                            {/* Tablet and above Image */}
                            <source media="(min-width: 601px)" srcSet="https://img.freepik.com/premium-photo/confident-indian-college-boy-formal-suit-showcasing-athletic-physique_878783-15087.jpg" />
                            <img loading="lazy" decoding="async" src="https://img.freepik.com/premium-photo/confident-indian-college-boy-formal-suit-showcasing-athletic-physique_878783-15087.jpg" alt="person" width="305" height="407" />
                        </picture>
                        <div className="cs-info">
                            <span className="cs-name">Keshav Goswami </span>
                            <span className="cs-job">Marketing Specialist</span>
                        </div>
                    </li>
                    {/* Repeat similar structure for other team members */}
                </ul>
            </div>
        </section>
    );
};

export default MeetTheTeam;
