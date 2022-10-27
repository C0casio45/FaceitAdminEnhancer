import { waitForElm } from "./utils";

export default async function main() {
    const sidebarWrapper = await <Promise<HTMLElement>>waitForElm("#main-sidebar-wrapper");
    const mainContent = await <Promise<HTMLElement>>waitForElm(".main-content__wrapper");
    const sidebar = await <Promise<HTMLElement>>waitForElm(".sidebar");
    const buttonWrapper = <HTMLElement>document.getElementsByClassName("sc-hKizKw")[0];
    const wrapperAntiTricheButton = <HTMLElement>document.getElementsByClassName("sc-dRKXJR")[0];
    const backgroundAntiTricheButton = <HTMLElement>document.getElementsByClassName("sc-iAjKSQ")[0];
    const buttonLogo = <HTMLElement>document.getElementsByClassName("sc-fAipwk")[0];
    const buttonLogoSVG = <HTMLElement>document.getElementsByClassName("cmIXMQ")[0];
    const buttonMessage = <HTMLElement>document.getElementsByClassName("sc-bHKNvF")[0];

    const elementList = {
        "sidebarWrapper":sidebarWrapper,
        "mainContent":mainContent,
        "sidebar":sidebar,
        "buttonWrapper":buttonWrapper,
        "wrapperAntiTricheButton":wrapperAntiTricheButton,
        "backgroundAntiTricheButton":backgroundAntiTricheButton,
        "buttonLogo":buttonLogo,
        "buttonMessage":buttonMessage,
        "buttonLogoSVG":buttonLogoSVG
    };

    buttonWrapper.appendChild(createButton(elementList));

}

function createButton(elementList: { [x: string]: HTMLElement; }) : HTMLButtonElement {
    const button = document.createElement("button");
    button.classList.add("secondary-button");
    button.style.backgroundColor = '#404040';
    button.style.border = 'none';
    button.style.color = 'white';
    button.style.height = '48px';
    button.style.width = '48px';
    button.style.borderRadius = '50%';
    button.style.marginTop = '8px';
    button.style.marginLeft = '4px';
    button.style.marginBottom = '8px';
    button.style.padding = "8px 16px";
    button.style.boxShadow = "0px 8px 10px rgb(0 0 0 / 25%)";
    button.innerHTML = "<<";
    button.addEventListener("mouseover", function( event ) {
        // on met l'accent sur la cible de mouseover
        (<HTMLElement>event.target).style.backgroundColor = "#696969";
    });
    button.addEventListener("mouseleave", function( event ) {
        // on met l'accent sur la cible de mouseover
        (<HTMLElement>event.target).style.backgroundColor = "#404040";
    });
    button.onclick = () => {
        if (elementList.sidebar.style.width === "70px") {
            button.innerHTML = "<<";
            majorizeSidebar(elementList)
        } else {
            button.innerHTML = ">>";
            minimizeSidebar(elementList)
        }
    };
    return button;
}

function majorizeSidebar(elementList: { [x: string]: HTMLElement; }) {
    elementList.sidebar.style.width = "304px";
    elementList.sidebarWrapper.style.display = 'block';
    elementList.mainContent.style.marginInlineStart = '304px';
    elementList.buttonWrapper.style.flexDirection= 'row';
    elementList.buttonWrapper.style.alignItems= 'center';
    elementList.backgroundAntiTricheButton.style.backgroundColor = '#282828';
    elementList.wrapperAntiTricheButton.style.marginTop = "0";
    elementList.wrapperAntiTricheButton.style.paddingLeft = "8px";
    elementList.buttonMessage.style.display = 'block';
    elementList.buttonLogo.style.width = '24px';
    elementList.buttonLogo.style.height = '24px';
    elementList.buttonLogo.style.margin = '8px';
    elementList.buttonLogoSVG.style.height = '12px';
    elementList.buttonLogoSVG.style.width = '12px';
}

function minimizeSidebar(elementList: { [x: string]: HTMLElement; }) {
    elementList.sidebar.style.width = "70px";
    elementList.sidebarWrapper.style.display = 'none';
    elementList.mainContent.style.marginInlineStart = '70px';
    elementList.buttonWrapper.style.flexDirection= 'column';
    elementList.buttonWrapper.style.alignItems= 'normal';
    elementList.backgroundAntiTricheButton.style.backgroundColor = 'transparent';
    elementList.wrapperAntiTricheButton.style.marginTop = "8px";
    elementList.wrapperAntiTricheButton.style.paddingLeft = "4px";
    elementList.buttonMessage.style.display = 'none';
    elementList.buttonLogo.style.width = '48px';
    elementList.buttonLogo.style.height = '48px';
    elementList.buttonLogo.style.margin = '0px';
    elementList.buttonLogoSVG.style.height = '24px';
    elementList.buttonLogoSVG.style.width = '24px';
}