function getChai (kind: string | number) {
    if(typeof kind === 'string') {
        return `This is a ${kind} chai....`
    }

    return `Chai order: ${kind} `
}

function serveChai(msg?: string){
    if(msg) {
        return `Serving ${msg} `
    }

    return `Serving default masala chai...`
}


function orderChai(size: 'small' | 'medium' | 'large' | number) {
    if(size === 'small') {
        return `small cutting Chai...`
    }
    if(size === 'medium' || size === "large") {
        return `make extra chai...`
    }

    return `Chai order: ${size} ` 
}

class kulhadChai {
    serve() {
        return `Serving kulhad chai...`
    }
}

class cuttingChai {
    serve() {
        return `Serving cutting chai...`
    }
}


function serve(chai: kulhadChai | cuttingChai) {
    if(chai instanceof kulhadChai) {
        return chai.serve()
    }
}

type ChaiOrder = {
    type: string,
    sugar: number
}

// isChaiOrder function se kuchh bhi return hoga uska datatype ChaiOrder hoga, agar obj ChaiOrder type ka hai to true return karega otherwise false return karega
function isChaiOrder(obj: any): obj is ChaiOrder {
    return (
        typeof obj === 'object' && 
        obj !== null &&
        typeof obj.type === 'string' &&
        typeof obj.sugar === 'number'
    )
}

function serveOrder(item: ChaiOrder | string) {
    if(isChaiOrder(item)) {
        return `Serving ${item.type} chai with ${item.sugar} spoons of sugar...`
    }
    return `Serving custom Chai... ${item}...`
}


type MasalaChai = {
    type: 'masala',
    spiceLevel: number
}

type GingerChai = {
    type: 'ginger',
    amount: number
}

type ElaichiChai = {
    type: 'elaichi',
    aroma: string
}

type Chai = MasalaChai | GingerChai | ElaichiChai;

function MakeChai(order: Chai) {
    switch(order.type) {
        case 'masala':
            return `Masala chai`
            break;
        case 'ginger':
            return `Ginger chai`
            break;
        case 'elaichi':
            return `Elaichi chai`
            break;
    }
}


function brew(order: MasalaChai | GingerChai ) {
    if("spiceLevel" in order) {
        return `Brewing masala chai with spice level ${order.spiceLevel}...`
    }
}


function isStringArray(arr: unknown): arr is string[] {
    
}
