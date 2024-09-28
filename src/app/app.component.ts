import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListaTareasService } from './lista-tareas.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  private _listaTareasService = inject(ListaTareasService);

  localStorageTareas: string[] = [];
  newTarea: string = '';

  ngOnInit(): void {
    this.getTareas();
  }
  getTareas(){
    this. localStorageTareas = this._listaTareasService.getTareas();
  }

  agregarTarea() {
    if (this.newTarea.trim() == '') return;
    this._listaTareasService.agregarTareas(this.newTarea);
    this.newTarea = '';
    this.getTareas();
  }
  eliminarTarea(i: number) {
    this._listaTareasService.eliminarTarea(i);
    this.getTareas();
  }
}
