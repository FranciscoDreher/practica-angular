import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from './../categories.service';

@Component({
  selector: 'app-subcategorias',
  templateUrl: './subcategorias.component.html',
  styleUrls: ['./subcategorias.component.css']
})
export class SubcategoriasComponent implements OnInit {

  categoria: string;
  subcategorias: any[] = [];

  constructor(
    private ruta: ActivatedRoute,
    private categoriesService: CategoriesService
  ) {

  }

  ngOnInit() {
    this.ruta.params.subscribe(parametros => {
      this.categoriesService.getSubcategories(parametros['id'])
        .subscribe((data: Object[]) => {
          this.subcategorias = data['children_categories'];
          this.categoria = data['name'];
          console.log(this.subcategorias);
          console.log(this.categoria);
        },
          (error) => {
            console.log(error);
          }
        );
    });
    
  }

}
