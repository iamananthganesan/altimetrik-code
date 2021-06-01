import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DoucmentService {

  constructor(private http: HttpClient) { }
  //GET DOCUMENT LISTS FROM JSON WEB SERVER
  getDocumentList(){
    const URL = 'http://localhost:3000/documents'
    return this.http.get(URL);
  }
}
