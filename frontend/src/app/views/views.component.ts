import { CommonModule } from '@angular/common';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-views',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,RouterModule],
  templateUrl: './views.component.html',
  styleUrl: './views.component.css'
})
export class ViewsComponent implements OnInit,OnChanges{

  constructor() {}

  form!: FormGroup
  id:string = ''
  role:string = '' //get role from localstorage


  // function for update popup
  addView(): void {
    const popup = document.getElementById("popup-1")! as HTMLDivElement
    if (popup) {
      popup.classList.toggle("active");
    }
  }

  // function for getting the summary popup
  getSummary(): void {
    const popup = document.getElementById("popup-2")! as HTMLDivElement
    if (popup) {
      popup.classList.toggle("active");
    }
  }


  
    ngOnInit(): void {
      // get values from the local storage
      this.role = localStorage.getItem('role') as string
      this.id = localStorage.getItem('id') as string
  
      
    }
    
    ngOnChanges(changes: SimpleChanges): void {
      // create and remove the update popup
      this.addView()
      this.getSummary()
      
    }

}
