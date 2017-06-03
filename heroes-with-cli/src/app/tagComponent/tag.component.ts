/**
 * Created by david on 02/06/17.
 */
import {Component, OnInit} from '@angular/core';
import {TagService} from '../services/tag.service';
import {Tag} from "../Tag";

@Component({
  selector: 'tag',
  template: `<br />
            <h2>Tags:</h2>
            <br />

           <tag-input [(ngModel)]='tags' [identifyBy]="'id'" [displayBy]="'name'"
                       placeholder="Add New Tag ..."
                       [editable]='true'
                        dragZone = 'tag'
                       (onRemove)="onItemRemoved($event)"
                       (onAdd)="onItemAdded($event)">
            </tag-input>
  <!--             <tag-input [ngModel]='tags' [modelAsStrings]="true" [identifyBy]="'id'" [displayBy]="'name'"
                       placeholder="Add New Tag ..."
                       (onRemove)="onItemRemoved($event)"
                       (onAdd)="onItemAdded($event)" #input>
              <template let-item="item" let-index="index">
                  <span>
                    {{item.name}}
                  </span>
                <delete-icon (click)="input.removeItem(item, index)"></delete-icon>
              </template>
            </tag-input>-->
            `
})

export class TagComponent implements OnInit {

  tags: Tag[] = [];

  constructor(private tagService: TagService) {}

  ngOnInit(): void {
    this.getAllTags();
  }

  getAllTags(): void {
    this.tagService.getAllTags().then(tags => {
      this.tags = tags;
      console.log(tags);
    });
  }

  onItemAdded(obj: any): void {
    const tagName = obj.name.trim();
    if (!tagName) { return; }
    this.tagService.addNewTag(tagName).then(tag => {
      this.tags.splice(this.tags.length - 1, 1);
      this.tags.push(tag);
    });
  }

  onItemRemoved(tag: Tag): void {
    if (!tag.id) { return; }
    this.tagService
      .delete(tag.id)
      .then(() => {
        this.tags = this.tags.filter(h => h !== tag);
      });
  }
}
