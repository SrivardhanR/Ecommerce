import { Component } from '@angular/core';
import { mainCarouselData } from '../../../Data/mainCarouselData';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-carousel',
  imports: [RouterLink , CommonModule],
  templateUrl: './main-carousel.html',
  styleUrl: './main-carousel.scss'
})
export class MainCarousel {
  carouselData:any;
  currentSlide = 0;
  interval:any;

  ngOnInit(){
    this.carouselData = mainCarouselData;
    this.autoPlay();
  }

  autoPlay(){
    setInterval(() => {
      this.nextSlide();
    } , 4000)
  }

  nextSlide(){
    this.currentSlide = (this.currentSlide + 1) % this.carouselData.length;
  }
}
