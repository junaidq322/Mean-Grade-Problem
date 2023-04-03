import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProblemServiceService {

  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  addUnitConversionProblem(problemData:any): Observable<any> {
    const url = `${this.baseUrl}/addUnitConversionProblem`;
    return this.http.post(url, problemData);
  }

  gradeUnitConversionProblem(problemData:any): Observable<any> {
    const url = `${this.baseUrl}/gradeUnitConversionProblem`;
    return this.http.post(url, problemData);
  }
}
