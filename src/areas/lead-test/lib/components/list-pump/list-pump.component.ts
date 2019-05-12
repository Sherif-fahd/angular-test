import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import {MatSnackBar} from '@angular/material';
import { SavePumpsComponent } from '../save-pumps/save-pumps.component';
import { TaskService } from 'areas/lead-test/task.service';
import { DataElement } from '../../_model/data';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-list-pump',
  templateUrl: './list-pump.component.html',
  styleUrls: ['./list-pump.component.scss']
})
export class ListPumpComponent implements OnInit {
    user = {
        name: 'Arthur',
        age: 42
      };

    dataSource: MatTableDataSource<DataElement>;
    loading = false ;
    constructor(private snackBar: MatSnackBar,
         private service: TaskService,
         public dialog: MatDialog,
         private translate: TranslateService ) {
            translate.setDefaultLang('en');
       
          }
         
    displayedColumns: string[] = ['Name', 'MacAddress', 'MLPS', 'TankTotalCapacity', 'TankRemainedCapacity', 'actions'];
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    searchKey: string;
  
  
    ngOnInit(): void  {
      this.loading = true ;
      this.dataSource = new MatTableDataSource() ;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort ;
      this.getData() ;
    }
  
    getData(): void {
      this.service.getData().subscribe(response => {
        this.loading = false ;
        this.dataSource.data =  response.Data;
      });
    }
  
    onSearchClear(): void {
      this.searchKey = '$key';
      this.applyFilter();
    }
  
    applyFilter(): void  {
      this.dataSource.filter = this.searchKey.trim().toLowerCase();
    }
    
    openDialog(): void {
      const dialogRef = this.dialog.open(SavePumpsComponent, {
        width: '600px',
      });
  
      dialogRef.afterClosed().subscribe(result => {
          if (result){
            this.snackBar.open(result.toString() , null , {
                duration: 2000,
              });
          }
        
        this.loading = true ;
        this.getData();
      });

     
    }

// tslint:disable-next-line: typedef
    switchLanguage(language: string) {
        this.translate.use(language);
      }

    
}
