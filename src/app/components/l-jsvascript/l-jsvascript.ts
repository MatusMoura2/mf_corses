import { Component } from '@angular/core';

@Component({
  selector: 'app-l-jsvascript',
  imports: [],
  templateUrl: './l-jsvascript.html',
  styleUrl: './l-jsvascript.css',
})
export class LJsvascript {
  downloadAndRedirect() {
    const link = document.createElement('a');
    link.href = 'res/javascript/pe-ljavascript.pdf'; // Caminho correto para o PDF do JavaScript
    link.download = 'pe-ljavascript.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Redireciona para o curso da Hotmart
    window.location.href = 'https://go.hotmart.com/F103374391Q';
  }
}
