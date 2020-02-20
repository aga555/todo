import {Component, OnInit} from '@angular/core';
import {TodoItem} from '../interfaces/todo-item';
import {TodoListService} from '../services/todo-list.service';

@Component({
  selector: 'app-list-manager',
  template: `
      <div class="todo-app">

          <app-input-button-unit (save)="addItem($event)"></app-input-button-unit>
          <ul>
              <li *ngFor="let todoItem of todoList">
                  <app-todo-item [item]="todoItem"
                                 (remove)="removeItem($event)"
                                 (update)="updateItem($event.item, $event.changes)"></app-todo-item>
              </li>
          </ul>
      </div>
  `,
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {
  todoList: TodoItem[] = this.listService.getTodoList();

  constructor(private listService: TodoListService) {
  }

  ngOnInit() {
  }

  addItem(newTitle: string) {
    this.listService.addItem({title: newTitle});
  }

  removeItem(item: TodoItem) {
    this.listService.deleteItem(item);
  }

  updateItem(item: TodoItem, changes: any) {
    this.listService.updateItem(item, changes);

  /*editItem(item:TodoItem,changes: any){
    this.listService.editItem(item,changes);
    }*/
  }
}
