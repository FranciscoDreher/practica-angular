import { Component } from '@angular/core';
import { CategoriesService } from './categories.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practica-angular';
  categories: any[] = [];

  constructor(protected categoriesService: CategoriesService) {}

  ngOnInit() {
    this.categoriesService.getCategories()
    .subscribe(
      (data: Object[]) => {
        this.categories = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
