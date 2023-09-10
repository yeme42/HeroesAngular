import { Component, OnInit } from '@angular/core';
import { HeroesService, heroe } from 'src/app/servicios/heroes.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes:heroe[] = [];

  constructor( private yeri: HeroesService,
    private router:Router
    ){ 

  }
  ngOnInit(): void {
    this.heroes = this.yeri.getHeroes();
    
    console.log(this.heroes);
  }

  verHeroe( idx:number){
    this.router.navigate( ['/heroe',idx] )
  }


}
