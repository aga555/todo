import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
      <input class="todo-input" #inputElementRef
             [value]="title" (keyup.enter)="changeTitle($event.target.value)">
      <button class="btn" (click)="changeTitle(inputElementRef.value)">Save</button>
  `,

  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  title = 'hello world';
  @Output() save: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {

  }

  changeTitle(newTitle: string) {
    this.save.emit(newTitle);
  }

}
