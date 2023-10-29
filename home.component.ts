import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showIdeaForm = false;
  submittedIdeas: string[] = [];
  newIdea: string = '';

  toggleIdeaForm() {
    this.showIdeaForm = !this.showIdeaForm;
  }

  submitIdea() {
    if (this.newIdea.trim() !== '') {
      this.submittedIdeas.push(this.newIdea);
      this.newIdea = ''; // Clear the input field
      alert('Idea submitted!');
    }
  }
}
