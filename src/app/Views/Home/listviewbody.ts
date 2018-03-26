import { Component,Input} from '@angular/core';
import { List } from '../../Classes/getList';


@Component({
    selector: 'listviewbody',
    template: `<div class="container">
        <h1>this is ListView</h1>
        
    </div>`

})

export class listviewbody {
    @Input('ListOfUsers') ListOfUsers : List[] = [];
}