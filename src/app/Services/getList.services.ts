import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import {List} from '../Classes/getlist';


@Injectable()
export class GetList{  
    constructor(private http: Http){}
        getUserList(): Observable<List[]>{
            return this.http.get("app/JsonData/webdata.json").map( (r:Response) => r.json());
        }
    
}