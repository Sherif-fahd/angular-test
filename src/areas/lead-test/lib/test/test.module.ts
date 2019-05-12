import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TestRoutingModule } from './test-routing.module';
import { ListPumpComponent } from '../components/list-pump/list-pump.component';
import { SavePumpsComponent } from '../components/save-pumps/save-pumps.component';
import * as Material from '@angular/material';
import { MatProgressSpinnerModule,
     MatIconModule,
     MatMenuModule,
     MatButtonModule,
     MatCardModule,
   } from '@angular/material';
import { TaskService } from 'areas/lead-test/task.service';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';


@NgModule({
  imports: [
    CommonModule,
    TestRoutingModule,
    BrowserModule,
    HttpClientModule ,
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    FormsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    Material.MatToolbarModule,
    Material.MatGridListModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatRadioModule,
    Material.MatSelectModule,
    Material.MatCheckboxModule,
    Material.MatDatepickerModule,
    Material.MatNativeDateModule,
    Material.MatButtonModule,
    Material.MatSnackBarModule,
    Material.MatTableModule,
    Material.MatIconModule,
    Material.MatPaginatorModule,
    Material.MatSortModule,
    Material.MatDialogModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]

        }
    })
   



  ],
  exports: [
    ListPumpComponent,
    SavePumpsComponent,
    TranslateModule

  ],

  entryComponents: [ SavePumpsComponent],
  declarations: [ListPumpComponent, SavePumpsComponent],
  providers: [
    TaskService
    ],
})
export class TestModule { }

// tslint:disable-next-line: typedef
export function HttpLoaderFactory(http: HttpClient) {
  } 
