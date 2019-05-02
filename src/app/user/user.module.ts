import { NgModule }
    from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { BookRideComponent } from './book-Ride.component';



import { RideNowComponent } from './ride-Now.component';

import { SelectDriverComponent } from './select-driver.component';

import { ConfirmBookingComponent }  from './confirm-booking.component';
import { UserSignUpComponent } from './sign-up.component';
import { SignInComponent } from './sign-in.component';



@NgModule({

    declarations: [

       
        BookRideComponent,

        RideNowComponent,

        SelectDriverComponent,

        ConfirmBookingComponent,
        UserSignUpComponent,
        SignInComponent

    ],

    imports: [

        BrowserModule,
    ],

    exports: [

      

        BookRideComponent,

        RideNowComponent,

        SelectDriverComponent,

        ConfirmBookingComponent,
        UserSignUpComponent,
        SignInComponent

    ],

    providers: []

})

export class UserModule {



}
