import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs-compat';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(db: AngularFirestore) {
    this.foodList = db.collection('food').valueChanges();
    this.foodList.subscribe(data => {
      this.foodSelections = data;
    });
    this.watchList = db.collection('watch').valueChanges();
    this.watchList.subscribe(data => {
      this.watchSelections = data;
    });
    this.doList = db.collection('do').valueChanges();
    this.doList.subscribe(data => {
      this.doSelections = data;
    });
  }

  foodList: Observable < any[] > ;
  watchList: Observable < any[] > ;
  doList: Observable < any[] > ;
  foodSelections: any;
  watchSelections: any;
  doSelections: any;
  selection: any;

  //Booleans
  showFood = false;
  showWatch = false;
  showDo = false;

  choose(type) {
    let rng = 0;
    if (type === 'food') {
      if (this.showFood) {
        this.showFood = false;
        var element = document.getElementById("eat");
        element.classList.remove('selected');
        element.classList.add('eat');
      } else {
        rng = Math.floor(Math.random() * ((this.foodSelections.length-1) - 0 + 1)) + 0;
        this.selection = this.foodSelections[rng].name;
        this.showFood = true;
        var element = document.getElementById("eat");
        element.classList.add('selected');
        element.classList.remove('eat');
      }
    } else if (type === 'watch') {
      if (this.showWatch) {
        this.showWatch = false;
        var element = document.getElementById("watch");
        element.classList.remove('selected');
        element.classList.add('watch');
      } else {
        rng = Math.floor(Math.random() * ((this.watchSelections.length-1) - 0 + 1)) + 0;
        this.selection = this.watchSelections[rng].name;
        this.showWatch = true;
        var element = document.getElementById("watch");
        element.classList.add('selected');
        element.classList.remove('watch');
      }
    } else if (type === 'do') {
      if (this.showDo) {
        this.showDo = false;
        var element = document.getElementById("do");
        element.classList.remove('selected');
        element.classList.add('do');
      } else {
        rng = Math.floor(Math.random() * ((this.doSelections.length-1) - 0 + 1)) + 0;
        this.selection = this.doSelections[rng].name;
        this.showDo = true;
        var element = document.getElementById("do");
        element.classList.add('selected');
        element.classList.remove('do');
      }
    }
  }
}
