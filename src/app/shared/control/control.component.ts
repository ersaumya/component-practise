import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control', // alternative to @HostBinding its newer way
    '(click)': 'onClick()', // alternative to @HostListener its newer way
  },
})
export class ControlComponent {
  label = input.required<string>();
  //@HostBinding('class') className = 'control';// alternative to host property its older way
  // @HostListener('click') onClick() {
  //   console.log('Control component clicked');//alternative to host event its older way
  // }
  private el = inject(ElementRef);
  onClick() {
    console.log('Control component clicked');
    console.log(this.el);
  }
}
