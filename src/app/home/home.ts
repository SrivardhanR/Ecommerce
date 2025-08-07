import { Component } from '@angular/core';
import { MainCarousel } from './main-carousel/main-carousel';
import { RouterLink } from '@angular/router';
import { ProductSlider } from './product-slider/product-slider';
import { menJeans } from '../../Data/Men/men_jeans';
import { CommonModule } from '@angular/common';
import { shoes } from '../../Data/shoes';
import { men_kurta } from '../../Data/Men/men_kurta';
// import { gouns } from '../../Data/Women/Gouns';

@Component({
  selector: 'app-home',
  imports: [MainCarousel , RouterLink, ProductSlider],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  menJeans:any;
  womenGouns:any;
  lehangaChowli:any;
  menKurta:any;
  shoes:any;

  ngOnInit(){
    this.menJeans = menJeans.slice(0,5);
    // this.womenGouns = gouns.slice(0,5);
    this.menKurta = men_kurta.slice(0,5);
    this.shoes = shoes.slice(0,5);
  }
}
