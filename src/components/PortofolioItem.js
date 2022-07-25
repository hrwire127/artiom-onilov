import React from 'react'
import useWindowSize from "../hooks/useWindowSize"

function PortofolioItem(props)
{
    const { link, name, repo, img, setLoading, normal, aspect } = props
    const [Stack] = useWindowSize(1000, 0)

    const visit = (url) =>
    {
        setLoading(true)
        window.location = url
    }

    return (
        <div className={`portofolio-item ${normal ? "item-normal" : "item"} ${aspect ? "item-aspect" : ""}`}
            onClick={() => visit(link)}
        >
            <div className="item-title-dark">
                {name}
            </div>
            <div className={Stack ? "item-repo item-no-anim" : "item-repo item-repo-anim"}>
                <div className="item-repo-dark">repository</div>
                <a
                    alt="ctice-repo"
                    href={repo}
                    className='item-link'
                >
                    {repo}
                </a>
            </div>
            <div
                className='portofolio-img-overlay'
            />
            {/* <img
                src={`/images/portofolio/${img}.png`}
                alt={`portofolio-${img}-img`}
                className='portofolio-img'
            /> */}
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