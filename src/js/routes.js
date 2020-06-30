
import HomePage from '../pages/home.f7.html';
import AboutPage from '../pages/about.f7.html';
import FormPage from '../pages/form.f7.html';
import CatalogPage from '../pages/catalog.f7.html';
import ProductPage from '../pages/product.f7.html';
import SettingsPage from '../pages/settings.f7.html';

import DynamicRoutePage from '../pages/dynamic-route.f7.html';
import RequestAndLoad from '../pages/request-and-load.f7.html';
import NotFoundPage from '../pages/404.f7.html';


import AppStartPage from '../pages/app-start-page.f7.html';
import AppGroundTicketPage from '../pages/app-ground-ticket-page.f7.html';
import AppTeamColorPage from '../pages/app-team-color-page.f7.html';
import AppKaderPage from '../pages/app-kader-page.f7.html';
import AppGroundSliderPage from '../pages/app-ground-slider-page.f7.html';
import AppVideoPage from '../pages/app-video-page.f7.html';
import AppNewsPage from '../pages/app-news-page.f7.html';
import AppLoginPage from '../pages/app-login-page.f7.html';
import AppNewsDetailPage from '../pages/app-news-detail-page.f7.html';
import AppWarenkorbPage from '../pages/app-warenkorb-page.f7.html';
import AppProfileUberschitPage from '../pages/app-profile-uberschit-page.f7.html';
import AppRegistrationPage from '../pages/app-registration-page.f7.html';
import AppProductListingPage from '../pages/app-product-list-page.f7.html';
import AppProductBuyPage from '../pages/app-product-buy-page.f7.html';
import AppCheckoutPage from '../pages/app-checkout-page.f7.html';
import AppNormalTextPage from '../pages/app-normal-text-page.f7.html';
import AppMainBestellungPage from '../pages/app-main-bestellung-page.f7.html';














var routes = [
  {
    path: '/',
    component: AppStartPage,
  },
  {
    path: '/app-ground-ticket-page/',
    component: AppGroundTicketPage,
  },
  {
    path: '/app-team-color-page/',
    component: AppTeamColorPage,
  },
  {
    path: '/app-kader-page/',
    component: AppKaderPage,
  },
  {
    path: '/app-ground-slider-page/',
    component: AppGroundSliderPage,
  },
  {
    path: '/app-video-page/',
    component: AppVideoPage,
  },
  {
    path: '/app-news-page/',
    component: AppNewsPage,
  },
  {
    path: '/app-login-page/',
    component: AppLoginPage,
  },
  {
    path: '/app-news-detail-page/',
    component: AppNewsDetailPage,
  },
   {
    path: '/app-warenkorb-page/',
    component: AppWarenkorbPage,
  },
  {
    path: '/app-profile-uberschit-page/',
    component: AppProfileUberschitPage,
  },
  {
    path: '/app-registration-page/',
    component: AppRegistrationPage,
  },
  {
    path: '/app-product-list-page/',
    component: AppProductListingPage,
  },
  {
    path: '/app-product-buy-page/',
    component: AppProductBuyPage,
  },
  {
    path: '/app-checkout-page/',
    component: AppCheckoutPage,
  },
  {
    path: '/app-normal-text-page/',
    component: AppNormalTextPage,
  },
  {
    path: '/app-main-bestellung-page/',
    component: AppMainBestellungPage,
  },
  {
    path: '/home/',
    component: HomePage,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/form/',
    component: FormPage,
  },
  {
    path: '/catalog/',
    component: CatalogPage,
  },
  {
    path: '/product/:id/',
    component: ProductPage,
  },
  {
    path: '/settings/',
    component: SettingsPage,
  },

  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function (routeTo, routeFrom, resolve, reject) {
      // Router instance
      var router = this;

      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = routeTo.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            context: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;