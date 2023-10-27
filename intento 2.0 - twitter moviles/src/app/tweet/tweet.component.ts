import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
})
export class TweetComponent {
  @Input() userHandle: string = 'prueba-username';
  @Input() userName: string = '@prueba';
  @Input() tweetContent: string = 'prueba contenido ultra hiper mega largo para ver si funciona el que se este estirando por favor papa dios son las 2 am';
  @Input() tweetTime: string = 'prueba tiempo';
  @Input() likes: number = 2; // Contador de Likes
  @Input() comments: number = 1; // Contador de Comentarios

  // Método para manejar el clic en "Likes"
  likeClicked() {
    // Agrega aquí la lógica para manejar el clic en "Likes"
    console.log('Clic en Likes');
  }

  // Método para manejar el clic en "Comentarios"
  commentClicked() {
    // Agrega aquí la lógica para manejar el clic en "Comentarios"
    console.log('Clic en Comentarios');
  }
}
