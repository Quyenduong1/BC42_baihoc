 const StorageState = {
    tongDiemCuoc: 500,
    listCuoc : [
    {ma: 'bau' , diemcuoc: 0},
    {ma: 'cua' , diemcuoc: 0},
    {ma: 'tom' , diemcuoc: 0},
    {ma: 'ca' , diemcuoc: 0},
    {ma: 'ga' , diemcuoc: 0},
    {ma: 'nai' , diemcuoc: 0},
  ],
    xucXac: ['bau','bau','bau'],
  }
 

  function baucuaReducer( state = StorageState, action ) {
    switch (action.type) {
      case 'baucua/tang_cuoc': {
        const listCuoc = state.listCuoc.map(item => {
          if(item.ma === action.payload){
            return {...item, diemcuoc: item.diemcuoc + 100};
          }
          return item;
        });

        const tongDiemCuoc = state.tongDiemCuoc - 100;
        return {...state, listCuoc,tongDiemCuoc }
      }

      case 'baucua/giam_cuoc': {
        const listCuoc = state.listCuoc.map(item => {
          if(item.ma === action.payload){
            return {...item, diemcuoc: item.diemcuoc - 100};
          }
          return item;
        });

        const tongDiemCuoc = state.tongDiemCuoc + 100;
        return {...state, listCuoc,tongDiemCuoc }
      }

      case 'baucua/play': {
        //B1: random ra 3 xuc xac moi
        const newXucXac = [
          state.listCuoc[Math.floor(Math.random() * state.listCuoc.length)].ma,
          state.listCuoc[Math.floor(Math.random() * state.listCuoc.length)].ma,
          state.listCuoc[Math.floor(Math.random() * state.listCuoc.length)].ma,
        ];

        

        //B2: tinh toan tien thang cuoc 
        // loc ra danh sach co dat cuoc
        let tongDiemCuoc = state.tongDiemCuoc;
        const listCuoc = state.listCuoc.filter((item) => item.diemcuoc > 0)

        //B2.1: hoan tra tien cuoc
        listCuoc.forEach((item) => {
          //Kiểm tra xúc xắc có khớp với item đã đặt cược hay ko
          // nếu có hoàn lại tiền cược
          if (newXucXac.includes(item.ma)) {
            tongDiemCuoc += item.diemcuoc;
          }
        });
        //B2.2: hoàn trả tiền thắng
        newXucXac.forEach((x) => {
          const cuoc = listCuoc.find((item) => item.ma === x)
          if(cuoc) {
            tongDiemCuoc += cuoc.diemcuoc;
          }
        });

        //B3: reset toàn bộ điểm cược
        const resetList = state.listCuoc.map((evt) => {
          return { ...evt, diemcuoc: 0 };
        });
        
        
        return {...state, xucXac: newXucXac ,tongDiemCuoc,resetList};
        
      }
      
    
      default:
        return state
    }
  } 

export default baucuaReducer