import { Select} from "antd";
import React,{useState} from "react";


  

  const data = [
    {name:"Shirt",price : 900},
    {name:"Hoodie",price : 2000},
    {name:"Zipper",price : 1900},
    {name:"Polos",price: 1200}
]


function Sort(){
    const [showObject,setShowObject] = useState(data)

    const compare = (a,b,order) => {
        if(a > b){
            return order  ? 1 : -1;
        }
        if(a<b){
            return order ? -1 : 1;
        }
        return 0;
    }

    const handleChange = (value) => {
        if(value == 'none'){
           setShowObject([...data]) 
        }
        else{
            let type,ascending
            switch(value){
                case 'ascending' : type= true; ascending=true;break;
                case 'descending' : type= true; ascending=false;break;
                case 'high' : type= false; ascending=true;break;
                case 'low' : type= false; ascending=false;break;
            }
            let current = [...data]
            current.sort((a,b) => type ? 
                compare(a.name,b.name,ascending):
                compare(a.price,b.price,ascending)
                )
            setShowObject([...current])
        }
    }
    return(
        <div>
            <select onChange={(e)=> handleChange(e.target.value)}>
                <option value="none">Default</option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
                <option value="high">Low to High</option>
                <option value="low">High to Low</option>
            </select>
            {showObject.map((element) => <p key={element.name}>{element.name}{element.price}</p>)}
        </div>
    )
}

export default Sort;
