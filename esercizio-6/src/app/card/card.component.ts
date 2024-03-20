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
player = [
  {posizione : '1', nickname : 'soaz', team:'fnatic', immagine:'https://media.trackingthepros.com/profile/p145.png', ruolo:'top lane', eta:'30', nazionalità:'francia', link:''},
  {posizione : '2', nickname : 'jankos', team:'h2k', immagine:'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/c/c8/G2_Jankos_2020_WC.png/revision/latest/scale-to-width-down/250?cb=20201003064135', ruolo:'jungle', età:'28', nazionalità:'polonia', link:''},
  {posizione : '3', nickname : 'powerofevil', team:'misfits gaming', immagine:'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/2/2f/IMT_PowerOfEvil_2022_Split_2.png/revision/latest?cb=20220716183355', ruolo:'mid lane', età:'26', nazionalità:'germania', link:''},
  {posizione : '4', nickname : 'rekkles', team:'fnatic', immagine:'', ruolo:'adc', età:'27', nazionalità:'svezia', link:''},
  {posizione : '5', nickname : 'ignar', team:'misfits gaming', immagine:'', ruolo:'support', età:'27', nazionalità:'sud corea', link:''},
  {posizione : '6', nickname : 'expect', team:'G2 esport', immagine:'', ruolo:'top laner', età:'28', nazionalità:'sud corea', link:''},
  {posizione : '7', nickname : 'trick', team:'G2 esport', immagine:'', ruolo:'jungle', età:'28', nazionalità:'sud corea', link:''},
  {posizione : '8', nickname : 'perkz', team:'G2 esport', immagine:'', ruolo:'mid laner', età:'25', nazionalità:'croatia', link:''},
  {posizione : '9', nickname : 'zven', team:'G2 esport', immagine:'', ruolo:'adc', età:'26', nazionalità:'danimarca', link:''},
  {posizione : '10', nickname : 'mithy', team:'G2 esport', immagine:'', ruolo:'support', età:'29', nazionalità:'spagna', link:''},
]
}
