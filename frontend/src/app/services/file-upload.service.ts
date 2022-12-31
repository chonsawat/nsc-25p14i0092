import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(
    private httpClient: HttpClient,
  ) { }
  
  public uploadfile(file: File) {
    let formParams = new FormData();
    formParams.append('file', file)
    return this.httpClient.post('http://localhost:3000/uploadFile', formParams)
  }
  
}