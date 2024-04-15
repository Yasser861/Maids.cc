import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { result } from './maid';

@Injectable({
  providedIn: 'root'
})
export class MaidsService {

  constructor(private _HttpClient:HttpClient) { }
  getMaids(id:number):Observable<any>{
    return this._HttpClient.get(`https://reqres.in/api/users?page=${id}`);
  }
  getDetailedMaids(id:number):Observable<any>{
    return this._HttpClient.get(`https://reqres.in/api/users/${id}`);
  }
}
