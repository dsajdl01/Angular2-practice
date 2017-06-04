/**
 * Created by david on 04/06/17.
 */
import { Component, OnInit } from '@angular/core';
import {TagService} from '../services/tag.service';
import {Tag} from "../Tag"

@Component({
      moduleId: module.id.toString(),
      selector: 'drag-drop',
      template: `
            <h2>Drag and Drop</h2>
            <h3>Transfer Data via Drag Drop</h3>
            <div class="row">
                  <div class="col-sm-3">
                  <div class="panel panel-default" droppable (onDrop)="onTagContainerDrop($event)">
                       <div class="panel-heading">Available Tags</div>
                       <div class="panel-body">
                          <li draggable *ngFor="let item of availableTags" [dragData]="item" class="list-group-item">{{item.name}}</li>
                       </div>
                  </div>
                  </div>

                  <div class="col-sm-3">
                      <div class="panel panel-default" droppable (onDrop)="onCatContainerDrop($event)">
                          <div class="panel-heading">Category</div>
                          <div class="panel-body">
                               <li draggable *ngFor="let item of droppedItems" [dragData]="item" class="list-group-item">{{item.name}}</li>
                          </div>
                      </div>
                  </div>
            </div>
           `,
})

export class DragDropComponent  implements OnInit {


    availableTags: Tag[] = [];
    droppedItems: Tag[] = [];

    constructor(private tagService: TagService) { }

    ngOnInit(): void {
        this.getAllTags();
    }

    getAllTags(): void {
        this.tagService.getAllTags().then(tags => {
           this.availableTags = tags;
        });
    }

    onCatContainerDrop(e: any) {
        const tag: Tag = e.dragData;
        if (this.tagExist(this.droppedItems, tag.id) ){
            return;
        }
        this.removeTagFromArray(this.availableTags, tag);
        this.droppedItems.push(tag);
        this.droppedItems.sort(this.compareById);
    };

    onTagContainerDrop(e: any) {
        const tag: Tag = e.dragData;
        if (this.tagExist(this.availableTags, tag.id) ){
            return;
        }
        this.removeTagFromArray(this.droppedItems, tag);
        this.availableTags.push(tag);
        this.availableTags.sort(this.compareById);
    };

    private compareById(a: Tag, b: Tag) {
      if (a.id < b.id) {
        return -1;
      }
      if (a.id > b.id) {
        return 1;
      }
      return 0;
    };

    private tagExist(array: Tag[], id: number){
      return array.some(t => t.id === id);
    };

    private removeTagFromArray(arrayOfTags: Tag[], tag: Tag) {
        for(var i = 0; i < arrayOfTags.length; i++) {
            if(arrayOfTags[i].id === tag.id) {
                arrayOfTags.splice(i, 1);
                return;
            }
        }
    };
}
