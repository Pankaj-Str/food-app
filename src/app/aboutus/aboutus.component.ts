import { Component, OnInit } from '@angular/core';
import { NgbAccordionConfig, NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent{

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

}
