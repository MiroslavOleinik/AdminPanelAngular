import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  title: string = 'ngrx';

  ngOnInit() {
    console.log(typeof this.title);
  }
}
