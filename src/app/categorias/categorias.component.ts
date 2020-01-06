import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './../categories.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

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
