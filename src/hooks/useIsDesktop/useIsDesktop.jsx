import { useEffect, useState } from "react";


const useIsDesktop = (width) => {
    const [widthWindow, setWidthWindow] = useState(window.innerWidth);

    useEffect(() => {
        const changeSizeWindow = () => setWidthWindow(window.innerWidth);

        window.addEventListener("resize", changeSizeWindow);

        return () => {
            window.removeEventListener("resize", changeSizeWindow);
        };
    }, []);

    return widthWindow > width;
}

export default useIsDesktop;