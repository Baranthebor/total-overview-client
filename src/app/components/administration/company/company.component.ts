import { Component } from '@angular/core';
import { Company } from 'src/app/model/Company'
import { CompanyService } from 'src/app/services/company.service'
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-administration-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent {

    company : Company;
    companies : Company[] = [];

    constructor(private companyService : CompanyService) {
          this.company =  { Id: 0, Name: '' };
    };

   ngOnInit(): void {
     this.companyService.getCompanies().subscribe(companies => {
        this.companies = companies;
        //console.log(this.companies.length);
        //this.company = this.companies[0];
     });
   }

     onSelect(company : Company) {
        this.company = company;
      // if (!this.text) {
     //    alert("Please add a task!");
     //    return;
      // }

     }
}
