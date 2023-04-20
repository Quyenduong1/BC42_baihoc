import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./reducers/countReducer";
import todoReducer from "./reducers/todoReducer";
import baucuaReducer from "./reducers/baucuaReducer";

// Tạo redux store nắm giữ state của ứng dụng

const store = configureStore({
  reducer: {
    countReducer: countReducer,
    todoReducer,
    baucuaReducer,
  },
});

export default store;

// ================ Giải thích các hàm của redux ================
// // store.subscribe(callback): Hàm theo dõi sự thay đổi state của store, bất cứ khi nào state thay đổi, nó sẽ gọi tới hàm callback
// store.subscribe(() => {
//   // store.getState(): Hàm dùng để lấy ra state hiện tại của store
  // console.log("Giá trị state của store:", store.getState());
// });

// // store.dispatch(action)
// // Cách duy nhất để cập nhật state trong store là dùng hàm dispatch để gửi một action
// // action là một plain object, có 1 key bắt buộc là type dùng để mô tả ta muốn thay đổi state như thế nào
// store.dispatch({ type: "increment" }); // {count: 1}
// store.dispatch({ type: "increment" }); // {count: 2}
// store.dispatch({ type: "decrement" }); // {count: 1}
