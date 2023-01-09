import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {

  miFormulario: FormGroup = new FormGroup({})

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario = this.formBuilder.group({
      title: '',
      description: '',
      completed: false,
      level: ''
    })

    this.miFormulario .valueChanges.subscribe(() => console.log(this.miFormulario));
  }
}
