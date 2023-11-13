import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  showForm = true;


  form: FormGroup = this.fb.group({
    name: [''],
    eamil: [''],
    Company: [''],
    contacts: this.fb.array([
      this.fb.group({
        number: [''],
        type: [''],
        description: [''],
      })
    ]),

  });


  get contacts() {
    return this.form.get('contacts') as FormArray;
  }

  constructor(private fb: FormBuilder, titleService: Title) {

  };
  addContact() {
    this.contacts.push(
      this.fb.group({
        number: [''],
        type: [''],
        description: [''],
      }));
  }
  deleteContact(i: number) {
    this.contacts.removeAt(i);
  }

  onSubmit() {
    alert(JSON.stringify(this.form.value, null, 2))
  }

}
// constructor(private titleService: Title, fb: FormBuilder) {
//   this.titleService.setTitle('Supriya Bandal - Contact');
// }

