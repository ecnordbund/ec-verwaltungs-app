import { api } from "./src/api";
import { server } from "./builder/cons";

let servers = server(api, async (username:string, password:string)=>false, async ()=>[])