import { JsonPipe } from "@angular/common";

export class Init{

    load(){
        if(localStorage.getItem('todos')===null || localStorage.getItem('todos') == undefined){
            
            console.log('No Todos Found...Creating..');

            var todos=[
                {
                    text:'Pickup kids at school'
                },
                {
                    text:'Meeting at 4'
                },
                {
                    text:'Dinner'
                }
            ];
            localStorage.setItem('todos',JSON.stringify(todos));
            return;

        }
        else{
            console.log('found todos');
        }
    }
}