import React from "react/react";


import PlainButton from "./plain-button.jsx";
import ButtonWithClickHandler from "./button-with-click-handler.jsx";
import UIExample from "./ui-example.jsx";
import CodeSlide from "./code-slide.jsx";
import One from "./one.jsx";

const slides = [
	<PlainButton />,
	<ButtonWithClickHandler />,
	<CodeSlide heading="Plain ole' jQuery" codeSample={require("raw!../samples/click-handler-with-disable.txt")} />,
	<UIExample />,
	<CodeSlide heading="Plain ole' jQuery" codeSample={require("raw!../samples/click-handler-with-render-emails.txt")} />,
	<CodeSlide heading="Plain ole' jQuery" codeSample={require("raw!../samples/click-handler-with-unread-count.txt")} />,
	<CodeSlide heading="Need to Poll" codeSample={require("raw!../samples/need-to-poll.txt")} />,
	<One />
]

export default slides;