/* eslint-disable @typescript-eslint/no-unused-vars */
export function waitForElm(selector: string)  {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(_mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

export function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}