
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
        },
        
        add:function(index){
            console.log(index);
            return this.itemslist[index].count=this.itemslist[index].count+1;
        },
        re:function(index){
            return this.itemslist[index].count=this.itemslist[index].count-1;
        }
    },
    computed:{
        filterSearch(){
            return this.items.filter(searchResult => searchResult.name.match(this.searchKeyword));
        }
    }
})


let now = new Vue({
    el:'#now',
    data() {
        return {
            customer:{
                name:'',
                email:'',
                phone:'',
                address:''
            },
            text:{
                name:'',
                email:'',
                phone:'',
                address:''
            }
        }
    },
    methods:{
        
        blurname:function(){
            let t = this;
            if(t.customer.name==''){
                t.text.name='請輸入姓名';
            }else{
                t.text.name='';
            }
        },
        bluremail:function(){
            let t = this;
            let a =t.customer.email;
            let ok = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
            if(a==''){
                t.text.email='請輸入信箱';
            }else if(a.search(ok)!= -1){
                t.text.email='';
            }else{
                t.text.email='信箱格式錯誤!';
            }
            
        },
        blurphone:function(){
            let t = this;
            let ok = /^[0-9]{10}$/g;
            let a=t.customer.phone;
            if(a==''){
                t.text.phone='請輸入手機';
            }else if (a.search(ok)!= -1){
                t.text.phone='';
                }else{
                    t.text.phone='手機格是錯誤!';
                }
            },
        
        bluraddress:function(){
            let t = this;
            if(t.customer.address==''){
                t.text.address='請輸入地址';
            }else{
                t.text.address='';
            }
        },
    }
})