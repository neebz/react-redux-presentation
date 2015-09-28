import React from "react/react";


import PlainButton from "./plain-button.jsx";
import ButtonWithClickHandler from "./button-with-click-handler.jsx";
import UIExample from "./ui-example.jsx";
import CodeSlide from "./code-slide.jsx";
import MarkdownSlide from "./markdown-slide.jsx";
import StatementSlide from "./statement-slide.jsx";
import One from "./one.jsx";

const slides = [
	<PlainButton />,
	<ButtonWithClickHandler />,
	<CodeSlide heading="Plain ole' jQuery" codeSample={require("raw!../samples/click-handler-with-disable.txt")} />,
	<UIExample />,
	<CodeSlide heading="Plain ole' jQuery" codeSample={require("raw!../samples/click-handler-with-render-emails.txt")} />,
	<CodeSlide heading="Plain ole' jQuery" codeSample={require("raw!../samples/click-handler-with-unread-count.txt")} />,
	<CodeSlide heading="Need to Poll" codeSample={require("raw!../samples/need-to-poll.txt")} />,
	<StatementSlide text="Polling request should not start if there is already a request in progress" />,
	<MarkdownSlide heading="Maintaining UI State" text={require("raw!../samples/fixing-polling-1.md")} />,
	<MarkdownSlide heading="Maintaining UI State" text={require("raw!../samples/fixing-polling-2.md")} />,
	<MarkdownSlide heading="Maintaining UI State" text={require("raw!../samples/fixing-polling-3.md")} />,
	<CodeSlide heading="Using isFetching" codeSample={require("raw!../samples/using-isFetching.txt")} />,
	<StatementSlide text="Add a feature to allow user to cancel a request" />,
	<CodeSlide heading="Cancelling request..." codeSample={require("raw!../samples/cancelling-request-1.txt")} />,
	<CodeSlide heading="Cancelling request..." codeSample={require("raw!../samples/cancelling-request-2.txt")} />,
	<MarkdownSlide heading="Problems" text={require("raw!../samples/ui-flow-problems.md")} />,
	<CodeSlide heading="would love to have something like this..." codeSample={require("raw!../samples/ideal-case-code.txt")} />,
	<CodeSlide heading="infact when you think about it, this:" codeSample={require("raw!../samples/need-to-poll.txt")} />,
	<CodeSlide heading="...should be changed to this:" codeSample={require("raw!../samples/state-based-code.txt")} />,
	<One />
]

export default slides;