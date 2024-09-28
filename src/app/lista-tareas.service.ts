import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListaTareasService {
  private localStorageKey = 'listaTareas';

  getTareas(): string[] {
    return JSON.parse(localStorage.getItem(this.localStorageKey) as string) || [];
  }

  agregarTareas(tarea : string){
    const listaTareas = this.getTareas();
    listaTareas.push(tarea);
    localStorage.setItem(this.localStorageKey, JSON.stringify(listaTareas))
  }

  eliminarTarea(index : number){
    const listaTareas = this.getTareas();
    listaTareas.splice(index, 1);
    localStorage.setItem(this.localStorageKey, JSON.stringify(listaTareas));
  }
}
