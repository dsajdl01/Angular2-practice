import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {ToasterModule, ToasterService, ToasterConfig} from 'angular2-toaster';

import { Hero } from '../hero';
import { HeroService } from '../services/hero.service';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

@Component({
  selector: 'my-heroes',
   templateUrl: './heroes.component.html',
   styleUrls: [ './heroes.component.css' ]

})

export class HeroesComponent implements OnInit {

    @ViewChild('addHeroModal')
    modal: ModalComponent;
    heroes: Hero[] = [];
    selectedHero: Hero;
    half: number = 0;
    private toasterService: ToasterService;

    public config1 : ToasterConfig = new ToasterConfig({
        positionClass: 'toast-top-right',
        timeout: 500
    });
    public config2 : ToasterConfig = new ToasterConfig({
        positionClass: 'toast-top-right',
        timeout: 2500
    });
    public config3 : ToasterConfig = new ToasterConfig({
        positionClass: 'toast-top-right',
        timeout: 1000
    });
    public config4 : ToasterConfig = new ToasterConfig({
        positionClass: 'toast-top-right',
        timeout: 2000
    });

    constructor(private heroService: HeroService,
                private router: Router,
                private toasterSer: ToasterService) {

                this.toasterService = toasterSer;
    }

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => {
          this.heroes = heroes;
          this.half = Math.ceil(heroes.length / 2);
        });
      }

    ngOnInit(): void {
        this.getHeroes();
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }

    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.heroService.create(name)
          .then(hero => {
            this.heroes.push(hero);
            this.selectedHero = null;
          });
    }

    delete(hero: Hero): void {
        this.heroService
          .delete(hero.id)
          .then(() => {
            this.heroes = this.heroes.filter(h => h !== hero);
            if (this.selectedHero === hero) { this.selectedHero = null; }
          });
    }

    saveHero(name: string) {
        console.log('SAVEHERO');
        this.add(name);
        this.modal.close();
    }

    openDialog() {
        console.log('OPEN');
        this.modal.open();
    }

    dismiss() {
        console.log('DISMISS');
        this.modal.dismiss();
    }


    popToast() {
       const toast: any = {
         type: 'info',
         title: 'INFO Title',
         body: 'Here is a Toast Body'
       };

       this.toasterService.pop(toast);
    }

    popSuccessToast() {
        const toast: any  = {
                 type: 'success',
                 limit: 5,
                 title: 'SUCCESS Title',
                 body: 'Here is a Toast Body'
        };
        this.toasterService.pop(toast);
     }

    popWarningToast() {
         const toast: any = {
              type: 'warning',
              title: 'WARNING Title',
              body: 'Here is a Toast Body',
              showCloseButton: true
         };

         this.toasterService.pop(toast);
    }

    popErrorToast() {
         const toast: any = {
              type: 'error',
              title: 'ERROR Title',
              body: 'Here is a Toast Body',
              showCloseButton: true,
              closeHtml: '<button>Close</button>'
         };
         this.toasterService.pop(toast);
    }
}
