export interface NewTaskInterface {
  taskName: string;
  taskId: number;
  taskLevel: string;
  taskStatus: TaskStatusEnum;
}

export enum TaskLevelEnum {
  easy = 'Easy',
  medium = 'Medium',
  hard = 'Hard',
}

export enum TaskStatusEnum {
  todo = 'To Do',
  inProgress = 'In Progress',
  done = 'Done',
}
