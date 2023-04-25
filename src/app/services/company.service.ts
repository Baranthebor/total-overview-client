import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable';
import { Company } from 'src/app/model/Company'

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private apiUrl = 'http://localhost:8080/api/v1/companies';

  constructor(private httpClient : HttpClient) { }

  companies? : Observable<Company[]>

  getCompanies() : Observable<Company[]> {
    this.companies = this.httpClient.get<Company[]>(this.apiUrl);
    return this.companies;
  }
}
