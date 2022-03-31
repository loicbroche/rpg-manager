import React from 'react'
import ReactDOM from "react-dom";
import ReactTooltip from 'react-tooltip';
import { LONG_CLICK_DELAY } from 'rules/Navigation.rules'

export const confirm = (message, callback, title="Confirmation", confirmLabel="Ok", cancelLabel="Annuler") => {
    const container = document.createElement("div");
    document.body.insertBefore(container, document.body.firstChild);
    const closeModal = (callbackState) => {
        ReactDOM.unmountComponentAtNode(container);
        if (callback) {
            callback(callbackState);
        }
    };

    const confirmDiv = <div className="dialog-background">
                        <div role="dialog" className="dialog">
                            <span className="dialog-title">{title}</span>
                            <span className="prompt-message">{message}</span>
                            <span className="dialog-buttons">
                                <button onClick={() => closeModal(false)}>{cancelLabel}</button>
                                <button onClick={() => closeModal(true)}>{confirmLabel}</button>
                            </span>
                        </div>
                    </div>;

    ReactDOM.render(confirmDiv, container);
}

export const promptAll = (promptLines, callback, title="", confirmLabel="Ok", cancelLabel="Annuler") => {
    const container = document.createElement("div");
    document.body.insertBefore(container, document.body.firstChild);
    const closeModal = (callbackState) => {
        let values = null;
        if (callbackState) {
            values=[];
            promptLines.forEach((promptLine, index) => {
                const inputElmnt = document.getElementById("prompt-value"+index);
                values[index] = inputElmnt?.value;
            });
        }
        ReactDOM.unmountComponentAtNode(container);
        if (callback) {
            callback(values);
        }
    };
    const promptDiv = <div className="dialog-background">
                        <form role="dialog" className="dialog" onSubmit={() => closeModal(false)}>
                            <span className="dialog-title">{title}</span>
                            {promptLines && promptLines.map((promptLine, index) => {
                                const {message, defaultValue = "",} = promptLine;
                                return (<div key={index}
                                             className="prompt-line">
                                        <span className="prompt-message">{message}</span>
                                        <input id={"prompt-value"+index} type="text" defaultValue={defaultValue} className="prompt-value"/>
                                    </div>);
                            })}
                            <span className="dialog-buttons">
                                <button type="submit">{cancelLabel}</button>
                                <button onClick={() => closeModal(true)}>{confirmLabel}</button>
                            </span>
                        </form>
                    </div>;
    ReactDOM.render(promptDiv, container);
    return null;
}
export const prompt = (message, defaultValue = "", callback, title="", confirmLabel="Ok", cancelLabel="Annuler") => {
    promptAll([{message, defaultValue}], (callbackState) => callback(callbackState?callbackState[0]:null), title, confirmLabel, cancelLabel);
}

export const dragElement = (elmnt, parentElement, callBackFunction) => {
    if (elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        var changed;
        const header = document.getElementById(elmnt.id + "-header");
        if (header) {
        // if present, the header is where you move the DIV from:
            header.onmousedown = dragMouseDown;
        } else {
        // otherwise, move the DIV from anywhere inside the DIV:
            elmnt.onmousedown = dragMouseDown;
        }

        function dragMouseDown(e) {
            changed = false;
            e = e || window.event;
            // get the mouse cursor position at startup:
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = (e) => {
                e = e || window.event;
                e.preventDefault();
                // stop moving when mouse button is released:
                document.onmouseup = null;
                document.onmousemove = null;
                callBackFunction(elmnt.style.top, elmnt.style.left, changed);
            };
            // call a function whenever the cursor moves:
            document.onmousemove = (e) => {
                changed = true;
                e = e || window.event;
                e.preventDefault();
                // calculate the new cursor position:
                pos1 = pos3 - e.clientX;
                pos2 = pos4 - e.clientY;
                pos3 = e.clientX;
                pos4 = e.clientY;

                // set the element's new position:
                var newTop = (elmnt.offsetTop - pos2);
                var newLeft = (elmnt.offsetLeft - pos1);

                var topAttribute;
                var leftAttribute;
                if (parentElement) {
                    var relativeElementWidth =  elmnt.clientWidth/parentElement.clientWidth*100;
                    var relativeElementHeight =  elmnt.clientHeight/parentElement.clientHeight*100;
                    var relativeTop = newTop / parentElement.clientHeight * 100;
                    var relativeLeft = newLeft / parentElement.clientWidth * 100;
                    relativeTop = Math.max(Math.min(relativeTop, 100-relativeElementHeight), 0);
                    relativeLeft = Math.max(Math.min(relativeLeft, 100-relativeElementWidth), 0);
                    topAttribute = relativeTop + "%"
                    leftAttribute = relativeLeft + "%";
                } else {
                    topAttribute = newTop + "px"
                    leftAttribute = newLeft + "px";
                }

                elmnt.style.top = topAttribute;
                elmnt.style.left = leftAttribute;
                elmnt.style.right = "";
            };
        }
    }
}

export const onLongPress = (elmnt, callBackFunction, delay=LONG_CLICK_DELAY) => {
    if (elmnt) {
		var presstimer = null;

		var cancel = function(e) {
			if (presstimer !== null) {
				clearTimeout(presstimer);
				presstimer = null;
			}
		};
		var click = function(e) {
			if (presstimer !== null) {
				clearTimeout(presstimer);
				presstimer = null;
			}
		};
		var start = function(e) {
			if (e.type === "click" && e.button !== 0) {
				return;
			}

			if (presstimer === null) {
				presstimer = setTimeout(function() {
					callBackFunction(e);
				}, delay);
			}

			return false;
		};

		elmnt.addEventListener("mousedown", start);
		elmnt.addEventListener("touchstart", start);
		elmnt.addEventListener("click", click);
		elmnt.addEventListener("mouseout", cancel);
		elmnt.addEventListener("touchend", cancel);
		elmnt.addEventListener("touchleave", cancel);
		elmnt.addEventListener("touchcancel", cancel);
    }
}

export const createReactTooltips = () => {
	const directive = "data-tip";
	const tooltippedElements = document.querySelectorAll('['+directive+']');

	tooltippedElements.forEach((element) => {
		var tooltipId = element.id + "-tooltip";
		var parentElement = element.parentNode;
		element.setAttribute("data-for", tooltipId);
		var reactTooltipcontainer = document.createElement("span");
			reactTooltipcontainer.Id = tooltipId+"-container";

			var reactTooltipElement = <ReactTooltip id={tooltipId} className="react-tooltip" backgroundColor='white' effect='solid' />
			ReactDOM.render(reactTooltipElement, reactTooltipcontainer)
		parentElement.appendChild(reactTooltipcontainer);
	});
	
	

};