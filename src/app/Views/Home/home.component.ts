import { Component,OnInit } from '@angular/core';
import { Stream } from 'stream';
import { List } from '../../Classes/getList';
import { GetList } from '../../Services/getList.services';

@Component({
    selector: 'my-app',
    template: `<div class="container"><h1>{{name}}</h1>
    <hr/>
    <table class="table table-hover">
        <tr>
            <td>Name</td>
            <td>:</td>
            <td>
            <input class="form-control" name='Name' [(ngModel)]='Student.Name'/>
            </td>
        </tr>
        <br/>
        <tr>
            <td>Surname</td>
            <td>:</td>
            <td>
            <input class="form-control" name='Surname' [(ngModel)]='Student.Surname'/>
            </td>
        </tr>
        <br/>
        <tr>
            <td>Address</td>
            <td>:</td>
            <td>
            <input class="form-control" name='Address' [(ngModel)]='Student.Address'/>
            </td>
        </tr>
        
    </table><br/>
    <button type="button" class="btn btn-success" (click)="saveRecord()">Submit</button>
    <br/>
    <br/>
    <hr/>
    <table class="table table-hover">
        <thead class="table-active">
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Surname</th>
                <th scope="col">Address</th>
                <th scope="col">Actions</th>
            </tr>
        </thead>
        <tr *ngFor='let item of StudentList; let i= index'>
            <td>{{i}}</td>
            <td>
            {{item.Name}}</td>
            <td>
            {{item.Surname}}</td>
            <td>
            {{item.Address}}</td>
            <td>
            <button type="button" class="btn btn-success" (click)="editRecord(i)">Edit</button><button type="button" class="btn btn-Danger" (click)="deleteRecord(i)">Delete</button>
            </td>
        </tr>
    </table>
   
    </div>
    `,
})
export class HomeComponent {
    name: string;
    Student: StudentRecord;
    StudentList:StudentRecord[]=[];
    listOfUsers: List[] = [];
    constructor(private getListTemp: GetList){
        this.Init();
    }
    
    Init(){
            this.name = 'Mascor Accounts';
            this.Student = {
                Name:'',
                Surname:'',
                Address:''
            }
        }
    saveRecord(){
 
        this.StudentList.push(this.Student);
        this.Init();
    }
    deleteRecord(i){
        console.log(i);
    }
    editRecord(i){
       this.Student = this.StudentList[i];
    }
    ngOnInit(): void{
        this.getListTemp.getUserList().subscribe( r => this.listOfUsers = r)
    }

}

interface StudentRecord
{
Name:string;
Surname:string;
Address:string;
}