import React, { useState, useReducer, useContext } from 'react'
import fieldReducer from '../reducers/fieldReducer'
import { send } from 'emailjs-com';
import { langCtx, Paragraphs } from '../context/langCtx'
import Alert from './Alert';

function Form()
{
    const langValue = useContext(langCtx)

    const YournameText = Paragraphs.Form.part_0[langValue];
    const YouremailText = Paragraphs.Form.part_1[langValue];
    const SubjectText = Paragraphs.Form.part_2[langValue];
    const MessageText = Paragraphs.Form.part_3[langValue];
    const ButtonActive = Paragraphs.Form.part_4[langValue];
    const ButtonDisabled = Paragraphs.Form.part_5[langValue];
    const Alert_1 = Paragraphs.Form.part_6[langValue];
    const Alert_2 = Paragraphs.Form.part_7[langValue];
    const Alert_3 = Paragraphs.Form.part_8[langValue];
    const Alert_4 = Paragraphs.Form.part_9[langValue];
    const Alert_5 = Paragraphs.Form.part_10[langValue];
    const Alert_6 = Paragraphs.Form.part_11[langValue];
    const Alert_7 = Paragraphs.Form.part_12[langValue];

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
            const helper = Alert_1;
            toggleFieldError("from_name", "red")
            setMessage(helper, "error")
            setSending(false)
            return
        }
        if (from_email === "")
        {
            const helper = Alert_2
            toggleFieldError("from_email", "red")
            setMessage(helper, "error")
            setSending(false)
            return
        }
        if (subject === "")
        {
            const helper = Alert_3
            toggleFieldError("subject", "red")
            setMessage(helper, "error")
            setSending(false)
            return
        }
        if (message === "")
        {
            const helper = Alert_4
            toggleFieldError("message", "red")
            setMessage(helper, "error")
            setSending(false)
            return
        }
        if (!from_email.includes("@"))
        {
            const helper = Alert_5
            toggleFieldError("from_email", "red")
            setMessage(helper, "error")
            setSending(false)
            return
        }
        if (message.length < messageMinLength)
        {
            const helper = `${Alert_6} ${messageMinLength} ${Alert_7}`
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
            <span>{ButtonActive}</span>
        </button>)

    const DisabledBtn = () => (
        <button
            disabled
            className="action-btn-m btn-disabled"
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
                gap: 4
            }}>
            <span style={{}}>{ButtonDisabled}</span>
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
                    placeholder={YournameText}
                    id="name"
                    name="from_name"
                    className=""
                    style={{ borderColor: toSend.from_name.helper }}
                    value={toSend.from_name.value}
                    onChange={handleChange}
                />
                <input
                    placeholder={YouremailText}
                    id="email"
                    name='from_email'
                    className=""
                    style={{ borderColor: toSend.from_email.helper }}
                    value={toSend.from_email.value}
                    onChange={handleChange}
                />
            </div>
            <input
                placeholder={SubjectText}
                id="subject"
                name='subject'
                className=""
                style={{ borderColor: toSend.subject.helper }}
                value={toSend.subject.value}
                onChange={handleChange}
            />
            <textarea
                placeholder={MessageText}
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