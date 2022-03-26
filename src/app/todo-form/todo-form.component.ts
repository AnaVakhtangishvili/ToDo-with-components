import { Component, Input, OnInit } from '@angular/core';
import {
  NewTaskInterface,
  TaskLevelEnum,
  TaskStatusEnum,
} from '../types/todo.model';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {
  @Input() tasks!: NewTaskInterface[];
  @Input() taskStatus = TaskStatusEnum;

  taskLevelEnum = TaskLevelEnum;
  formIsVisible: boolean = false;
  warningVisibility: boolean = false;
  warning = 'please write task';
  initialId: number = 0;

  constructor() {}

  ngOnInit(): void {}

  showForm() {
    this.formIsVisible = true;
  }

  addTask(name: string, level: string) {
    if (!name) {
      this.warningVisibility = true;
      return;
    }
    this.tasks.push({
      taskName: name,
      taskLevel: level,
      taskId: this.initialId,
      taskStatus: this.taskStatus.todo,
    });
    this.formIsVisible = false;
    this.warningVisibility = false;
    this.initialId++;
  }
}
