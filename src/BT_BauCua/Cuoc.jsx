import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

function Cuoc({item}) {
    const imgSrc = `./img/${item.ma}.png`

    const dispatch = useDispatch();

    const tangCuoc = () => {
        dispatch({type: 'baucua/tang_cuoc', payload: item.ma})
    }

    const giamCuoc = () => {
        dispatch({type: 'baucua/giam_cuoc', payload: item.ma})
    }

    const {tongDiemCuoc} = useSelector((state) => state.baucuaReducer)

  return (
    <div className="text-center mt-5">
      <img
        src={imgSrc}
        alt=""
        style={{ width: 250 }}
      />
      <br />
      <br />
      <span
        className="p-3 pl-5 pr-5 bg-warning mt-2"
        style={{ borderRadius: "5%", fontSize: 25 }}
      >
        Cược:
        <button disabled={tongDiemCuoc === 0} className="btn btn-success ml-2 mr-2" style={{ fontSize: 20 }} onClick={tangCuoc}>
          +
        </button>
        <span className="text-success">{item.diemcuoc}</span>
        <button disabled={item.diemcuoc === 0} className="btn btn-success ml-2 mr-2" style={{ fontSize: 20 }} onClick={giamCuoc}>
          -
        </button>
      </span>
    </div>
  );
}

export default Cuoc