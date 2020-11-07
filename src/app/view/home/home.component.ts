import { Component, OnInit, Injectable} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Employee } from './../../LoaclData/employee';
import { RestService } from './../../server/rest.service';
declare let $ :any;
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  options={Name :false,Salary:false,hiringDate:false};
  myform :FormGroup;
  myforms:FormGroup;
  numb:FormControl;
 test;
 p:number=1;
  firstname:FormControl;
  type={between:false,after:false,before:false};
  typ:FormControl;
  Kind:FormControl;
  salaryStart:FormControl;
  salaryEnd:FormControl;
  empolyee:Employee[]=[];
  empety: Employee[] = [];
  i=0;
  constructor(private rs: RestService,) { }
  ngOnInit(): void {
   this.intiate();
   this.initFormControls();
   this.createForm();
   this.Kind.valueChanges.subscribe(res=>{
     if (res=="0") {
       this.options.Name = false;
       this.options.Salary = false;
       this.options.hiringDate = false;
       this.type.after = false;
       this.type.before = false;
       this.type.between = false;
       this.intiate();

     }
     else if (res=="1") {
       this.options.Name=true;
       this.options.Salary=false;
       this.options.hiringDate=false;
       this.type.after = false;
       this.type.before = false;
       this.type.between = false;
     }
     else if (res=="2") {
       this.options.Name = false;
       this.options.Salary = true;
       this.options.hiringDate = false;
       
     }
     else if (res == "3") {
       this.options.Name = false;
       this.options.Salary = false;
       this.options.hiringDate = true;
     }
   }
    );
    this.typ.valueChanges.subscribe(res=>{
      console.log("change");
      if (res == "0") {
        this.options.Name = false;
        this.options.Salary = false;
        this.options.hiringDate = false;
        this.type.after = false;
        this.type.before = false;
        this.type.between = false;
        this.intiate();
      }
     else if (res == "1") {
        this.type.after = true;
        this.type.before = false;
        this.type.between = false;
      }
      else if (res == "2") {
        this.type.after = false;
        this.type.before = true;
        this.type.between = false;
      }
      else if (res == "3") {
        this.type.after = false;
        this.type.before = false;
        this.type.between = true;
      }
    })
     this.numb.setValue(10);
  }
  intiate(){
    this.rs.getusers().subscribe((result) => {
      this.empolyee = this.empety = result;
      console.log(result);
      //console.log(this.empolyee[0].hiringDate.date);
      // this.test = this.empolyee[0].hiringDate.split("T");
      // console.log(this.test[0]);
    
      console.log(this.empolyee);
      
    })
  }
  createForm() {
    this.myform = new FormGroup({
    
      Kind: this.Kind,
      typ: this.typ,
      firstname: this.firstname,
      salaryStart: this.salaryStart,
      salaryEnd: this.salaryEnd,
    
    });
    this.myforms=new FormGroup({
      numb:this.numb
    })
  }
  initFormControls() {
    this.numb = new FormControl('', {
      validators: [Validators.required],
    });
    this.firstname = new FormControl('', {
      validators: [Validators.required],
    });
    this.salaryStart = new FormControl('', {
      validators: [Validators.required],
    });
    this.salaryEnd = new FormControl('', {
      validators: [Validators.required],
    });
    this.Kind = new FormControl('', {
      validators: [Validators.required],
     });
    this.typ = new FormControl('', {
      validators: [Validators.required],
    });
  }
  search(){
     this.empety=this.empolyee;
    if (this.options.Name==true) {
      if (this.firstname.value == "") {
        this.intiate();
      } else {
        this.empety = this.empolyee.filter(res => {
          return res.fullName_FL.toLocaleLowerCase().match(this.firstname.value.toLocaleLowerCase())
        })
      }
    } else if (this.options.Salary==true) {
      if (this.type.after == true) {
        if (this.salaryStart.value == "") {
         

        }
        else{
          this.empety = this.empolyee.filter(res => {
            return parseInt(res.firstContractingSalary) >= parseInt(this.salaryStart.value);
          })
        }
      }
      else if (this.type.before == true) {
        if (this.salaryStart.value == "") {
         
        } else {
         
          this.empety = this.empolyee.filter(res => {
            return parseInt(res.firstContractingSalary) <= parseInt(this.salaryStart.value);
          })
        }
      }
      else if (this.type.between == true) {
        if (this.salaryStart.value == "" && this.salaryEnd.value == "") {
         
        } else {
         
          this.empety = this.empolyee.filter(res => {
            return parseInt(res.firstContractingSalary) >= parseInt(this.salaryStart.value) && parseInt(res.firstContractingSalary) <= parseInt(this.salaryEnd.value);
          })
        }
      }

    } 
   
      
    
      
    
  
   
     
     
    
  }
 
  
  show(){
    $('#popup').modal('show');
  }
}
