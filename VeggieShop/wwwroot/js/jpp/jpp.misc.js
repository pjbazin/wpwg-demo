/***********************************************************************
* Miscelleanous Tools
************************************************************************/

function sleep(time) {
    return new Promise(done => setTimeout(done, time));
}