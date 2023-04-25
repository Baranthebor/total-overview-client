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

    companyName : string;
    company? : Company;
    companies : Company[] = [];

    constructor(private companyService : CompanyService) {
//           this.company =  { Id: 0, Name: '' };
          this.companyName = '';
    };

   ngOnInit(): void {
     this.companyService.getCompanies().subscribe(companies => {
        this.companies = companies;
     });
   }

     onSelect(company : Company) {
        this.company = company;
        this.companyName = this.company.Name;
     }

     onSubmit() {
        if (this.company !== undefined) {
          this.company.Name = this.companyName;
           this.companyService.updateCompany(this.company).subscribe(company => {
              alert('Aktualisiert');
            });
           this.companyName = '';
        }
     }
}
