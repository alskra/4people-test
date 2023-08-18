import Alpine from 'alpinejs';
// import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import './app.scss';

Alpine.data('app', () => ({
  cart: JSON.parse(localStorage.cart),
  init() {
    this.$root.alpine = this;
    this.$watch('cart', () => {
      localStorage.cart = JSON.stringify(this.cart);
    });
  },
  app: {},
}));

Alpine.start();
