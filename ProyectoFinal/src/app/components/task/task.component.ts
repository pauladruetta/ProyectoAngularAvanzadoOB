import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITask, Levels } from 'src/app/models/interfaces/Task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task: ITask = {
    title: 'Titulo por defecto',
    description: 'Descripción por defecto',
    level: Levels.Info,
    completed: false
  };

  @Output() delete: EventEmitter<ITask> = new EventEmitter<ITask>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteTask(){
    console.log("Eliminar Tarea", this.task?.title)
    this.delete.emit(this.task);
  }

}
