import React from 'react';
import "./Team.css"
import TeamMember from './../TeamMembers/TeamMemners';

// Sample Data
const teamMembers = [
  { id: 1, name: 'Rutuja Gaikwad ', role: 'Lead Designer ', bio: 'Loves creating cute and innovative baby outfits.', image: 'RutujaGaikwad.jpg' },
  { id: 2, name: 'Nikita Raut', role: 'Founder & CEO', bio: 'Passionate about baby fashion and leading our vision.', image: 'NikitaRaut.jpg' },
  { id: 3, name: 'Sakshi Shewale', role: 'Head of Marketing', bio: 'Expert in crafting compelling marketing strategies.', image: 'SakshiShewale.jpg' },
  { id: 4, name: 'Rutuja More', role: 'Product Development Manager', bio: 'Ensures the quality and innovation of our products.', image: 'RutujaMore.jpg' },
  { id: 5, name: 'Rutuja Wabale', role: 'Customer Support Manager', bio: 'Dedicated to providing excellent customer service.', image: 'RutujaWabale.jpg' },
  { id: 6, name: 'Sakshi Lambe', role: 'Head Financial Officer', bio: 'Manages our financial health and strategies.', image: 'SakshiLambe.jpg' },
  { id: 7, name: 'Priyanka Phadke', role: 'Chief Financial Officer', bio: 'Manages our financial health and strategies.', image: 'PriyankaPhadke.jpg' },

  // Add more team members as needed
];

const Team = () => {
  return (
    <section className="our-team">
      <h2 >- Meet Our Team -</h2>
     
      <div className="team-members">
        {teamMembers.map(member => (
          <TeamMember key={member.id} {...member} />
        ))}
      </div>
      
    </section>
  );
};

export default Team;