import { Component, OnInit } from '@angular/core';
import { Content } from './helper-files/content-interface';
import { contentArray } from './helper-files/contentDb';
import { MovieService } from './services/movie.service';
import { MessagesService } from './services/messages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  contentItem: Content | undefined;
  userInputId: string = '';
  errorMessage: string | undefined;

  constructor(
    private movieService: MovieService,
    private messagesService: MessagesService
  ) {}

  ngOnInit(): void {
    this.retrieveContentItemById(1); // Replace '1' with the desired id
  }

  retrieveContentItemById(id: number): void {
    console.log('whatever you are trying to return from here');
    this.movieService.getContentById(id).subscribe((contentItem: Content | undefined) => {
      this.contentItem = contentItem;
    });
  }

  onRetrieveContent(): void {
    const id = parseInt(this.userInputId, 10);
    if (isNaN(id) || id < 1 || id > contentArray.length) {
      this.errorMessage = 'Invalid ID or ID out of range';
      return;
    }
    this.retrieveContentItemById(id);
  }
}
