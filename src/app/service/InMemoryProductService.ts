import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryProductService extends InMemoryDbService {
  createDb() {
    const products = [
      { id: 1, name: 'Bułka', price: 0.59, description: 'świeża i chrupiąca', amount: 4,
        photoAddress: 'https://res.cloudinary.com/dj484tw6k/f_auto,q_auto,c_pad,b_white,w_360,h_360/v1499888687/be/81481.jpg'},
      { id: 2, name: 'Wedlina', price: 34.99, description: 'pyszna ze świni', amount: 3,
        photoAddress: 'http://targsmaku.pl/uploads/recipe/f2/6b/e0/f26be068d2b1fcb4fe3639a09ff204a1_620x740.jpeg' },
      { id: 3, name: 'Kurczak', price: 13.99, description: 'Tani i dobry' , amount: 2,
        photoAddress: 'https://dobrazielarnia.pl/userdata/gfx/8894ab28e1009acbff681987ba62d5ab.jpg'},
      { id: 4, name: 'Ryż', price: 3.59, description: 'Prosto z Chin' , amount: 5,
        photoAddress: 'https://i2.wp.com/www.pakernia24.pl/wp-content/uploads/2017/05/ryz.jpg?resize=300%2C200'},
      { id: 5, name: 'Woda', price: 0.99, description: 'Niegazowana' , amount: 4,
        photoAddress: 'https://res.cloudinary.com/dj484tw6k/f_auto,q_auto,c_pad,b_white,w_360,h_360/v1499942641/bb/428.png'},
      { id: 6, name: 'Orzechy', price: 7.99, description: 'Dobre orzechy' , amount: 3,
        photoAddress: 'https://www.cosdlazdrowia.pl/assets/uploads/images/orz-wlo-500g/1024_768_orzechy-wloskie-sklep123.jpg'},
      { id: 7, name: 'Herbata', price: 6.39, description: 'Najlepsza herbata' , amount: 0,
        photoAddress: 'https://gurbacka.pl/wp-content/uploads/2015/05/herbata-z-cytryn%C4%85-dobra-czy-z%C5%82a.jpg'},
      { id: 8, name: 'Wołowina', price: 166.00, description: 'Długo dojrzewająca' , amount: 2,
        photoAddress: 'https://beefshop.pl/39/zrazowa-dolna.jpg'}
    ];
    return {products};
  }

}
