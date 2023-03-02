import main from '../database/connection';
import Kitten from '../database/schema';

const getUsers =  (req,res)=>{
    main().catch((error)=> console.log(error));
    const {method,body} = req;

    switch(method){
        case 'GET':
            Kitten.find({}).then((users)=>{
                res.status(200).json({method:'GET',endpoint:'users',data:users});
            })
            break;
        case 'POST':
            if(!body.name){
                res.status(400).json("Data Not Found")
            }else{
                const create = new Kitten({name:body.name});
                create.save().then(()=>{
                    res.status(200).json(create);
                }).catch((error)=>{
                    res.status(500).json(error);
                })
            }
            
            //res.status(200).json({method:'POST',endpoint:'users',body:body});
            break;
        default:
            res.setHeader('Only_Allow',['GET','POST']);
            res.status(200).json(`Method ${method} Not Allowed`);
            break;
    }
   
   
   
   


    // res.status(200).json([{
    //     id:1,
    //     name:'Lahiru'
    // },{
    //     id:2,
    //     name:'Sadaruwan'
    // }])
}

export default getUsers;