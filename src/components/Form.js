import React, { useState, useReducer } from 'react'
import fieldReducer from '../reducers/fieldReducer'
import { send } from 'emailjs-com';
import Alert from './Alert';
import Spinner from './Spinner'

function Form()
{
    const [toSend, dispatchSend] = useReducer(fieldReducer, {
        from_name: { value: '', helper: null },
        from_email: { value: '', helper: null },
        subject: { value: '', helper: null },
        message: { value: '', helper: null },
    });

    const [sending, setSending] = useState(false);
    const [alert, setAlert] = useState();

    const messageMinLength = 20;

    const setMessage = (message, type) =>
    {
        setAlert({ message, type })
        setTimeout(() =>
        {
            setAlert()
        }, 3000)
    }

    const validateBody = () =>
    {
        const from_name = toSend.from_name.value.trim()
        const from_email = toSend.from_email.value.trim()
        const subject = toSend.subject.value.trim()
        const message = toSend.message.value.trim()

        if (from_name === "")
        {
            const helper = "Your name field cannot be empty";
            toggleFieldError("from_name", "red")
            setMessage(helper, "error")
            setSending(false)
            return
        }
        if (from_email === "")
        {
            const helper = "Your email field cannot be empty"
            toggleFieldError("from_email", "red")
            setMessage(helper, "error")
            setSending(false)
            return
        }
        if (subject === "")
        {
            const helper = "The subject field cannot be empty"
            toggleFieldError("subject", "red")
            setMessage(helper, "error")
            setSending(false)
            return
        }
        if (message === "")
        {
            const helper = "The message field cannot be empty"
            toggleFieldError("message", "red")
            setMessage(helper, "error")
            setSending(false)
            return
        }
        if (!from_email.includes("@"))
        {
            const helper = "Invalid email"
            toggleFieldError("from_email", "red")
            setMessage(helper, "error")
            setSending(false)
            return
        }
        if (message.length < messageMinLength)
        {
            const helper = `The message must be at least ${messageMinLength} characters in length`
            toggleFieldError("message", "red")
            setMessage(helper, "error")
            setSending(false)
            return
        }

        return { from_name, from_email, subject, message }
    }

    const onSubmit = (e) =>
    {
        e.preventDefault()
        setSending(true)

        const body = validateBody();

        if (body)
        {
            send(
                'service_hkj1cy1', //
                'template_v8k9np4', //
                body,
                'Xz2enPPrP-8q33kHq' //
            )
                .then((response) =>
                {
                    setMessage("Sent!", "success")
                    setSending(false)
                    dispatchSend({
                        type: "RESET"
                    })
                })
                .catch((err) =>
                {
                    setMessage("Failed, Something went wrong", "error")
                    setSending(false)
                });
        }
    }

    const handleChange = (e) =>
    {
        setAlert()
        dispatchSend({
            value: e.target.value,
            field: e.target.name,
            type: "SET"
        })
    };

    const toggleFieldError = (field, helper) =>
    {
        dispatchSend({
            helper,
            field,
            type: "TOGGLE"
        })
    };

    const NormalBtn = () => (
        <button className="action-btn-m">
            <span>Send ✉</span>
        </button>)

    const DisabledBtn = () => (
        <button disabled
            className="action-btn-m btn-disabled"
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
                gap: 4
            }}>
            <span style={{}}>Send</span>
            <div
                className="loader"
                style={{
                    width: 15,
                    height: 15,
                    border: "4px solid #f3f3f3",
                    borderTop: "4px solid #7971ea00",
                }}
            />
        </button>
    )

    return (
        <form onSubmit={onSubmit}>
            <Alert message={alert ? alert.message : null} type={alert ? alert.type : null} />
            <div className="input-container">
                <input
                    placeholder='Your Name'
                    id="name"
                    name="from_name"
                    className=""
                    style={{ borderColor: toSend.from_name.helper }}
                    value={toSend.from_name.value}
                    onChange={handleChange}
                />
                <input
                    placeholder='Your Email'
                    id="email"
                    name='from_email'
                    className=""
                    style={{ borderColor: toSend.from_email.helper }}
                    value={toSend.from_email.value}
                    onChange={handleChange}
                />
            </div>
            <input
                placeholder='Subject'
                id="subject"
                name='subject'
                className=""
                style={{ borderColor: toSend.subject.helper }}
                value={toSend.subject.value}
                onChange={handleChange}
            />
            <textarea
                placeholder='Message'
                id="message"
                name="message"
                className=""
                style={{ borderColor: toSend.message.helper }}
                value={toSend.message.value}
                onChange={handleChange}
            />
            <div className="portofolio-btn-container">
                {!sending
                    ? (<NormalBtn />)
                    : (<DisabledBtn />)}
            </div>
        </form>
    )
}

export default Form