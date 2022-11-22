class Ticker {
    ticker;
    flag = false;

    constructor(connex) {
        this.ticker = connex.thor.ticker();
    }
    
    async tick(cb) {
        for (; ;) {
            await cb()
            await this.ticker.next()
            if ( this.flag ) {
                return
            }
        }
    }

    stop() {
        this.flag = true;
    }
}

export default Ticker;