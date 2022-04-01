export class SortTable{
    constructor(){
        this.cidx = undefined;
        this.$table = undefined;
        this.$tbody = undefined;
        this.$$tr = undefined;
    }
    /* METHOD */
    onClick(target){
        this.cidx = target.cellIndex;
        this.$table = this.get_table(target);
        this.$tbody = this.$table.getElementsByTagName('TBODY')[0];
        this.$$tr = this.$tbody.children;
        const type = target.dataset.sort;

        for(let i=0; i<this.$$tr.length; i++){
            this.sorting(type);
        }
    }//onClick

    get_table(target){
        let $table = target;
        while($table.tagName !== "TABLE"){$table = $table.parentElement;}
        return $table;
    }//get_table

    sorting(type){
        let predi;
        for(let k=0; k<this.$$tr.length - 1; k++){
            const $curr = this.$$tr[k].children[this.cidx];
            const $next = this.$$tr[k+1].children[this.cidx];
            
            switch(type){
                case "str" :
                    predi = $curr.innerText.toLowerCase() > $next.innerText.toLowerCase();
                    break;
                case "num" :
                default :
                    predi = Number($curr.innerText) > Number($next.innerText);
                    break;
            }//switch

            if(predi){
                this.$tbody.insertBefore(this.$$tr[k], this.$$tr[k+1].nextElementSibling);
            }//if
        }//for
    }//sorting
}//SortTable