function enoughAirtime(projectedUsage, airtime) {
    var splitProjectedUsage = projectedUsage.split(',');
    var data = 12;
    var call = 1.88;
    var sms = 0.75;
    var sum = 0;
    
    for (let i = 0; i < splitProjectedUsage.length; i++) {
        var newProjectedUsage = splitProjectedUsage[i].trim();
        
        if (newProjectedUsage === 'data') {
            sum += data;
        } else if (newProjectedUsage === 'call') {
            sum += call;
        } else if (newProjectedUsage === 'sms') {
            sum += sms;
        }
    }
    
    var results = airtime - sum;
    var finalResults = 'R' + results.toFixed(2);
    
    if (results < 0.00) {
        return 'R0.00';
    }
    
    return finalResults;
}
