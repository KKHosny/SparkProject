import { Injectable } from '@angular/core';
import { Hiringdate } from './hiringdate';
import { Department } from './department';
import { Position } from './position';
import { EmployeeJobStatuses } from './employee-job-statuses';

@Injectable({
    providedIn: 'root'
})
export class Employee {
    id:string ;
    fullName_FL:string;
    hiringDate: string;
    hiringDAta;
    firstContractingSalary:string;
    position: Position;
    department: Department;
    employeeJobStatuses: EmployeeJobStatuses;

    constructor(id, fulname, hiringDate, fristSalary, position, department, employeeJobStatuses){
    this.id=id;
    this.fullName_FL=fulname;
    this.hiringDate = hiringDate ;
    console.log(this.hiringDate);
    this.firstContractingSalary=fristSalary;
    this.position = new Position(position);
    this.department=new Department(department);
    this.employeeJobStatuses=new EmployeeJobStatuses(employeeJobStatuses);
    }
    // setEmploees() {
        
     
    //     //this.Empolyees = JSON.parse("./../../../Employees.json");
    //     //console.log(data,"dataaa");
    //     this.Empolyees=data.data.employees;
    //        this.fs=this.Empolyees[0];
    //     console.log(this.fs, "Empolees");

    // }
}
