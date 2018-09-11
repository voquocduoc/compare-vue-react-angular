import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.sass']
})
export class FaqComponent implements OnInit {
  faqs: Array<any>;

  constructor(private http:Http) {
    this.http.get('https://jsonplaceholder.typicode.com/posts')
    .map(response => response.json())
    .subscribe(res => this.faqs = res);
  }

  ngOnInit() {
  }

}
