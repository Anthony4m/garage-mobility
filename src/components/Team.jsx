import { useState, useEffect } from 'react';
import './Cards.css';
import CardItem from './CardItem';

const Team = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    // Simulate fetching team data from backend server
    const fetchTeam = () => {
      setTimeout(() => {
        setTeam([
          {
            id: 1,
            name: 'John Doe',
            position: 'CEO',
            imageUrl: 'images/team1.jpg'
          },
            {
              id: 2,
              name: 'Jane Smith',
              position: 'COO',
              imageUrl:
              'images/team2.jpg',
            },
            {
              id: 3,
              name: 'Bob Johnson',
              position: 'CTO',
              imageUrl:
              'images/team3.jpg',
            },
            {
              id: 4,
              name: 'Bob Johnson',
              position: 'lead Developer',
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
      <h1>Our Team</h1>
      {team.length > 0 ? (
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              {team.map((member) => (
                <CardItem
                  key={member.id}
                  src={member.imageUrl}
                  text={member.name}
                  label={member.position}
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

export default Team;
