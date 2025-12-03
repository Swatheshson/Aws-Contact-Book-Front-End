import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

   constructor(private http:HttpClient) {}
   
  //initial value
  display:boolean = false;
  //variable to hold values 
  name:string = ""
  numbervariable!:bigint
  
  change(){
    this.display = true;
  }
  add(){
    //should pass to the backend
  }
}
