import { NgModule }
    from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { BookRideComponent } from './book-Ride.component';



import { RideNowComponent } from './ride-Now.component';

import { SelectDriverComponent } from './select-driver.component';

import { ConfirmBookingComponent }  from './confirm-booking.component';
import { UserSignUpComponent } from './sign-up.component';



@NgModule({

    declarations: [

       
        BookRideComponent,

        RideNowComponent,

        SelectDriverComponent,

        ConfirmBookingComponent,
        UserSignUpComponent

    ],

    imports: [

        BrowserModule,
    ],

    exports: [

      

        BookRideComponent,

        RideNowComponent,

        SelectDriverComponent,

        ConfirmBookingComponent,
        UserSignUpComponent

    ],

    providers: []

})

export class UserModule {



}
