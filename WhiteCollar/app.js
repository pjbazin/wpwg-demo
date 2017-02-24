debug("Running WhiteCollar Service Worker");
self.addEventListener('paymentrequest', onPaymentRequest);


function onPaymentRequest(paymentrequestEvent) {
    debug("'paymentrequest' event received: " + JSON.stringify(paymentrequestEvent.data));
    paymentrequestEvent.respondWith(new Promise(function (resolve, reject) {

        self.addEventListener('message', function (messageEvent) {
            var response = messageEvent.data;
            debug("Payment UI Response: " + JSON.stringify(response));
            response.complete = responseCompleted
            resolve(response);
        });

        clients.openWindow("App.cshtml").then(function (windowClient) {
            debug("window opened?");
            sleep(3000).then(function () {
                debug("window opened!");
                windowClient.postMessage(paymentrequestEvent.data);
            });
        });

    }));
}


function responseCompleted() {
    debug("PaymentResponse.complete()");
    return Promise.resolve();
}


// ------------------------------------------------------------ Routines
// sleep time expects milliseconds
function sleep(time) {
    return new Promise(done => setTimeout(done, time));
}


function debug(obj) {
    console.debug(obj);
    //postMessage({ cmd: "debug", msg: obj });
}