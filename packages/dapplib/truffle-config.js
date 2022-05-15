require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture merry flame trip normal note sister comic install crime off gate'; 
let testAccounts = [
"0x8e86f3f99fc506ea32cf5773fdaca71b8d29fd5a35062b25bb9f254b6474b738",
"0x5554547fbd5f8b23de09fc8fb2937af42ac856c3af13dd40b62dd18a97b0c61e",
"0x43114c2b54c1e2254c58a322249e65a1fffff392d0e34c45e909a249bf83e3e6",
"0xa50bcceed3c9e0758ae5175f005c640c6493326818e6c224ff48983d6ce48436",
"0xc6678a404f6bb6e4a6762890352b9bb9f3c5c0236663846ca64a6e4b43efbf5f",
"0xdd0e75f24756b4efa9ae08bda8d83d2ed383a3ffeaea457d6049b1447f258c4c",
"0x35603e96752033795981578af9b1371c9277015e04b52ff7ad2ab78d7c6fcb95",
"0x47fa19276bf3a34a9241473aa66b2570754481b7011658dc2059a8a688cc96a8",
"0x4aa7914d8020293a8699e39fca672143054c32507efacc712a0fe91f9e07abb2",
"0x5bfc0e99435efcdf0e2583594195b23fa518b305c27609230bfbe175140e262a"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

