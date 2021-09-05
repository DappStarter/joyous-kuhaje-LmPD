require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy knock forward turtle crazy remember stick around heavy civil army gauge'; 
let testAccounts = [
"0x64f11ea7711676cabee2cdc488edf73a1eaeba3a3a32bffa4d73a3976b5daeb5",
"0x910dc0d0680aae96df416387e93a1217f62077a795a8edcdc6f638fb84a3bd75",
"0xe8522afeb98fd6e1665ed4c2d09e99b0e609fbad597bd2599c614068e317b7ea",
"0xd981d35f62317a5a8402071e416c61f67922c7c8b47c42ba21d0b14b3bdf2131",
"0xfab462348bc106703733c80998ea692f87bee037f2b422dd69e0e88fcf6f05f9",
"0xd3a7f30ce7ed753c67a05233dbde7e522b23f334a6023044be9225cdd64c099c",
"0x169ee1a2af9dd3f39fd70c461e33d2c55db322b29a88b10b1505711982f2db76",
"0xc32ab15635f406708e911ad049fa9167750c30543f851bb58f4ffb6ef7b40a2b",
"0xb3414dbcc91c83abcc49cb1a72ae00fcb46a0882e5dc0e7e13ea2ce0397e8ec6",
"0x3b3e1f0b6b5adf05e6748eb0bdd5244fd48fc0f67a68234929c788299aca9022"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

