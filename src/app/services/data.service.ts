import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public baseUrl = "http://localhost:7188";

  constructor(private http: HttpClient) { }

  public authentiate(data: any) {
    return this.http.post(`${this.baseUrl}/v1/login`, data);
  }

  public getMonthlySalesCharData() {
    return this.http.get(`${this.baseUrl}/v1/reports/ms`);
  }

  public getOrders() {
    return this.http.get(`${this.baseUrl}/v1/orders`);
  }

  public getOrder(order: string) {
    return this.http.get(`${this.baseUrl}/v1/orders/${order}`)
  }
}
