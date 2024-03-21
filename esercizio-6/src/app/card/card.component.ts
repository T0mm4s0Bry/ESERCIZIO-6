import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  premi(index:number){
    var Player = this.player[index];
    window.open(Player.link);
  }
player = [
  {posizione : '1', nickname : 'soaz', team:'fnatic', immagine:'https://media.trackingthepros.com/profile/p145.png', ruolo:'top lane', eta:'30', nazionalita:'fr', link:''},
  {posizione : '2', nickname : 'jankos', team:'h2k', immagine:'ts_gamepedia_en/images/c/c8/G2_Jankos_2020_WC.png/revision/latest/scale-to-width-down/250?cb=20201003064135', ruolo:'jungle', eta:'28', nazionalita:'pl', link:''},
  {posizione : '3', nickname : 'powerofevil', team:'misfits gaming', immagine:'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/2/2f/IMT_PowerOfEvil_2022_Split_2.png/revision/latest?cb=20220716183355', ruolo:'mid lane', eta:'26', nazionalita:'de', link:''},
  {posizione : '4', nickname : 'rekkles', team:'fnatic', immagine:'', ruolo:'adc', eta:'27', nazionalita:'se', link:''},
  {posizione : '5', nickname : 'ignar', team:'misfits gaming', immagine:'', ruolo:'support', eta:'27', nazionalita:'kr', link:''},
  {posizione : '6', nickname : 'expect', team:'G2 esport', immagine:'', ruolo:'top laner', eta:'28', nazionalita:'kr', link:''},
  {posizione : '7', nickname : 'trick', team:'G2 esport', immagine:'', ruolo:'jungle', eta:'28', nazionalita:'kr', link:''},
  {posizione : '8', nickname : 'perkz', team:'G2 esport', immagine:'', ruolo:'mid laner', eta:'25', nazionalita:'hr', link:''},
  {posizione : '9', nickname : 'zven', team:'G2 esport', immagine:'', ruolo:'adc', eta:'26', nazionalita:'dk', link:''},
  {posizione : '10', nickname : 'mithy', team:'G2 esport', immagine:'', ruolo:'support', eta:'29', nazionalita:'es', link:''},
]
}
