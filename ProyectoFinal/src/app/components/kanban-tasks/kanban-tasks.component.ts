import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import{ ITask, Levels} from '../../models/interfaces/Task.interface'

@Component({
  selector: 'app-kanban-tasks',
  templateUrl: './kanban-tasks.component.html',
  styleUrls: ['./kanban-tasks.component.scss'],
})
export class KanbanTasksComponent {

  todoTask: ITask[] = [
    {
      title: 'Animaciones Angualar',
      description: 'Animaciones',
      completed: false,
      level: Levels.Info
    },
    {
      title: 'Aprender comandos CLI',
      description: 'CLI',
      completed: false,
      level: Levels.Urgent
    },
    {
      title: 'Build',
      description: 'Build',
      completed: false,
      level: Levels.Blocking
    }
  ]

  doneTask: ITask[] = [
    {
      title: 'Configuracion IDE',
      description: 'Visual Studio Code',
      completed: true,
      level: Levels.Blocking
    },
    {
      title: 'Aprender lenguaje',
      description: 'Angular',
      completed: true,
      level: Levels.Urgent
    },
    {
      title: 'Deploy',
      description: 'Build',
      completed: true,
      level: Levels.Blocking
    },
    {
      title: 'Proyecto Inicial',
      description: 'Angular',
      completed: true,
      level: Levels.Urgent
    }
  ]

  drop(event: CdkDragDrop<ITask[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {

      event.previousContainer.data[event.previousIndex].completed = !event.previousContainer.data[event.previousIndex].completed

      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }
}
