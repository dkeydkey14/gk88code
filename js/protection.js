(function() {
    'use strict';

    function protectSource() {
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            return false;
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'F12') {
                e.preventDefault();
                return false;
            }

            if (e.ctrlKey && e.keyCode === 85) {
                e.preventDefault();
                return false;
            }

            if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
                e.preventDefault();
                return false;
            }
            
            if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
                e.preventDefault();
                return false;
            }
            
            if (e.ctrlKey && e.shiftKey && e.keyCode === 67) {
                e.preventDefault();
                return false;
            }
        });
    }
    
    function disableConsole() {
        var originalConsole = {
            log: console.log,
            warn: console.warn,
            error: console.error,
            info: console.info,
            debug: console.debug
        };
        
        var message = "CON LỢN NÀY CHỐI ÁC DKEY ĐÂY MUỐN ĂN CẤP CODE ALO THẲNG ANH LẤY NHÉ";
        
        originalConsole.log("%c" + message, "color: red; font-size: 24px; font-weight: bold; background-color: black; padding: 10px;");
        
        console.log = function() {
            originalConsole.log("%c" + message, "color: red; font-size: 18px; font-weight: bold;");
            return undefined;
        };
        
        console.warn = function() {
            originalConsole.warn("%c" + message, "color: red; font-size: 18px; font-weight: bold;");
            return undefined;
        };
        
        console.error = function() {
            originalConsole.error("%c" + message, "color: red; font-size: 18px; font-weight: bold;");
            return undefined;
        };
        
        console.info = function() {
            originalConsole.info("%c" + message, "color: red; font-size: 18px; font-weight: bold;");
            return undefined;
        };
        
        console.debug = function() {
            originalConsole.debug("%c" + message, "color: red; font-size: 18px; font-weight: bold;");
            return undefined;
        };
        
        console.clear = function() {
            originalConsole.clear();
            originalConsole.log("%c" + message, "color: red; font-size: 36px; font-weight: bold; background-color: black; padding: 10px;");
            return undefined;
        };
        
        setInterval(function() {
            originalConsole.log("%c" + message, "color: red; font-size: 24px; font-weight: bold; background-color: black; padding: 10px;");
        }, 3000);
    }

    protectSource();
    disableConsole();
    
})();