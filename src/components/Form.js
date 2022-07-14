import React, { useState, useReducer } from 'react'
import fieldReducer from '../reducers/fieldReducer'
import { send } from 'emailjs-com';
import Alert from './Alert';

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
                'service_tbtgahs', //
                'template_fdgkcoa', //
                body,
                'nfP3UlEICRSCMNZXe' //
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

    return (
        <form onSubmit={onSubmit}>
            <Alert message={alert ? alert.message : null} type={alert ? alert.type : null} />
            <div className="input-container">
                <input
                    placeholder='Name'
                    id="name"
                    name="from_name"
                    className=""
                    style={{ borderColor: toSend.from_name.helper }}
                    value={toSend.from_name.value}
                    onChange={handleChange}
                />
                <input
                    placeholder='Email'
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
            <div className="btn-container-center">
                <button className={sending ? "btn-disabled" : "action-btn"} type={sending ? "submit" : ""}>SEND ✉</button>
            </div>
        </form>
    )
}

export default Form