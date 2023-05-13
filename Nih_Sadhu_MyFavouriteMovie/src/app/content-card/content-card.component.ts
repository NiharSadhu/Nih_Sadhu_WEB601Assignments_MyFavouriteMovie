import { Component } from '@angular/core';
import { ContentList } from '../helper-files/content-list';


@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent  {
  contentList: ContentList;

  constructor() {
    this.contentList = new ContentList();
    this.contentList.addContent({
      id: 1,
      title: 'The Dark Knight',
      description: 'best of Batman',
      creator: 'Christopher Nolan',
      imgURL: 'https://images.hdqwalls.com/download/dark-knight-minimalism-g6-1440x900.jpg',
      type: 'Thriller, action',
      tags: ['movie, 2011']
    });
    this.contentList.addContent({
      id: 2,
      title: 'Inception',
      description: 'Mind Blowing',
      creator: 'Christopher Nolan',
      imgURL: 'http://mytinymind.com/wp-content/uploads/2017/06/incept-1536x864.jpeg',
      type: 'Thriller, Suspence',
      tags: ['movie, 2011']
    });
    this.contentList.addContent({
      id: 3,
      title: 'Avatar',
      description: 'Mankind is no more kind',
      creator: 'James Cameron',
      imgURL: 'https://cdn.shopify.com/s/files/1/1140/8354/articles/Avatar_Movie.jpg?v=1635265443&width=1500',
      type: 'Action, Thriller',
      tags: ['movie, 2012']
    });
  }
}
