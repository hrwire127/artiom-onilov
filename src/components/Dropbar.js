import React, { useState } from 'react'
import Spinner from "./Spinner"
import "../css/Dropbar.css"

function Dropbar(props)
{
    const { values, onChange, defaultValue, timeout = 1000 } = props;

    const [value, setValue] = useState(defaultValue)
    const [isChanging, setChangeState] = useState(false)


    const onClick = (value) =>
    {
        setValue(values.indexOf(value));
        onChange(value);
        setChangeState(true);
        setTimeout(() =>
        {
            setChangeState(false);
        }, timeout);
    }

    return (
        <section className="dropbar-container shadow-top">
            {!isChanging
                ? (<>
                    {values.map(v => v !== values[value] && (
                        <div
                            onClick={() => onClick(v)}
                            key={v}
                            className="dropbar-btn"
                        >
                            {v}
                        </div>)
                    )}

                    <div className="dropbar-btn dropbar-btn-active">{values[value]}</div>
                </>)
                : (<Spinner style={{ width: "20px", height: "20px", borderWidth: "1px" }} />)}
        </section>
    )
}

export default Dropbar