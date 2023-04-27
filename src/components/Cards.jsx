import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Our Services</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Full visibility across the parts value chain'
              label='Insights'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Full suite inventory management solution'
              label='Inventory Management'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Where to sell/buy, how much to price/pay'
              label='Consultancy'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='One stop shop for parts distribution in Africa'
              label='Distribution'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='One stop shop for parts distribution and repairs in Africa'
              label='Repairs'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
