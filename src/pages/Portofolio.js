import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Spinner from '../components/Spinner';
import useWindowSize from "../hooks/useWindowSize"
import "../css/Portofolio.css"

function Portofolio()
{
    const [loading, setLoading] = useState(false)
    const [Stack] = useWindowSize(1200, 0)

    const visit = (url) =>
    {
        setLoading(true)
        window.location = url
    }

    return (
        <section className="margin-total-sm">
            <div className="headline-center">My projects 📘</div>
            <div className="sub-headline text-center">dive in!</div>
            {!Stack
                ? (<section className="containers">
                    <div className="portofolio-container-diff">
                        <div className="huge-row">
                            <div className="portofolio-item item shadow"
                                onClick={() => visit("https://murmuring-wave-59408.herokuapp.com/")}
                            >
                                <div className="item-title-dark">
                                    Ctice 📚
                                </div>
                                <div className="item-repo">
                                    <div className="item-repo-dark">repository</div>
                                    <a
                                        alt="ctice-repo"
                                        href="https://github.com/hrwire127/ctice"
                                        className='item-link'
                                    >
                                        https://github.com/hrwire127/ctice
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="small-row">
                            <div className="portofolio-item item-sm shadow"
                                onClick={() => visit("https://yahtzee39.herokuapp.com/")}
                            >
                                <div className="item-title-dark">
                                    Yahtzee 🎲
                                </div>
                                <div className="item-repo">
                                    <div className="item-repo-dark">repository</div>
                                    <a
                                        alt="ctice-repo"
                                        href="https://github.com/hrwire127/yahtzee"
                                        className='item-link'
                                    >
                                        https://github.com/hrwire127/yahtzee
                                    </a>
                                </div>
                            </div>
                            <div className="portofolio-item item-sm shadow"
                                onClick={() => visit("https://glacial-waters-83977.herokuapp.com/")}
                            >
                                <div className="item-title-dark">
                                    Opal 🔷
                                </div>
                                <div className="item-repo">
                                    <div className="item-repo-dark">repository</div>
                                    <a
                                        alt="ctice-repo"
                                        href="https://github.com/hrwire127/Opal"
                                        className='item-link'
                                    >
                                        https://github.com/hrwire127/Opal
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="portofolio-container-diff">
                        <div className="small-row">
                            <div className="portofolio-item item-sm shadow"
                                onClick={() => visit("https://todo-list39.herokuapp.com/")}
                            >
                                <div className="item-title-dark">
                                    Todo List 🔖
                                </div>
                                <div className="item-repo">
                                    <div className="item-repo-dark">repository</div>
                                    <a
                                        alt="ctice-repo"
                                        href="https://github.com/hrwire127/todo-list"
                                        className='item-link'
                                    >
                                        https://github.com/hrwire127/todo-list
                                    </a>
                                </div>
                            </div>
                            <div className="portofolio-item item-sm shadow"
                                onClick={() => visit("https://dad-jokes31.herokuapp.com/")}
                            >
                                <div className="item-title-dark">
                                    Dad Jokes 🤣
                                </div>
                                <div className="item-repo">
                                    <div className="item-repo-dark">repository</div>
                                    <a
                                        alt="ctice-repo"
                                        href="https://github.com/hrwire127/dad-jokes"
                                        className='item-link'
                                    >
                                        https://github.com/hrwire127/dad-jokes
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="huge-row">
                            <div className="portofolio-item item shadow"
                                onClick={() => visit("https://color-palette-998d.herokuapp.com/")}
                            >
                                <div className="item-title-dark">
                                    Palette Generator 🎨
                                </div>
                                <div className="item-repo">
                                    <div className="item-repo-dark">repository</div>
                                    <a
                                        alt="ctice-repo"
                                        href="https://github.com/hrwire127/color-palette"
                                        className='item-link'
                                    >
                                        https://github.com/hrwire127/color-palette
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="portofolio-container-normal">
                        <div className="portofolio-item item-normal shadow"
                            onClick={() => visit("https://lights-out39.herokuapp.com/")}
                        >
                            <div className="item-title-dark">
                                Light's Out 💡
                            </div>
                            <div className="item-repo">
                                <div className="item-repo-dark">repository</div>
                                <a
                                    alt="ctice-repo"
                                    href="https://github.com/hrwire127/lights-out"
                                    className='item-link'
                                >
                                    https://github.com/hrwire127/lights-out
                                </a>
                            </div>
                        </div>
                        <div className="portofolio-item item-normal shadow"
                            onClick={() => visit("https://hangman39.herokuapp.com/")}
                        >
                            <div className="item-title-dark">
                                Hangman🧵
                            </div>
                            <div className="item-repo">
                                <div className="item-repo-dark">repository</div>
                                <a
                                    alt="ctice-repo"
                                    href="https://github.com/hrwire127/hangman"
                                    className='item-link'
                                >
                                    https://github.com/hrwire127/hangman
                                </a>
                            </div>
                        </div>
                        <div className="portofolio-item item-normal shadow"
                            onClick={() => visit("https://todo-hooks39.herokuapp.com/")}
                        >
                            <div className="item-title-dark">
                                Todo 2 📑
                            </div>
                            <div className="item-repo">
                                <div className="item-repo-dark">repository</div>
                                <a
                                    alt="ctice-repo"
                                    href="https://github.com/hrwire127/todo-hooks"
                                    className='item-link'
                                >
                                    https://github.com/hrwire127/todo-hooks
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="portofolio-container-normal">
                        <div className="portofolio-item item-normal shadow"
                            onClick={() => visit("https://deck-cards39.herokuapp.com/")}
                        >
                            <div className="item-title-dark">
                                Cards Deck 🃏
                            </div>
                            <div className="item-repo">
                                <div className="item-repo-dark">repository</div>
                                <a
                                    alt="ctice-repo"
                                    href="https://github.com/hrwire127/deck-cards"
                                    className='item-link'
                                >
                                    https://github.com/hrwire127/deck-cards
                                </a>
                            </div>
                        </div>
                        <div className="item-normal" />
                        <div className="item-normal" />
                    </div>
                </section>)
                : (<section className="containers">
                    <div className="portofolio-item item shadow"
                        onClick={() => visit("https://murmuring-wave-59408.herokuapp.com/")}
                    >
                        <div className="item-title-dark">
                            Ctice 📚
                        </div>
                        <div className="item-repo">
                            <div className="item-repo-dark">repository</div>
                            <a
                                alt="ctice-repo"
                                href="https://github.com/hrwire127/ctice"
                                className='item-link'
                            >
                                https://github.com/hrwire127/ctice
                            </a>
                        </div>
                    </div>
                    <div className="portofolio-item item shadow"
                        onClick={() => visit("https://yahtzee39.herokuapp.com/")}
                    >
                        <div className="item-title-dark">
                            Yahtzee 🎲
                        </div>
                        <div className="item-repo">
                            <div className="item-repo-dark">repository</div>
                            <a
                                alt="ctice-repo"
                                href="https://github.com/hrwire127/yahtzee"
                                className='item-link'
                            >
                                https://github.com/hrwire127/yahtzee
                            </a>
                        </div>
                    </div>
                    <div className="portofolio-item item shadow"
                        onClick={() => visit("https://glacial-waters-83977.herokuapp.com/")}
                    >
                        <div className="item-title-dark">
                            Opal 🔷
                        </div>
                        <div className="item-repo">
                            <div className="item-repo-dark">repository</div>
                            <a
                                alt="ctice-repo"
                                href="https://github.com/hrwire127/Opal"
                                className='item-link'
                            >
                                https://github.com/hrwire127/Opal
                            </a>
                        </div>
                    </div>
                    <div className="portofolio-item item shadow"
                        onClick={() => visit("https://todo-list39.herokuapp.com/")}
                    >
                        <div className="item-title-dark">
                            Todo List 🔖
                        </div>
                        <div className="item-repo">
                            <div className="item-repo-dark">repository</div>
                            <a
                                alt="ctice-repo"
                                href="https://github.com/hrwire127/todo-list"
                                className='item-link'
                            >
                                https://github.com/hrwire127/todo-list
                            </a>
                        </div>
                    </div>
                    <div className="portofolio-item item shadow"
                        onClick={() => visit("https://dad-jokes31.herokuapp.com/")}
                    >
                        <div className="item-title-dark">
                            Dad Jokes 🤣
                        </div>
                        <div className="item-repo">
                            <div className="item-repo-dark">repository</div>
                            <a
                                alt="ctice-repo"
                                href="https://github.com/hrwire127/dad-jokes"
                                className='item-link'
                            >
                                https://github.com/hrwire127/dad-jokes
                            </a>
                        </div>
                    </div>
                    <div className="portofolio-item item shadow"
                        onClick={() => visit("https://color-palette-998d.herokuapp.com/")}
                    >
                        <div className="item-title-dark">
                            Palette Generator 🎨
                        </div>
                        <div className="item-repo">
                            <div className="item-repo-dark">repository</div>
                            <a
                                alt="ctice-repo"
                                href="https://github.com/hrwire127/color-palette"
                                className='item-link'
                            >
                                https://github.com/hrwire127/color-palette
                            </a>
                        </div>
                    </div>
                    <div className="portofolio-item item shadow"
                        onClick={() => visit("https://lights-out39.herokuapp.com/")}
                    >
                        <div className="item-title-dark">
                            Light's Out 💡
                        </div>
                        <div className="item-repo">
                            <div className="item-repo-dark">repository</div>
                            <a
                                alt="ctice-repo"
                                href="https://github.com/hrwire127/lights-out"
                                className='item-link'
                            >
                                https://github.com/hrwire127/lights-out
                            </a>
                        </div>
                    </div>
                    <div className="portofolio-item item shadow"
                        onClick={() => visit("https://hangman39.herokuapp.com/")}
                    >
                        <div className="item-title-dark">
                            Hangman🧵
                        </div>
                        <div className="item-repo">
                            <div className="item-repo-dark">repository</div>
                            <a
                                alt="ctice-repo"
                                href="https://github.com/hrwire127/hangman"
                                className='item-link'
                            >
                                https://github.com/hrwire127/hangman
                            </a>
                        </div>
                    </div>
                    <div className="portofolio-item item shadow"
                        onClick={() => visit("https://todo-hooks39.herokuapp.com/")}
                    >
                        <div className="item-title-dark">
                            Todo 2 📑
                        </div>
                        <div className="item-repo">
                            <div className="item-repo-dark">repository</div>
                            <a
                                alt="ctice-repo"
                                href="https://github.com/hrwire127/todo-hooks"
                                className='item-link'
                            >
                                https://github.com/hrwire127/todo-hooks
                            </a>
                        </div>
                    </div>
                    <div className="portofolio-item item shadow"
                        onClick={() => visit("https://deck-cards39.herokuapp.com/")}
                    >
                        <div className="item-title-dark">
                            Cards Deck 🃏
                        </div>
                        <div className="item-repo">
                            <div className="item-repo-dark">repository</div>
                            <a
                                alt="ctice-repo"
                                href="https://github.com/hrwire127/deck-cards"
                                className='item-link'
                            >
                                https://github.com/hrwire127/deck-cards
                            </a>
                        </div>
                    </div>
                </section>)
            }

            {loading &&
                (<div className="cover" >
                    <Spinner />
                </div>)}
        </section >
    )
}

export default Portofolio