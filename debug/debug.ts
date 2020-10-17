import {ChainId, Fetcher} from "../src";

function hello(person){
    return "Hello, " + person;
}

const token = await Fetcher.fetchTokenData(ChainId.MAINNET, '0xdAC17F958D2ee523a2206206994597C13D831ec7') // USDT
console.log(token.decimals)
// expect(token.decimals).toEqual(18)

let user = "Aamod Tiwari";
const result = hello(user);
console.log("Result",result)