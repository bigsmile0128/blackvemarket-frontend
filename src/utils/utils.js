export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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