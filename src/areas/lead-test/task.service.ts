import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SavePumpResponse } from './lib/_model/addResponse';
import { DataElement, DataApiResponse } from './lib/_model/data';

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    pumpsUrl = 'http://pumpapi.crowdthem.com/api/PumpsAPI/pumps';
    SavePumpUrl = 'http://pumpapi.crowdthem.com/api/PumpsAPI//SavePump';
    constructor(private http: HttpClient, ) { }

    getData(): Observable<DataApiResponse> {
        return this.http.get<DataApiResponse>(this.pumpsUrl);
    }
    saveData(data: DataElement): Observable<SavePumpResponse> {
        return this.http.post<SavePumpResponse>(this.SavePumpUrl, data);
    }

}
