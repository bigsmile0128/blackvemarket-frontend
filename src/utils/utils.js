import BigNumber from 'bignumber.js'

export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function numberRound(x,r) {
    const p = Math.pow(10,r);
    return Math.round((x * 1 + Number.EPSILON) * p) / p;
}

export function uriToHttp(uri) {
    const protocol = uri.split(":")[0].toLowerCase();
    switch (protocol) {
        case "https":
            return [uri];
        case "http":
            return [`https${uri.substr(4)}`, uri];
        case "ipfs":
            const hash = uri.match(/^ipfs:(\/\/)?(.*)$/i)?.[2];
            return [
                `https://cloudflare-ipfs.com/ipfs/${hash}/`,
                `https://ipfs.io/ipfs/${hash}/`,
            ];
        case "ipns":
            const name = uri.match(/^ipns:(\/\/)?(.*)$/i)?.[2];
            return [
                `https://cloudflare-ipfs.com/ipns/${name}/`,
                `https://ipfs.io/ipns/${name}/`,
            ];
        default:
            return [];
    }
}

export function uriToImage(uri) {
    const protocol = uri.split(":")[0].toLowerCase();
    switch (protocol) {
        case "https":
            return uri;
        case "http":
            return `https${uri.substr(4)}`;
        case "ipfs":
            const hash = uri.match(/^ipfs:(\/\/)?(.*)$/i)?.[2];
            return `https://cloudflare-ipfs.com/ipfs/${hash}`;
        case "ipns":
            const name = uri.match(/^ipns:(\/\/)?(.*)$/i)?.[2];
            return `https://cloudflare-ipfs.com/ipns/${name}`;
        default:
            return "";
    }
}

export function sliceAddress(address) {
    return address.slice(0, 5).concat("...", address.slice(-8));
}


export function toWei (val, decimals = 18) {
    return '0x' + new BigNumber(val).multipliedBy(`1e${decimals}`).toString(16)
}


export function fromWei (val, decimals = 18) {
    return new BigNumber(val).div(`1e${decimals}`).toFixed(18, 1).replace(/0/g, ' ').trimEnd().replace(/ /g, '0')
}

export function toPriceFormat (val, decimals = 2) {
    return numberWithCommas(numberRound(fromWei(val), decimals)) + " VET";
}

export function toVETFormat (val) {
    return numberWithCommas(numberRound(val, 2)) + " VET";
}