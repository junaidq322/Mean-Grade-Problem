import { Component, ElementRef, ViewChild } from '@angular/core';
import { ProblemServiceService } from '../problem-service.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-problem',
  templateUrl: './add-problem.component.html',
  styleUrls: ['./add-problem.component.css']
})
export class AddProblemComponent {
  @ViewChild('formElement') formElement!: ElementRef;
  inputUnit: string = '';
  targetUnit: string = '';
  inputNumericalValue: number = 0;
  authoritativeAnswer: number = 0;

  constructor(private problemService: ProblemServiceService,private toastr: ToastrService) {}
  onSubmit() {
    const newProblem = {
      inputUnit: this.inputUnit,
      targetUnit: this.targetUnit,
      inputNumericalValue: this.inputNumericalValue,
      authoritativeAnswer: this.authoritativeAnswer
    };

    this.problemService.addUnitConversionProblem(newProblem).subscribe(
      response => {
        this.toastr.success("Problem Added Successfuly",'Success');
        console.log(response,"The response is");
        this.formElement.nativeElement.reset();
      }  ,
      error => console.log(error)
    );
  }
}
