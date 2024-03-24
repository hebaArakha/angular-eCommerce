import { Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [

    {
        path: '',
        component: AllProductsComponent,
        title: 'Our Products'

    },
    {
        path: 'contact-us',
        component: ContactUsComponent,
        title: 'Contact Us'
    },
    {
        path: 'about',
        component: AboutComponent,
        title: 'About Us'
    }
    , {
        path: 'product-details/:id',
        component: ProductDetailsComponent,
        title: 'Our Products'

    }, {
        path: 'login',
        component: LoginComponent,
        title: 'Log in'

    }, {
        path: 'sign-up',
        component: SignUpComponent,
        title: 'Sign Up'

    },{
        path: 'cart',
        component: CartComponent,
        title: 'Cart'

    }, {
        path: '**',
        component: NotFoundComponent,
        title: 'Oops :('

    }
];
