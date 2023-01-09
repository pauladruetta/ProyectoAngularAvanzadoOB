import { Component, Input, OnInit } from '@angular/core';
import { IRandomContact, Results } from 'src/app/models/interfaces/ramdomuser';
import { RandomUserService } from 'src/app/services/random-user.service';

@Component({
  selector: 'app-random-user',
  templateUrl: './random-user.component.html',
  styleUrls: ['./random-user.component.scss']
})
export class RandomUserComponent implements OnInit {

  constructor() { }

  randomResult: Results | undefined
  @Input() randomContact: IRandomContact | undefined

  ngOnInit(): void {
  }

}
