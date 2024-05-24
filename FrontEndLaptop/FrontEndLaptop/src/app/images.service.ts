
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Images } from './images';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  //cartItems: any[] = [];

  
  private baseURL="http://localhost:8080/api/images";
  constructor(private httpClient:HttpClient) {}
  getImagesList():Observable<Images[]>
  {
    return this.httpClient.get<Images[]>(`${this.baseURL}`)
}
addImages(images:Images):Observable<Object>
{
  return this.httpClient.post(`${this.baseURL}`,images);
}
getImagesById(id:number):Observable<Images>
{
  return this.httpClient.get<Images>(`${this.baseURL}/${id}`);
}
updateImages(id:number,images:Images):Observable<Object>
{
  return this.httpClient.put(`${this.baseURL}/${id}`,images);
}
deleteImages(id:number):Observable<Object>
{
  return this.httpClient.delete(`${this.baseURL}/${id}`);
}
}


