import { Component, OnInit } from '@angular/core';
import { NglCoreService } from 'projects/ngl-core/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public title = 'mgr-preview';
  public baseUrl = 'https://httpbin.org/';

  constructor(public nglCoreService: NglCoreService) {}

  ngOnInit(): void {
    this.get();
    this.post();
    this.delete();
    this.put();
  }

  get(): void {
    this.nglCoreService.get(`${this.baseUrl}get`)
      .subscribe(res => {
        console.log('Resposta do get: ', res);
      }
    );
  }

  post(): void {
    this.nglCoreService.post(`${this.baseUrl}post`, 'post')
      .subscribe(res => {
          console.log('Resposta do post: ', res);
      }
    );
  }

  delete() {
    this.nglCoreService.delete(`${this.baseUrl}delete`)
      .subscribe(res => {
        console.log('Resposta do delete: ', res);
      }
    );
  }

  put(): void {
    this.nglCoreService.put(`${this.baseUrl}put`, 'Testando')
      .subscribe(res => {
        console.log('Resposta do put: ', res);
      }
    );
  }
}
