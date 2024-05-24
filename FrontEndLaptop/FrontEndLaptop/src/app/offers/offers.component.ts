import { Component } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent {

  enlargeImage(imgId: string) {
    const imgElement = document.getElementById(imgId) as HTMLImageElement;
    if (imgElement) {
      // Example logic to toggle image size
      if (imgElement.classList.contains('enlarged')) {
        imgElement.classList.remove('enlarged');
      } else {
        imgElement.classList.add('enlarged');
      }
    }
  }
}
