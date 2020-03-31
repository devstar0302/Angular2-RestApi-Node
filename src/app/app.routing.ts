import{ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import { UserComponent } from './components/user.component';
import { AboutComponent } from './components/about.component';
import { HomeComponent } from './home/home.component';
import { VideoCenterComponent } from './video-center/video-center.component';

const appRoutes: Routes =[
    {
        path:'',
        redirectTo:'/home',
        pathMatch:'full'
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'videos',
        component:VideoCenterComponent
    },
    {
        path:'about',
        component:AboutComponent
    }
];
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);