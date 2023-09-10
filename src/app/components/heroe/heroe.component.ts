import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { HeroesService, heroe } from '../../servicios/heroes.service'

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {

  heroe:any={};

  heroes:heroe[] = [];

 
  constructor( private activatedRoute: ActivatedRoute,
                private yeri: HeroesService,
                private router:Router){
    this.heroes = this.yeri.getHeroes();
    this.activatedRoute.params.subscribe( params => { 
      console.log(params)
      this.heroe = this.heroes[params["id"]]
    })
    
  }
  devolver(){
    this.router.navigate( ['/heroes'] )
  }
}
