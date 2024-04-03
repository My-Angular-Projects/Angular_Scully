import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

declare var ng: any;

@Component({
  selector: 'scully-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated

})
export class PostsComponent implements OnInit {
  ngOnInit(): void {}

  constructor(private router: Router, private route: ActivatedRoute) {}
}
