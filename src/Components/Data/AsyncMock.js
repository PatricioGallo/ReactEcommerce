const productos = [{
    id:1,
    title:'primer elemento',
    description:'Descripcion del primer elemento',
    price: 2000,
    pictureUrl:'',
    categoria: 'categoria1'
    },{

        id:2,
        title:'segundo elemento',
        description:'Descripcion del segundo elemento',
        price: 3000,
        pictureUrl:'',
        categoria: 'categoria1'
    },{
        id:3,
        title:'tercer elemento',
        description:'tercer elemento',
        price: 10000,
        pictureUrl:'',
        categoria: 'categoria2'
    },{
      id:4,
      title:'cuarto elemento',
      description:'cuarto elemento',
      price: 10000,
      pictureUrl:'',
      categoria: 'categoria2'
  },{
    id:5,
    title:'quinto elemento',
    description:'quinto elemento',
    price: 10000,
    pictureUrl:'',
    categoria: 'categoria3'
},{
    id:6,
    title:'sexto elemento',
    description:'Sexto elemento',
    price: 10000,
    pictureUrl:'',
    categoria: 'categoria3'
},{
    id:7,
    title:'septimo elemento',
    description:'septimo elemento',
    price: 10000,
    pictureUrl:'',
    categoria: 'categoria3'
}];

 export const getItems = () => {  
            return new Promise ((resolve) => {
                setTimeout(()=>{
                    resolve (productos);
                },1000)
            })
      }

