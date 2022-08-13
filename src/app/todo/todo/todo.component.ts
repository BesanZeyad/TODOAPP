import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent  {
  
  list: any =[];
  addtask(item:string){
    this.list.push({id:this.list.length,name:item});
    
  
    

    }

    update(id:number){

      for(const i of this.list){
      
        let result = prompt("Edit Task Title", i.name);
        
        if (result !== null && result !== ""){
          i.name = result;
      }
    } 

}


   delet(id:number){
    let do_delete = confirm("Are you sure to delete the task?");
   
    if (do_delete){
     
     this.list.splice(id, 1);
    }
   }


}
