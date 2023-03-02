export const fetchData = (id)=>{
    const data = [
        {id:1,name:'Lahiru',description:'First Post'},
        {id:2,name:'Sadaruwan',description:'Second Post'},
        {id:3,name:'Kumara',description:'Third Post'},
    ];

    if(id){
        return data.filter((post) => post.id == id);
    }

    return data;
}