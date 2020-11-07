import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Employee } from '../LoaclData/employee';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }
  url: string ="http://localhost:3000/employees"
  getusers(){
    return this.http.get<Employee[]>(this.url)
  }

}
