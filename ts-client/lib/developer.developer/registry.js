import { GenesisState } from "./types/developer/developer/genesis";
import { MsgUpdateParams } from "./types/developer/developer/tx";
import { QueryParamsRequest } from "./types/developer/developer/query";
import { QueryParamsResponse } from "./types/developer/developer/query";
import { Params } from "./types/developer/developer/params";
import { MsgUpdateParamsResponse } from "./types/developer/developer/tx";
const msgTypes = [
    ["/developer.developer.GenesisState", GenesisState],
    ["/developer.developer.MsgUpdateParams", MsgUpdateParams],
    ["/developer.developer.QueryParamsRequest", QueryParamsRequest],
    ["/developer.developer.QueryParamsResponse", QueryParamsResponse],
    ["/developer.developer.Params", Params],
    ["/developer.developer.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
];
export { msgTypes };
