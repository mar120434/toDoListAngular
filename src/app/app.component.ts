import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'toDoListAngular';
  itemList = [
    { name: 'Hit the gym', checked: false, id: 1 },
    { name: 'Pay bills', checked: true, id: 2 },
    { name: 'Meet George', checked: false, id: 3 },
    { name: 'Buy eggs', checked: false, id: 4 },
    { name: 'Read a book', checked: false, id: 5 },
    { name: 'Organize office', checked: false, id: 6 }
  ];
  newItem = { name: "" };

  toggleItem(itemToggle: any){
    itemToggle.checked = !itemToggle.checked;
  }

  removeItem(itemRemove: any){
    this.itemList = this.itemList.filter(t => t.id !== itemRemove.id);
  }

  addItem(itemNewName: string){
    let newId = 0;
    for (let idx in this.itemList) {
      if (this.itemList[idx].id >= newId) {
        newId += this.itemList[idx].id;
      }
    }
    if (itemNewName !== "") {
      this.itemList.push({ name: itemNewName, checked: false, id: newId });
    }
    this.newItem.name = "";
  }
}
