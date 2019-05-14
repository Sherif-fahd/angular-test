import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';


@Component({
    selector: 'app-translate-test',
    templateUrl: './translate-test.component.html',
    styleUrls: ['./translate-test.component.scss']
})
export class TranslateTestComponent {
    title = 'angular-translate';
    langs: string[] = [];

    subject = new Subject<string>();

    constructor(
        private translate: TranslateService
    ) {
        this.translate.setDefaultLang('en');
        this.translate.use('en');
        this.translate.addLangs(['en', 'de']);
        this.langs = this.translate.getLangs();
    }

    changeLang(lang: string): void {
        this.translate.use(lang);
    }
}