import React, { useState, useContext } from 'react'
import Animate from '../components/Animate'
import Spinner from '../components/Spinner';
import useWindowSize from "../hooks/useWindowSize"
import PortofolioItem from '../components/PortofolioItem'
import { langCtx, Paragraphs } from '../context/langCtx'
import "../css/Portofolio.css"

function Portofolio()
{
    const langValue = useContext(langCtx)

    const Headline = Paragraphs.Portofolio.part_0[langValue];
    const Subheadline = Paragraphs.Portofolio.part_1[langValue];

    const [Stack] = useWindowSize(1000, 0)
    const [loading, changeLoading] = useState(false)
    const [NoSubheadline] = useWindowSize(883, 0)

    const setLoading = (value) =>
    {
        changeLoading(value)
        setTimeout(() =>
        {
            changeLoading(!value)
        }, 15000) //
    }

    return (<div style={{ backgroundColor: "#1A2C5B", flex: 1 }} className="content">
        <section
            className="margin-total padding-total padding-total-intro rounded-layout"
            style={{
                backgroundColor: "#f2f2f2"
            }}>

            <Animate animation="step-anim" start>
                <div className="portofolio-text-container">
                    <div
                        className="headline-sm text-center portofolio-headline"
                    >
                        {Headline}
                    </div>
                    {!NoSubheadline && (
                        <div className="text-collapsed portofolio-text" style={{ marginBottom: 30 }}>
                            {Subheadline}
                        </div>
                    )}
                </div>
            </Animate>

            {!Stack
                ? (<Animate animation="step-anim" start>
                    <section className="containers">
                        <div className="portofolio-container-diff">
                            <div className="huge-row">
                                <PortofolioItem
                                    link="https://avangard0.herokuapp.com/"
                                    name="Avangard 🔧"
                                    repo="https://github.com/hrwire127/avangard"
                                    img="avangard"
                                    setLoading={setLoading}
                                    aspect
                                />
                            </div>
                            <div className="small-row">
                                <PortofolioItem
                                    link="https://murmuring-wave-59408.herokuapp.com/"
                                    name="Ctice 📚"
                                    repo="https://github.com/hrwire127/ctice"
                                    img="ctice"
                                    setLoading={setLoading}
                                />
                                <PortofolioItem
                                    link="https://glacial-waters-83977.herokuapp.com/"
                                    name="Opal ♦"
                                    repo="https://github.com/hrwire127/Opal"
                                    img="opal"
                                    setLoading={setLoading}
                                />
                            </div>
                        </div>
                        <div className="portofolio-container-diff">
                            <div className="small-row">
                                <PortofolioItem
                                    link="https://todo-list39.herokuapp.com/"
                                    name="Todo List 🔖"
                                    repo="https://github.com/hrwire127/todo-list"
                                    img="todolist"
                                    setLoading={setLoading}
                                />
                                <PortofolioItem
                                    link="https://yahtzee39.herokuapp.com/"
                                    name="Yahtzee 🎲"
                                    repo="https://github.com/hrwire127/yahtzee"
                                    img="yahtzee"
                                    setLoading={setLoading}
                                />
                            </div>
                            <div className="huge-row">
                                <PortofolioItem
                                    link="https://color-palette-998d.herokuapp.com/"
                                    name="Palette Generator 🎨"
                                    repo="https://github.com/hrwire127/color-palette"
                                    img="palettegenerator"
                                    setLoading={setLoading}
                                    aspect
                                />
                            </div>
                        </div>
                        <div className="portofolio-container-normal">
                            <PortofolioItem
                                light
                                link="https://lights-out39.herokuapp.com/"
                                name="Light's Out 💡"
                                repo="https://github.com/hrwire127/lights-out"
                                img="lightsout"
                                setLoading={setLoading}
                                normal
                            />
                            <PortofolioItem
                                link="https://hangman39.herokuapp.com/"
                                name="Hangman🧵"
                                repo="https://github.com/hrwire127/hangman"
                                img="hangman"
                                setLoading={setLoading}
                                normal
                            />
                            <PortofolioItem
                                link="https://todo-hooks39.herokuapp.com/"
                                name="Todo 2 📑"
                                repo="https://github.com/hrwire127/todo-hooks"
                                img="todolist2"
                                setLoading={setLoading}
                                normal
                            />
                        </div>
                        <div className="portofolio-container-normal">
                            <PortofolioItem
                                light
                                link="https://deck-cards39.herokuapp.com/"
                                name="Cards Deck 🃏"
                                repo="https://github.com/hrwire127/deck-cards"
                                img="deckcard"
                                setLoading={setLoading}
                                normal
                            />
                            <PortofolioItem
                                link="https://dad-jokes31.herokuapp.com/"
                                name="Dad Jokes 🤣"
                                repo="https://github.com/hrwire127/dad-jokes"
                                img="dadjokes"
                                setLoading={setLoading}
                                normal
                            />
                            <div className="item-normal" />
                        </div>
                    </section>
                </Animate>)
                : (<Animate animation="step-anim" start>
                    <section className="containers">
                        <PortofolioItem
                            link="https://murmuring-wave-59408.herokuapp.com/"
                            name="Ctice 📚"
                            repo="https://github.com/hrwire127/ctice"
                            img="ctice"
                            setLoading={setLoading}
                        />
                        <PortofolioItem
                            link="https://yahtzee39.herokuapp.com/"
                            name="Yahtzee 🎲"
                            repo="https://github.com/hrwire127/yahtzee"
                            img="yahtzee"
                            setLoading={setLoading}
                        />
                        <PortofolioItem
                            link="https://glacial-waters-83977.herokuapp.com/"
                            name="Opal ♦"
                            repo="https://github.com/hrwire127/Opal"
                            img="opal"
                            setLoading={setLoading}
                        />
                        <PortofolioItem
                            link="https://color-palette-998d.herokuapp.com/"
                            name="Palette Generator 🎨"
                            repo="https://github.com/hrwire127/color-palette"
                            img="palettegenerator"
                            setLoading={setLoading}
                        />
                        <PortofolioItem
                            link="https://lights-out39.herokuapp.com/"
                            name="Light's Out 💡"
                            repo="https://github.com/hrwire127/lights-out"
                            img="lightsout"
                            setLoading={setLoading}
                        />
                        <PortofolioItem
                            link="https://hangman39.herokuapp.com/"
                            name="Hangman🧵"
                            repo="https://github.com/hrwire127/hangman"
                            img="hangman"
                            setLoading={setLoading}
                        />
                        <PortofolioItem
                            link="https://todo-hooks39.herokuapp.com/"
                            name="Todo 2 📑"
                            repo="https://github.com/hrwire127/todo-hooks"
                            img="todolist2"
                            setLoading={setLoading}
                        />
                        <PortofolioItem
                            link="https://deck-cards39.herokuapp.com/"
                            name="Cards Deck 🃏"
                            repo="https://github.com/hrwire127/deck-cards"
                            img="deckcard"
                            setLoading={setLoading}
                        />
                    </section>
                </Animate>)
            }

            {loading &&
                (<div className="cover" >
                    <Spinner />
                </div>)}
        </section >
    </div >
    )
}

export default Portofolio