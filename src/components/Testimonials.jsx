import { useState, useEffect } from 'react';
import './Cards.css';
import CardItem from './CardItem';

const Testimonial = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    // Simulate fetching testimony data from backend server
    const fetchTeam = () => {
      setTimeout(() => {
        setTeam([
          {
            id: 1,
            name: 'John Doe',
            testimony: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel fringilla augue.',
            imageUrl: 'images/team1.jpg'
          },
            {
              id: 2,
              name: 'Jane Smith',
              testimony: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel fringilla augue.',
              imageUrl:
              'images/team2.jpg',
            },
            {
              id: 3,
              name: 'Bob Johnson',
              testimony: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel fringilla augue.',
              imageUrl:
              'images/team3.jpg',
            },
            {
              id: 4,
              name: 'Bob Johnson',
              testimony: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel fringilla augue.',
              imageUrl:
              'images/team4.jpg',
            },
        ]);
      }, 2000);
    };

    fetchTeam();
  }, []);

  return (
    <div className='cards'>
      <h1>Testimonials</h1>
      {team.length > 0 ? (
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              {team.map((member) => (
                <CardItem
                  key={member.id}
                  src={member.imageUrl}
                  text={member.testimony}
                  label={member.name}
                  path='#'
                />
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <p>Loading team members...</p>
      )}
    </div>
  );
};

export default Testimonial;
