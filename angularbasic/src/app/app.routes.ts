import { Routes } from '@angular/router';
import { Admin } from './components/admin/admin';
import { DataBinding } from './components/data-binding/data-binding';
import { signal } from '@angular/core';
import { NgIf } from './components/ng-if/ng-if';
import { NgFor } from './components/ng-for/ng-for';
import { NgClass } from '@angular/common';
import { PipeEx } from './components/pipe-ex/pipe-ex';

export const routes: Routes = [
    {
        path: 'admin',
        component: Admin
    },
    {
        path: 'data-binding',
        component: DataBinding
    },
    {
        path:'ng-if',
        component: NgIf
    },
    {
        path: 'ng-for',
        component: NgFor
    },
    {
        path: 'ng-class',
        component: NgClass
    },
    {
        path: 'pipe-ex',
        component: PipeEx
    }
    
];
