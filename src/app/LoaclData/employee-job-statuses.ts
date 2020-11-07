export class EmployeeJobStatuses {
    id;
    status;
    type;
    terminationDate;
    suspendFromDate;
    suspendToDate;
    constructor(EmployeeJobStatuse){
       this. id=EmployeeJobStatuse.id;
        this.status = EmployeeJobStatuse.status;
        this.type = EmployeeJobStatuse.type;
        this.terminationDate = EmployeeJobStatuse.terminationDate;
        this.suspendFromDate = EmployeeJobStatuse.suspendFromDate;
        this.suspendToDate = EmployeeJobStatuse.suspendToDate;
    }
}
