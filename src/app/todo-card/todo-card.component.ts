import { Component, Input, OnInit } from '@angular/core';
import {
  NewTaskInterface,
  TaskLevelEnum,
  TaskStatusEnum,
} from '../types/todo.model';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss'],
})
export class TodoCardComponent implements OnInit {
  @Input() tasks!: NewTaskInterface[];
  @Input() taskStatus = TaskStatusEnum;

  taskStatusArr = [
    TaskStatusEnum.todo,
    TaskStatusEnum.inProgress,
    TaskStatusEnum.done,
  ];
  placeholderText: string = 'this list is empty';

  constructor() {}

  ngOnInit(): void {
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter((element) => element.taskId !== id);
    console.log(this.tasks, 'bla');
  }

  moveTaskForvard(id: number) {
    const element: any = this.tasks.find((element) => element.taskId === id);
    element.taskStatus === this.taskStatus.todo
      ? (element.taskStatus = this.taskStatus.inProgress)
      : (element.taskStatus = this.taskStatus.done);
  }

  moveTaskBackward(id: number) {
    const element: any = this.tasks.find((element) => element.taskId === id);
    element.taskStatus === this.taskStatus.inProgress
      ? (element.taskStatus = this.taskStatus.todo)
      : (element.taskStatus = this.taskStatus.inProgress);
  }

  amountByStatus(status: TaskStatusEnum): boolean {
    const sortedArr = this.tasks.filter(element => element.taskStatus === status);
    return Boolean(sortedArr.length);
  }

  bedgeStyles(level: string) {
    return {
      'badge-easy': level === TaskLevelEnum.easy,
      'badge-medium': level === TaskLevelEnum.medium,
      'badge-hard': level === TaskLevelEnum.hard,
    };
  }
}
