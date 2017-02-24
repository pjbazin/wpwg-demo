/***********************************************************************
* Logging Tools (version = '0.9.0221')
************************************************************************/
let _Log_consoleEnabled = true;
let _Log_viewEnabled = false;
let _Log_viewElement;
let _Log_header = "";

class Log {

    /*----------------------------------------------- Enable & Set View Element */
    static enableView(onOff, logViewId) {
        var _Log_viewElementId = "#logView";
        _Log_viewEnabled = onOff;
        if ((!_Log_viewElement || logViewId) && _Log_viewEnabled) {
            _Log_viewElement = document.querySelector(logViewId || _Log_viewElementId);
            if (!_Log_viewElement) {
                _Log_viewElement = document.createElement("pre");
                _Log_viewElement.id = _Log_viewElementId;
                document.body.appendChild(_Log_viewElement);
            }
        }
        if (_Log_viewElement) {
            Log.outputLine("Log " + (_Log_viewEnabled ? "enabled" : "disabled") + " on view '" + _Log_viewElement.id + "'");
            _Log_viewElement.style.display = _Log_viewEnabled ? 'block' : 'none';
        }
    }


    static enableConsole(onOff) {
        _Log_consoleEnabled = onOff || true;
    }


    static enable(mode, modeView, id) {
        Log.enableConsole(mode || true);
        Log.enableView((typeof modeView != 'undefined') ? modeView : (mode || false), id);
    }


    /*----------------------------------------------- Write Log (Basic) */
    static outputLine() {
        for (var i = 0; i < arguments.length; i++) {
            var content = arguments[i];
            if (_Log_consoleEnabled && content) console.log(content);
            if (_Log_viewEnabled) {
                if (_Log_viewElement && (typeof _Log_viewElement != 'undefined')) {
                    if (content) {
                        //_Log_viewElement.insertAdjacentHTML('afterend', "<p>" + content + "</p>");
                        _Log_viewElement.textContent += content + "\n";
                    } else {
                        _Log_viewElement.textContent = "";
                    }
                }
            }
        }
    }


    /*----------------------------------------------- Write Log (specials) */
    static clear() { Log.outputLine(null); }
    static start(content) { Log.outputLine(null, _Log_header = "[" + content + "]"); }
    static writeHeaded(keyword, content) { Log.outputLine(_Log_header + "/" + keyword + "/" + content || ""); }
    static done(content) { Log.writeHeaded("Done", content); }
    static succeed(content) { Log.writeHeaded("Success", content); }
    static failed(content) { Log.writeHeaded("Failure", content); }
    static error(exception) { Log.writeHeaded("Exception", exception); }


    /*------------------------------------------------- Typed object Output */
    static write() {
        for (var i = 0; i < arguments.length; i++) Log.writeObject(arguments[i])
    }


    static writeObject(obj, space, replacer) {

        switch (typeof obj) {

            // Unknown or Undefined type of object
            case null:
            case 'undefined':
                Log.outputLine("Object: undefined or null");
                break;

                // Basic types: int, float, string...
            default:
                Log.outputLine(obj);
                break;

                // Object Type
            case 'object':
                switch (obj.constructor.name) {

                    // Any undetermined object
                    default:
                    case 'Object':
                        Log.outputLine(obj.constructor.name + " = " + JSON.stringify(obj, replacer, space || '  '));
                        break;

                        // Known object with special formatting 
                    case 'ServiceWorkerRegistration':
                        Log.outputLine("- scope:  " + obj.scope);
                        var serviceWorker = (obj.installing != null) ? obj.installing : (
                         (obj.waiting != null) ? obj.waiting : (
                         (obj.active != null) ? obj.active : null));
                        if ((typeof serviceWorker != 'undefined') && (serviceWorker != null)) {
                            Log.outputLine("- state:  " + serviceWorker.state);
                            Log.outputLine("- script: " + serviceWorker.scriptURL);
                        } else {
                            Log.outputLine("Worker: undefined")
                        }
                        break;
                }
                break;
        }
    }

}