import React, { useContext } from 'react'
import useWindowSize from "../hooks/useWindowSize"
import { langCtx, Paragraphs } from '../context/langCtx'

function PortofolioItem(props)
{
    const langValue = useContext(langCtx)

    const Repo = Paragraphs.Portofolio.part_2[langValue];

    const { link, name, repo, img, setLoading, normal, aspect, light } = props
    const [Stack] = useWindowSize(1000, 0)

    const visit = (url) =>
    {
        setLoading(true)
        window.location = url
    }

    return (
        <div
            className={`portofolio-item ${normal ? "item-normal" : "item"} ${aspect ? "item-aspect" : ""}`}
            onClick={() => visit(link)}
        >
            <div className={light
                ? "item-title-light"
                : "item-title-dark"}
            >
                {name}
            </div>
            {/* <div className={Stack
                ? "item-repo item-no-anim"
                : "item-repo item-repo-anim"}
            >
                <div className={light
                    ? "item-repo-light"
                    : "item-repo-dark"}
                >
                    {Repo}
                </div>
                <a
                    alt="ctice-repo"
                    href={repo}
                    className={
                        light
                            ? "item-link-light"
                            : "item-link-dark"
                    }
                >
                    {repo}
                </a>
            </div> */}
            <div
                className='portofolio-img-overlay'
            />
            <div
                style={{
                    backgroundImage: `url("/images/portofolio/${img}.png")`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
                className='portofolio-img'
            />
        </div>
    )
}

export default PortofolioItem