import React from "react";
import useProgressiveImage from "../hooks/useProgressiveImage "
import Spinner from "./Spinner"

const Image = (props) =>
{
    const { src, alt, className, style, placeholder = <Spinner /> } = props
    const loaded = useProgressiveImage(src)

    return (
        <div
            style={loaded
                ? { backgroundImage: `url(${loaded})`, ...style }
                : {
                    ...style,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }
            }
            alt={alt}
            className={className}
        >
            {!loaded && placeholder}
        </div>
    )
}

export default Image;