const { Api, JsonRpc, RpcError } = require('vexaniumjs');
const { JsSignatureProvider } = require('vexaniumjs/dist/vexjs-jssig');

const fetch = require('node-fetch'); // node only; not needed in browsers
const { TextEncoder, TextDecoder } = require('util');  
const rpc = new JsonRpc('https://explorer.vexanium.com:6960', {fetch});
const schedule = require('node-schedule');

const defaultPrivateKey = privateKey; // change to sender account private key
const signatureProvider = new JsSignatureProvider([defaultPrivateKey]);
const api = new Api({ rpc, signatureProvider, textDecoder: new 
TextDecoder(), textEncoder: new TextEncoder() });


function sendTokenCrypto(data){
    api.transact({
        actions: [{
        account: data.smartContract, //change to smart contract
        name: 'transfer',
        authorization: [{
            actor: data.sender, //change to sender account
            permission: 'active',
        }],
        data: {
            from: data.sender, //change to sender account
            to: data.receiver, //change to receiver account
            quantity:data.quantity, //change to quantity token will be transferred
            memo: data.memo// memo
            },
        }]
    }, {
        blocksBehind: 3,
        expireSeconds: 30,
    }).then((res) => {
        console.log(res)
    });
}


function sendNFT(data){
    api.transact({
        actions: [{
        account: data.smartContract, //change to smart contract
        name: 'transfer',
        authorization: [{
            actor: data.sender, //change to sender account
            permission: 'active',
        }],
        data: {
            from: data.sender, //change to sender account
            to: data.receiver, //change to receiver account
            id_nft: data.id_nft, //change to id_nft will be transferred
            memo: data.memo// memo
            },
        }]
    }, {
        blocksBehind: 3,
        expireSeconds: 30,
    }).then((res) => {
        console.log(res)
    });
}

sendTokenCrypto(data);
sendNFT(data);


