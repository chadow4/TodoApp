import {Component, OnInit} from '@angular/core';
import {ITodo} from "../../interface/todo.interface";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  private todosState: ITodo[] = [];

  constructor() {
  }

  get todos(): ITodo[] {
    return this.todosState.filter(todo => !todo.isCompleted)
  }

  get todosCompleted(): ITodo[] {
    return this.todosState.filter(todo => todo.isCompleted)
  }

  get countTodos(): number {
    return this.todos.length;
  }

  get countTodosCompleted(): number {
    return this.todosCompleted.length;
  }

  get isHidden(): boolean {
    return this.countTodosCompleted == 0;
  }


  ngOnInit(): void {
    this.todosState = this.getFromLocalStorage();
  }

  public updateTodo(): void {
    console.clear();
    console.table(this.todosState);
    this.saveToLocalStorage();
  }

  public removeTodo(id: number): void {
    this.todosState = this.todosState.filter(todo => todo.id != id);
    console.clear();
    console.table(this.todosState);
    this.saveToLocalStorage();
  }

  public addTodo(event: Event): void {
    this.todosState.push({
      id: this.todosState.length,
      title: (event.target as HTMLInputElement).value,
      isCompleted: false
    });
    (event.target as HTMLInputElement).value = ""
    console.clear();
    console.table(this.todosState);
    this.saveToLocalStorage();
  }

  private saveToLocalStorage(): void {
    localStorage.setItem('todosState', JSON.stringify(this.todosState));
  }

  getFromLocalStorage(): any {
    const todosState = localStorage.getItem('todosState');
    if (todosState) {
      return JSON.parse(todosState);
    }
    return []
  }
}
