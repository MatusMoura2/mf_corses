import { Component } from '@angular/core';

@Component({
  selector: 'app-l-python',
  imports: [],
  templateUrl: './l-python.html',
  styleUrl: './l-python.css',
})
export class LPython {
  downloadAndRedirect() {
    const link = document.createElement('a');
    link.href = 'res/python/pe-lpython.pdf'; // Caminho correto para o PDF do Python
    link.download = 'pe-lpython.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Redireciona para o curso da Hotmart
    window.location.href = 'https://go.hotmart.com/A103374636C';
  }
}
