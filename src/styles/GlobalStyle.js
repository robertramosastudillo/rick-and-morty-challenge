import { createGlobalStyle } from "styled-components";
import * as palette from "./variables";

const GlobalStyle = createGlobalStyle`

    html {
        font-size: 62.5%;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    *,
    *:before,
    *:after {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
    }

    body {
        background-color: #000;
        font-family: ${palette.primaryFont}, sans-serif;
        font-size: 1.6rem;
       
    }

    a {
        text-decoration: none;
    }

    /* KeyFrames */
    @keyframes fadeIn {
        0% {
        opacity: 0;
        }
        100% {
        opacity: 1;
        }
    }

    @keyframes TopOptionsMenu {
        0% {
        opacity: 0;
        transform: translateY(20px);
        }
        100% {
        opacity: 1;
        transform: translateY(0px);
        }
    }

    @keyframes modal-winner {
        0% {
        opacity: 0;
        transform: translateY(200px);
        }
        100% {
        opacity: 1;
        transform: translateY(0px);
        }
    }

    @keyframes rotateLoader {
        0% {
        -webkit-transform: rotate(0);
        transform: rotate(0);
        }
        100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
        }
    }

    @keyframes shake-card {
        from {
        transform: rotate(0deg);
        }
        4% {
        transform: rotate(5deg);
        }
        12.5% {
        transform: rotate(-5deg);
        }
        21% {
        transform: rotate(5deg);
        }
        29% {
        transform: rotate(-5deg);
        }
        37.5% {
        transform: rotate(5deg);
        }
        46% {
        transform: rotate(-5deg);
        }
        50%,
        to {
        transform: rotate(0deg);
        }
    }

    @keyframes LeftBoard {
        0% {
        opacity: 0;
        transform: translateX(-20px);
        }
        100% {
        opacity: 1;
        transform: translateX(0px);
        }
    }

    @keyframes topFooter {
        0% {
        opacity: 0;
        transform: translateY(20px);
        }
        100% {
        opacity: 1;
        transform: translateY(0px);
        }
    }

    @keyframes BottomHeader {
        0% {
        opacity: 0;
        transform: translateY(-20px);
        }
        100% {
        opacity: 1;
        transform: translateY(0px);
        }
    }
    /* KeyFrames */
`;

export { GlobalStyle };
