import { User } from '../module/user';


export class UserService{
    uarr:User[]=[
        {/*id:111,*/
        uname:'pama',pwd:'pama@123'/*roll:'admin'*/},
        {/*id:123,*/uname:'swati',pwd:'swat@123'/*,roll:'user'*/},
        {/*id:333,*/uname:'reshu',pwd:'resh@123'/*,roll:'user'*/}
    ];

    getValidate(user1:User){
        for(let i=0;i<this.uarr.length;i++){
            if(this.uarr[i].uname==user1.uname && this.uarr[i].pwd==user1.pwd){
                console.log('valide user');
                break;
            }
            else{
                console.log('invalid user');
            }
        }
    }
}