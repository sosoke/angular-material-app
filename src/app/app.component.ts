import { Component } from '@angular/core';
import { HeaderService } from './header/header.service';
import { CustomizerService } from './customizer/customizer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ HeaderService, CustomizerService ]
})
export class AppComponent {
  title = 'angular2 bootstrap4 material2 web';
}