import { Component } from '@angular/core';

@Component({
  selector: 'app-matematica',
  imports: [],
  templateUrl: './matematica.html',
  styleUrl: './matematica.css',
})
export class Matematica {
  redirectToCourse() {
    window.location.href = 'https://go.hotmart.com/T105543899T?ap=3d33';
  }

  redirectToFGV() {
    window.location.href = 'https://go.hotmart.com/P105543892O';
  }
}
