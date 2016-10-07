function rectCalculate (length, width, loss) {
    var lossBreakdown = []
    var lossPerDay = 0
    var lossPerHour = 0
    var lossPerMinute = 0

    if ( (typeof(length) != 'number') || (typeof(width) != 'number') || (typeof(loss) != 'number')){
        length = 0
        width = 0
        loss = 0
    } else if(length < 0 || width < 0  || loss < 0 ){
        length = 0
        width = 0
        loss = 0
    } else {
        var sqft = length * width
        unroundedLossPerDay = sqft * loss
        lossPerDay = Math.round(unroundedLossPerDay * 100) / 100
    }

    console.log('lossPerDay: ' + lossPerDay);

    lossPerHour = Math.round((lossPerDay / 24)* 100) / 100
    console.log('lossPerHour: ' + lossPerHour);

    lossPerMinute = Math.round((lossPerHour / 60/ 24)* 100) / 100
    console.log('lossPerMinute: ' + lossPerMinute);

    lossBreakdown = [lossPerDay, lossPerHour, lossPerMinute]
    console.log('lossBreakdown: ' + lossBreakdown);

    return lossBreakdown
}

// rectCalculate(6, 5, 10);
// rectCalculate(6, 5);
// rectCalculate(5, 10);

function circCalculate (diameter, loss) {
    var lossBreakdown = []
    var lossPerDay = 0
    var lossPerHour = 0
    var lossPerMinute = 0

    if ( (typeof(diameter) != 'number') || (typeof(loss) != 'number')){
        diameter = 0
        loss = 0
    } else if(diameter < 0  || loss < 0 ){
        diameter = 0
        loss = 0
    } else {
        var area = diameter * Math.PI
        unroundedLossPerDay = area * loss
        lossPerDay = Math.round(unroundedLossPerDay * 100) / 100
    }

    console.log('lossPerDay: ' + lossPerDay);

    lossPerHour = Math.round((lossPerDay / 24)* 100) / 100
    console.log('lossPerHour: ' + lossPerHour);

    lossPerMinute = Math.round((lossPerHour / 60/ 24)* 100) / 100
    console.log('lossPerMinute: ' + lossPerMinute);

    lossBreakdown = [lossPerDay, lossPerHour, lossPerMinute]
    console.log('lossBreakdown: ' + lossBreakdown);

    return lossBreakdown
}

circCalculate(6, 10);
