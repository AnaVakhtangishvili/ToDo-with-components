import { Component } from '@angular/core';
import { NewTaskInterface, TaskStatusEnum } from './types/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ToDo';

  tasks: NewTaskInterface[] = [];
  taskStatus = TaskStatusEnum;
}
