import { Component } from '@angular/core';

@Component({
  selector: 'app-l-java',
  imports: [],
  templateUrl: './l-java.html',
  styleUrl: './l-java.css',
})
export class LJava {
  downloadAndRedirect() {
    // Cria um link temporário para forçar o download do PDF
    const link = document.createElement('a');
    link.href = 'res/batismo_java/pe-ljava.pdf'; // Caminho corrigido para o asset
    link.download = 'pe-ljava.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Redireciona o usuário para o curso na Hotmart
    window.location.href = 'https://go.hotmart.com/W104694083U?ap=c0d6';
  }
}
