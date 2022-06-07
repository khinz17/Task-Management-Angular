import { ITag } from "./tag-model";

export interface TaskModel {
  taskId: any;
  taskName: string;
  taskDescription: string;
  tags: ITag[];
  dateCreated: Date;
  status: string;
  dateModified?: Date;
  dateCompleted?: Date;
}