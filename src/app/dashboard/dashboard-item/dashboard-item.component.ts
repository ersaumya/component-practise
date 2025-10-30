import { Component, input, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css',
})
export class DashboardItemComponent {
  //@Input({required:true}) title!:string;
  title = input.required<string>(); //use after angular 17
  //@Input({required:true}) image!:{src:string,alt:string};
  image = input.required<{ src: string; alt: string }>();
}
//
