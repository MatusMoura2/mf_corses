import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Curso {
  id: number;
  titulo: string;
  descricao: string;
  descricaoCompleta?: string;
  fotoCapa: string;
  link: string;
  categoria?: string;
}

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  cursos: Curso[] = [
    {
      id: 1,
      titulo: 'Batismo de Java',
      descricao: 'Introdução completa à programação em Java',
      descricaoCompleta: 'Aprenda os fundamentos de Java do zero, com práticas de mercado e projetos reais para consolidar seu conhecimento.',
      fotoCapa: '../res/batismo_java/batismo_java.png',
      link: 'https://go.hotmart.com/W104694083U?ap=c0d6',
      categoria: 'Backend'
    },
    {
      id: 2,
      titulo: 'JavaScript',
      descricao: 'Dominie a linguagem da Web',
      descricaoCompleta: 'Torne-se um expert em JavaScript moderno, trabalhando com ES6+, async/await e frameworks populares.',
      fotoCapa: '../res/javascript/javascript.jpg',
      link: 'https://go.hotmart.com/F103374391Q?dp=1',
      categoria: 'Frontend'
    },
    {
      id: 3,
      titulo: 'Linux',
      descricao: 'Domine o sistema operacional mais usado',
      descricaoCompleta: 'Aprenda administração de sistemas Linux, linha de comando e configurações avançadas para desenvolvimento.',
      fotoCapa: '../res/linux/Linux.jpg',
      link: 'https://go.hotmart.com/I104371033H?ap=0034',
      categoria: 'DevOps'
    },
    {
      id: 4,
      titulo: 'Python',
      descricao: 'A linguagem mais versátil da atualidade',
      descricaoCompleta: 'De iniciante a avançado em Python, cobrindo data science, automação, web scraping e desenvolvimento web.',
      fotoCapa: '../res/python/python.jpeg',
      link: 'https://go.hotmart.com/A103374636C',
      categoria: 'Backend'
    },
    {
      id: 5,
      titulo: 'Python Express',
      descricao: 'Aprenda Python de forma rápida',
      descricaoCompleta: 'Curso acelerado de Python para quem quer ir direto ao ponto e criar aplicações funcionais rapidamente.',
      fotoCapa: '../res/pythonexpress/pythonexpress.png',
      link: 'https://go.hotmart.com/Q103374756K',
      categoria: 'Backend'
    },
    {
      id: 6,
      titulo: 'O PODER DO N8N',
      descricao: 'Aprenda N8N de forma rápida e sem enrrolação',
      descricaoCompleta: '    Cansado de tutoriais genéricos e processos complicados que nunca funcionam? Este curso foi criado para quem quer uma solução prática e definitiva para a automação. \n    Vamos direto ao que interessa: a instalação única do n8n. Sem módulos e sem enrolação, você terá acesso a um método passo a passo para instalar a ferramenta de forma rápida e eficiente. Você vai aprender a subir o n8n no seu próprio ambiente, ganhando total controle sobre seus projetos de automação. \n    Com essa instalação bem-sucedida, você terá nas mãos a base sólida para criar seus próprios fluxos de trabalho, conectar centenas de aplicativos e serviços e, finalmente, colocar a automação para trabalhar por você. Prepare-se para otimizar seu tempo, reduzir erros e dar um salto de produtividade.',
      fotoCapa: '../res/nn/nn.jpg',
      link: 'https://go.hotmart.com/F105516101P',
      categoria: 'Outros'
    },
    {
      id: 7,
      titulo: 'Método Rei - Matemática',
      descricao: 'Matemática Básica e Raciocínio Lógico para concursos',
      descricaoCompleta: 'Um curso completo de Matemática Básica e Raciocínio Lógico voltados para concursos públicos. Com os assuntos que mais aparecem nos principais concursos, todos os módulos com PDF, aula teórica, aula de exercícios e um simulado incrível, em que seu rendimento é calculado na hora e a resolução também será em vídeo.\n\nAlém de tudo isso, são entregues bônus incríveis que custariam caro se fossem cobrados!\n\nO professor Reinaldo tem o método perfeito para a sua aprovação, começando do zero e terminando somente na posse!',
      fotoCapa: '../res/matematica/metodo rei matematica.png',
      link: 'https://go.hotmart.com/T105543899T?ap=3d33',
      categoria: 'Concursos'
    }
  ];
}
