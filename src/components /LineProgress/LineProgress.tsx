import React, {FC} from "react";
import {ILineProgressItem} from "../../types";

interface ILineProgress{
    data: ILineProgressItem[]
}

export const LineProgress:FC<ILineProgress> = ({data}) => {
    return <div style={{display:'flex', width:390, height:12,borderRadius:'0px 4px 4px 0px'}}>
        {data.map(item => <div key={item.name} style={{width: `${item.value}%`,backgroundColor:item.color,height:'100%',borderTopLeftRadius:2,borderBottomLeftRadius:2}}></div>)}
    </div>
    }