onmessage = function (message) {
    performWork(message.data);
}

function performWork(seconds) {

    var time = new Date().getTime();
    var diff = 0;
    for (var i = 0, reported = 0; diff < seconds * 1000; i++) {
        diff = new Date().getTime() - time;

        var percentage = diff / (seconds * 10); //in %
        if (parseInt(percentage) > reported) {
            reported = parseInt(percentage);
            reportProgress(reported);
        }
    }

    reportResult('Completed from Worker!')
}

function reportProgress(progress) {
    postMessage({
        inProgress: true,
        progress: progress
    });
}

function reportResult(result) {
    postMessage({
        result: result
    });
}