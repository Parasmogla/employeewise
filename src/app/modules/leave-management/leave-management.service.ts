import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LeaveManagementService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get('http://dummy.restapiexample.com/api/v1/employees');
  }
}
