




let dd = new Vue({
    el:'#product',
    data() {
        return {
          items:[
            {
                count:1,
                int:true,
                img:"./imgs/圓(二維).png",
                name:"圓(二維)",
                price:2

            },
            {
                count:1,
                int:true,
                img:"./imgs/矩形(二維).png",
                name:"矩形(二維)",
                price:2
            },
            {
                count:1,
                int:true,
                img:"./imgs/正方形(三維).png",
                name:"正方形(三維)",
                price:3
            },
            {
                count:1,
                int:true,
                img:"./imgs/圓柱(三維).png",
                name:"圓柱(三維)",
                price:3
            },
            {
                count:1,
                int:true,
                img:"./imgs/不知名.png",
                name:"不知名",
                price:5
            },
            {
                count:1,
                int:true,
                img:"./imgs/不知名A.png",
                name:"不知名A",
                price:5
            },
            {
                count:1,
                int:true,
                img:"./imgs/不知名B.png",
                name:"不知名B",
                price:5
            },
            {
                count:1,
                int:true,
                img:"./imgs/不知名C.png",
                name:"不知名C",
                price:5
            },
          ],
        
          itemslist:[ {
            /*count:null,
            int:null,
            img:"",
            name:"",
            price:""*/
        }], 
          searchKeyword:'',
          msg:'',
          x:'t'
        }
 
    },
    methods:{
        love:function(index) {
            console.log("有效果");
            console.log(this.items[index]);
            //this.items[index].push(this.itemslist[index]);
            this.itemslist.push(this.items[index]);
            console.log(this.itemslist[index]);
            
        },
        bye:function(index){
            this.itemslist.splice(index,1);
        },
        heart:function(index){
            console.log(index);
            let heart = this;
            console.log(heart.items[index].int);
            let b =heart.items[index].int;
            console.log(b);
            if (b==true){
            return this.items[index].int = false;
        }else{
            return this.items[index].int = true;
        }
            
            /*
            if(heart.x == 't'){
                console.log("124");
                heart.x = '';
            }else{
                console.log("125");
                heart.x ='t';
            }*/
        }
    },
    computed:{
        filterSearch(){
            return this.items.filter(searchResult => searchResult.name.match(this.searchKeyword));
        }
    }
})