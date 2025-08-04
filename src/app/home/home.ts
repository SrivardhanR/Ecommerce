import { Component } from '@angular/core';
import { MainCarousel } from './main-carousel/main-carousel';
import { RouterLink } from '@angular/router';
import { ProductSlider } from './product-slider/product-slider';
import { menJeans } from '../../Data/Men/men_jeans';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [MainCarousel , RouterLink, ProductSlider],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  menJeans:any;

  ngOnInit(){
    this.menJeans = menJeans.slice(0,5);
  }
}
