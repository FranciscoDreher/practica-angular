import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(protected http: HttpClient) { }

  getCategories() {
    return this.http.get("https://api.mercadolibre.com/sites/MLA/categories");
  }

  getSubcategories(id: string) {
    return this.http.get("https://api.mercadolibre.com/categories/" + id);
  }
}
