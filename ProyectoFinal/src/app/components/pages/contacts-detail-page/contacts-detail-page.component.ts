import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IRandomContact } from 'src/app/models/interfaces/ramdomuser';
@Component({
  selector: 'app-contacts-detail-page',
  templateUrl: './contacts-detail-page.component.html',
  styleUrls: ['./contacts-detail-page.component.scss']
})
export class ContactsDetailPageComponent implements OnInit {

  id: any | undefined;
  contacto: IRandomContact | undefined;
  filtroPrevio: string ='';

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: any) => {
        if(params.id) {
          this.id = params.id
        }
      }
    )

    if(history.state.data) {
      this.contacto = history.state.data
    }

    if(history.state.filtro) {
      this.filtroPrevio = history.state.filtro
    }

  }

}
