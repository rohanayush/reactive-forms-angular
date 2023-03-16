import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss'],
})
export class HobbiesComponent {
  hobbiesForm: FormGroup | undefined;
  hobbyList:any[]=[];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.hobbiesForm = this.fb.group({
      name: '',
      hobbies: this.fb.array([]),
    });

    this.hobbiesForm.valueChanges.subscribe(
      (data:FormGroup)=>{
        console.log("values changed:",data);
        const formData = data as any;
        this.hobbyList = formData["hobbies"];

        console.log("hobby list", this.hobbyList)
      }
    );
  }

  get hobbies(): FormArray {
    return this.hobbiesForm?.get('hobbies') as FormArray;
  }

  newHobbies(): FormGroup {
    return this.fb.group({
      hobby: '',
      rating: 0,
    });
  }

  addhobbies() {
    this.hobbies.push(this.newHobbies());
  }

  removeHobby(i: number) {
    this.hobbies.removeAt(i);
  }

  onSubmit() {
    alert("Form submitted!")
  }
}
