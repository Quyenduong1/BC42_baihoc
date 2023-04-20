import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import 'animate.css'

function XucXac() {
    const {xucXac,daDatCuoc} = useSelector((state) => {
        const xucXac = state.baucuaReducer.xucXac;
        const daDatCuoc =  state.baucuaReducer.listCuoc.some((item) => {
            return item.diemcuoc > 0;
        });

        return {xucXac,daDatCuoc};
    })
    const dispatch = useDispatch();

  return (
    <div className='h-100 d-flex flex-column justify-content-center align-content-center align-items-center'>
        {xucXac.map((item, index) => {
                return (
                    <div key={`${item}-${index}`} className='mt-3'>
                        <img src={`./img/${item}.png`} alt=""  style={{width: 50}}/>
                    </div>
                )
            })}
            <button  className='btn btn-success ps-5 pe-5 mt-5 pt-3 pb-3' style={{fontSize: '25'}}
            disabled = {!daDatCuoc}
            onClick={() => dispatch({type: 'baucua/play'})}>
                Xốc
            </button>
    </div>
  )
}

export default XucXac