import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProblemServiceService } from '../problem-service.service';

@Component({
  selector: 'app-grade-problem',
  templateUrl: './grade-problem.component.html',
  styleUrls: ['./grade-problem.component.css']
})
export class GradeProblemComponent {

  
  conversionForm: any = FormGroup;
  result: any;

  constructor(
    private formBuilder: FormBuilder,
    private problemService: ProblemServiceService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.conversionForm = this.formBuilder.group({
      inputUnit: ['', Validators.required],
      targetUnit: ['', Validators.required],
      inputNumericalValue: ['', Validators.required],
      studentResponse: ['', Validators.required]
    });
  }

  onSubmit() {
    this.problemService.gradeUnitConversionProblem(this.conversionForm.value)
      .subscribe(response => {
        this.result = response;
        this.toastr.success("Grade Generated Successfuly",'Success');
        console.log(response,"The response is");
      });
  }
}
