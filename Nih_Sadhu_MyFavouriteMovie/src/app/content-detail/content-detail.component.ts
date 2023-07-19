import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from '../services/content.service';
import { Content } from '../helper-files/content-interface'; // Replace with the actual path to your Content interface

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {
  content: Content | undefined;

  constructor(
    private route: ActivatedRoute,
    private contentService: ContentService
  ) {}

  ngOnInit(): void {
    // Get the content id from the URL and fetch the content from the server
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.contentService.getContentById(id).subscribe(content => {
      this.content = content;
      // Add a message using MessageService to display id and title of the content
      if (content) {
        this.messageService.add(`Content retrieved: ID - ${content.id}, Title - ${content.title}`);
      }
    });
  }
}
