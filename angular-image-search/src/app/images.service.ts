import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private http: HttpClient) { }
  API_URL = "https://api.unsplash.com/search/photos/?client_id=7a2b57ffe1e87642ab46b8bf932be06f66f16dac9b6e6a1d9d68aeea0ffd1e73"

  search(searchTerm){
    const url = `${this.API_URL}&query=${searchTerm}`
    return this.http.get(url)
  }
}
