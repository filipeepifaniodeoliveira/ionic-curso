import { MoovieProvider } from './../../providers/moovie/moovie';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MoovieProvider
  ]
})
export class FeedPage {

  public nome_usuario = 'Natura';

  public objeto_feed = {
    titulo: "Mario Balotelli",
    data: "November 5, 2018",
    descricao: "Estou criando um velocipe",
    qntd_likes: 12,
    qntd_comments: 4,
    time_comment: "11h ago"
  }

  public list_filmes = new Array<any>();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider: MoovieProvider
    ) {
  }

  ionViewDidLoad() {
    this.movieProvider.getLastestMovies().subscribe(
      data=> {
        const response = (data as any); 
        const objeto_retorno = response.results;
        this.list_filmes = objeto_retorno;
        console.log(objeto_retorno);
      }), error => {
        console.log(error);
      }
  }

}
