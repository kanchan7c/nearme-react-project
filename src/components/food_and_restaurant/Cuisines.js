import React from 'react';
import Food from './Food';
import { Cuisine } from './food_list';

const Cuisines = () => {
  return (
    <section className='cuisines'>
      <h5>
        <a href='/food-and-restaurant'>Home / Food and Restaurant </a>
      </h5>
      <h4>Search by Cuisines</h4>
      <div className='cuisine_container'>
        <Food
          name={Cuisine.CH}
          view_count={2}
          source='https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/2020-02/Chilli-Garlic-Noodles-Veg.jpg'
          alternate='Chinese'
        />
        <Food
          name={Cuisine.CT}
          view_count={3}
          source='https://i.ndtvimg.com/i/2017-03/chinese_620x350_41490702012.jpg'
          alternate='Continental'
        />
        <Food
          name={Cuisine.IT}
          view_count={0}
          source='https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/content10735.jpg'
          alternate='Italian'
        />
        <Food
          name={Cuisine.NI}
          view_count={7}
          source='https://i0.wp.com/foodshubb.com/wp-content/uploads/2021/06/North-Indian-Food.jpg?fit=600%2C500&ssl=1'
          alternate='North Indian'
        />
        <Food
          name={Cuisine.ST}
          view_count={0}
          source='https://im.rediff.com/getahead/2017/mar/28foodies5.jpg'
          alternate='Street Style'
        />
        <Food
          name={Cuisine.SI}
          view_count={2}
          source='https://images.herzindagi.info/image/2020/Apr/south-indian-food-recipes-s.jpg'
          alternate='South Indian'
        />
      </div>
    </section>
  );
};

export default Cuisines;
