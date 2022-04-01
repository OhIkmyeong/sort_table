import { SortTable } from "./src/sort.js";

const SORT = new SortTable();

window.addEventListener('click',(e)=>{
    const target = e.target;
    if(target.dataset.sort){
        SORT.onClick(target);
    }
});