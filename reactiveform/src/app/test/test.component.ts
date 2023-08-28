import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  userName: string=''; 
  formdata: FormGroup = new FormGroup({
    userName: new FormControl("MCA II")
  });

  ngOnInit() { 
    this.formdata = new FormGroup({ 
      userName: new FormControl("MCA II")
    }); 
  } 

  onClickSubmit(data: { userName: string }) { 
    this.userName = data.userName;
  }
}
