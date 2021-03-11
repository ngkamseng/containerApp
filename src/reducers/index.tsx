import { loginReducer } from "./LoginReducer";
import {transactionReducer} from "./TransactionReducer"


let allReducers = {
  ContainerApp_transaction:transactionReducer,
  ContainerApp_login:loginReducer
}
//allReducers["gasabbs"] = transactionReducer;
export default allReducers