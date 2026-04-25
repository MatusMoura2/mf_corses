import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  template: `
    <div class="placeholder-content">
      <h2>Nossa Visão de Aprendizado</h2>
      <p>
        Sou um grande admirador do trabalho de Pierluigi Piazzi, principalmente pela forma como ele desmistifica a
        inteligência. Para mim, a inteligência não é um dom fixo ou um privilégio de poucos, mas sim uma habilidade que
        pode ser desenvolvida com disciplina, consistência e o método certo. Acredito que qualquer pessoa, com dedicação
        e
        direcionamento adequado, pode evoluir sua capacidade de aprender e resolver problemas.
      </p>
      <p>
        Com um bom curso e um roadmap bem estruturado, é possível aprender praticamente qualquer coisa. O segredo está
        em
        ter clareza dos próximos passos, prática constante e um ambiente que favoreça o aprendizado. Mais do que
        talento,
        o que realmente faz diferença é a constância — aprender todos os dias, mesmo que um pouco, é o que constrói
        resultados sólidos ao longo do tempo.
      </p>
      <p>Estude todos os dias, mesmo que um pouco.
        <a routerLink="/dashboard"> Acesse nosso site para mais informações.</a>
      </p>
      <p>
        Veja as nossas <a routerLink="/linguagens">linguagens</a> disponíveis para estudo.
      </p>
    </div>
  `
})
export class Home {}
