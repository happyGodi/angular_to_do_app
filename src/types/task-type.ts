export interface Task {
  _id: string;
  taskName: string;
  date: Date;
  isDone: boolean;
  user: string;
}
