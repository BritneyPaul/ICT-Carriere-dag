import Image from "next/image";
import highfiveImage from "../public/highfiveImage.png";
import checkmark from "../public/checkmark.png";
import React, { useState } from 'react'


export default function Home() {

  const listText = [
    "Begrijp welke keuzes jij hebt tijdens je studie",
    "Kom te weten wat je moet doen als je op stage gaat of gaat afstuderen",
    "Praat met bedrijven om te weten te komen waar ze zich op richten en wat voor IT-activiteiten en werkzaamheden daarbij komen kijken",
    "Kom in contact met IT-bedrijven uit de regio"
  ];

  const topicItems = [
    "Voorlichting Afstudeerprogramma’s",
    "Voorlichting stage en afstuderen",
    "Professionele adviezen",
    "Bedrijvenmarkt",
    "Gezelligheid"
  ];

  const [isOpen, setIsOpen] = useState();

  const handleIsOpenClick = (index)=>{
    setIsOpen(isOpen === index ? null:index);
  }

  return (
    <div className="flex items-left justify-normal w-full h-screen pt-25 pr-50 pb-75 pl-0 ml-10">

      <div className="float-left w-6/12 pt-20 pr-60 pb-20 pl-0">
        <h1 className="text-4xl font-bold text-darkblue mb-2">Voor Studenten</h1>
        <h2 className="text 2xl font-normal text-lightblue gap-3 ">DE HAAGSE ICT-CARRIÉREDAG: SPECIAAL VOOR HBO-ICT-STUDENTEN! EEN DAG VOL MOGELIJKHEDEN:</h2>

        <div className="list_items">
          <ul className="text-darkblue text-base leading-6 gap-3 mt-5">
            {listText.map((item, index) => (
              <li key={index}>
                <Image src={checkmark} alt="Checkmark" className="w-3 h-3 mr-2 inline-block" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <ul className="text-darkblue text-lg mt-5 font-bold">
          {topicItems.map((item, index) => (
          <li className="list-item " key={index}>
            <div className="topicItem-container flex items-center justify-between">
              <span className="hover:text-lightblue">{item}</span>
            <button
              className="dropdown-button ml-10"
              onClick={() => handleIsOpenClick(index)}
              type="button"
            >
              <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="#262E37"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            </div>
            <div className={isOpen === index ? 'dropdown-content show' : 'dropdown-content'}>
              <div className="text-darkblue text-base font-light">
                Het vierde jaar (semester 7 en 8) bestaat uit één semester onderwijs en daarop aansluitend een semester afstuderen.
                Die twee semesters staan niet los van elkaar. De afstudeeropdracht moet inhoudelijk aansluiten bij het onderwijs van semester 7.
                <br/>
                <br/>
                Het afstudeerprogramma sluit inhoudelijk en procedureel aan bij het afstuderen en bereid je voor op het 
                afstuderen waarbinnen je zelfstandig aan een complexe opdracht voor een externe organisatie werkt. De keuze voor het vierde jaar maak je al in semester 6.
                <br/>
                <br/>
                Daarbij kan je kiezen uit 7 afstudeerprogramma's. Dus verdiep je goed en kom naar de voorlichtingssessies van de afstudeerprogramma's die op jouw shortlist staan. Haal bij 
                de welkomstbalie je toegangstickets voor de sessie's die jij bij wilt wonen.   
              </div>
            </div>
          </li>
        ))}
          </ul>
        </div>
        
      </div>

      <div className="float-left gap-1 pt-20 pr-0 pb-20 pl-0">
        <Image src={highfiveImage}
          alt="Students high fiving each other"
          width={700}
          height={640}
        />
      </div>


    </div>
  )
}
