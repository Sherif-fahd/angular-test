import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Platform } from '@angular/cdk/platform';
import { TranslateService } from '@ngx-translate/core';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


import {Router} from "@angular/router";
import { MatSnackBar } from '@angular/material';
import { HttpClient } from '@angular/common/http';

@Component({
    selector   : 'app',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss']
})
export class Lead implements OnInit, OnDestroy
{

    // Private
    private _unsubscribeAll: Subject<any>;
    langs: string[] = [];


    constructor(
        @Inject(DOCUMENT) private document: any,
        private translateService: TranslateService,
        private _router: Router,
        private _platform: Platform,
        private _http: HttpClient,
        private _snackbar: MatSnackBar
    )
    {
        // Add is-mobile class to the body if the platform is mobile
        if ( this._platform.ANDROID || this._platform.IOS )
        {
            this.document.body.classList.add('is-mobile');
        }
        // Set the private defaults
        this._unsubscribeAll = new Subject();

        ///Lead-Test : ROut to your module here!
        

    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        this.translateService.setDefaultLang('en');
        this.translateService.use('en');
        this.translateService.addLangs(['en', 'de']);
        this.langs = this.translateService.getLangs();

        }
        changeLang(lang: string): Observable<string>{
         return   this.translateService.use(lang);
        }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

 
}
