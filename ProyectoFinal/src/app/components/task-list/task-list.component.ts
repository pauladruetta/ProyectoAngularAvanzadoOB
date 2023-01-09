import { Component, OnInit } from '@angular/core';
import { ITask, Levels } from 'src/app/models/interfaces/Task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  tarea1: ITask = {
    title: 'Task 1',
    description: 'Description 1',
    completed: false,
    level:Levels.Info
  }

  tarea2: ITask = {
    title: 'Task 2',
    description: 'Description 2',
    completed: true,
    level:Levels.Urgent
  }

  constructor() { }

  ngOnInit(): void {
  }

  deleteTask(task: ITask) {
    alert(`Se procede a eliminar la tarea: ${task.title}`)
  }
}
