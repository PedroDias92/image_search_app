import { Component } from '@angular/core';
import {ImagesService} from './images.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private imagesService: ImagesService){}

  title = 'Angular-image-search';
  searchTerm = '';
  images=[];
  loading=false;

  onSubmit() {
    this.loading = true;
    //this.images = [];
    this.imagesService.search(this.searchTerm)
      .subscribe((result: any) => {
        this.images = result.results;
        this.loading = false;
        console.log(result);
      });
  }
}
