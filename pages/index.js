import Image from "next/image";
import highfiveImage from "../public/highfiveImage.png";
import React, { useState } from 'react'


export default function Home() {

  const listText = [
    "Begrijp welke keuzes jij hebt tijdens je studie",
    "Kom te weten wat je moet doen als je op stage gaat of gaat afstuderen",
    "Praat met bedrijven om te weten te komen waar ze zich op richten en wat voor IT-activiteiten en werkzaamheden daarbij komen kijken",
    "Kom in contact met IT-bedrijven uit de regio"
  ];

  const topicItems = [
    {
      title: "Voorlichting Afstudeerprogramma’s",
      dropdownContent: `Het vierde jaar (semester 7 en 8) bestaat uit één semester onderwijs en daarop aansluitend een semester afstuderen.
    Die twee semesters staan niet los van elkaar. De afstudeeropdracht moet inhoudelijk aansluiten bij het onderwijs van semester 7.
    
    Het afstudeerprogramma sluit inhoudelijk en procedureel aan bij het afstuderen en bereid je voor op het afstuderen waarbinnen je zelfstandig aan een complexe opdracht voor een externe organisatie werkt. De keuze voor het vierde jaar maak je al in semester 6.
    
    Daarbij kan je kiezen uit 7 afstudeerprogramma's. Dus verdiep je goed en kom naar de voorlichtingssessies van de afstudeerprogramma's die op jouw shortlist staan. Haal bij de welkomstbalie je toegangstickets voor de sessie's die jij bij wilt wonen.`
    },
    {
      title: "Voorlichting stage en afstuderen",
      dropdownContent:
        `Met het zoeken van een stage start je al in het tweede studiejaar. Eind semester 4 moet je stage-opdracht zijn goedgekeurd. Hoe pak je dat aan? Welke stappen moet je daarvoor zetten? Wanneer is een opdrachtgeschikt? Al deze vragen worden beantwoord in de voorlichtingssessies over de stage.
    
    Ook voor afstuderen geldt dat er een procedure moet worden gevolgd waarin de opdracht wordt gekeurd en er beoordelaars worden toegewezen. Hoe die procedure eruitziet en hoe je die procedure in gang zet, daarvertellen afstudeercoördinatoren je alles over in de voorlichtingssessies over afstuderen.
    
    Haal bij de welkomstbalie je toegangstickets voor de sessies die jij bij wilt wonen.`
    },
    {
      title: "Professionele adviezen",
      dropdownContent:
        `Krijg advies van professionele jobcoaches over hoe je je Linkedin-profiel slim inricht en laat een profielfoto maken door een professionele fotograaf. Zo kan je je nog beter positioneren voor een opdracht of baan die aansluit bij jouw wensen.
  
  Ben je bezig met het schrijven van een stageplan of een afstudeerplan? Leg deze voor aan een docent en ga ter plekke aan de slag om het naar een hoger niveau te tillen.
  
  Heb jij autisme, dyslexia of een andere superkracht en wil je weten hoe je ie optimaal kunt inzetten om succesvol te studeren? Dan staan de SLB-docenten met hun eigen superkrachten, de zogenaamde Special Educational Needs- begeleiders (SEN) voor je klaar om je te helpen.`
    },
    {
      title: "Bedrijvenmarkt",
      dropdownContent:
        `Zelf contact leggen met een bedrijf voor een stage- of afstudeeropdracht of voor een baan, dat is moeilijk. Op de bedrijvenmarkt staan ze op je te wachten! Geen drempels meer. Jij weet wat je nodig hebt, zij weten waarvoor je komt. Maak kennis met alle 50 deelnemende bedrijven. Ben je eerste- of tweedejaars, geen probleem.
  
  Er staan ook bedrijven die bijbaantjes in de aanbieding hebben. Je hoeft niet te wachten tot je derdejaars-stage om praktijkervaring op te doen! Geen toegangsticket nodig voor de bedrijvenmarkt!`
    },
    {
      title: "Gezelligheid",
      dropdownContent: `We sluiten de dag af met een borrel. Studievereniging SIM zorgt voor de muziek.`
    }
  ];

  const [isOpen, setIsOpen] = useState([]);

  const handleIsOpenClick = (index) => {
    setIsOpen((prevIndexes) => {
      if (prevIndexes.includes(index)) {
        // Als de dropdown is already open, close it
        return prevIndexes.filter((i) => i !== index);
      } else {
        // Als de dropdown is closed, open it
        return [...prevIndexes, index];
      }
    });
  };

  return (
    <div className="main-container flex flex-row sm:flex-col md:flex-col lg:flex-col items-left justify-normal w-full h-screen pl-2">

      <div className="text-container flex-1 pt-5 pr-5 pb-20 w-full sm:w-auto sm:order-2 md:w-auto md:order-2 lg:w-auto lg:order-2">
        <h1 className="heading-container text-4xl font-bold text-darkblue mb-2">Voor Studenten</h1>
        <h2 className="subheading-container text 2xl font-normal text-lightblue">DE HAAGSE ICT-CARRIÉREDAG: SPECIAAL VOOR HBO-ICT-STUDENTEN! EEN DAG VOL MOGELIJKHEDEN:</h2>

        <div className="list_items">
          <ul className="text-darkblue text-base leading-6 grid gap-2 mt-5">
            {listText.map((item, index) => (
              <li key={index}>
                <svg
                  className="w-5 h-5 mr-2 inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 12"
                  fill="none"
                >
                  <path
                    fill="#00A5B8"
                    d="M15.4982 3.03111L8.23155 10.3444L6.8671 11.7178C6.6871 11.9 6.43599 12 6.18488 12C5.93377 12 5.68266 11.9 5.50266 11.7178L4.13821 10.3444L0.502656 6.68667C0.322656 6.50444 0.222656 6.25333 0.222656 6C0.222656 5.74667 0.322656 5.49556 0.502656 5.31333L1.8671 3.94C2.0471 3.75778 2.29821 3.65778 2.54932 3.65778C2.80043 3.65778 3.05155 3.75778 3.23155 3.94L6.18266 6.92L12.7671 0.282222C12.9471 0.1 13.1982 0 13.4493 0C13.7004 0 13.9515 0.1 14.1315 0.282222L15.496 1.65556C15.676 1.83778 15.776 2.08889 15.776 2.34222C15.776 2.59556 15.676 2.84667 15.496 3.02889L15.4982 3.03111Z"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <ul className="text-darkblue text-lg mt-10 font-bold">
            {topicItems.map((item, index) => (
              <li className="topic-item w-full pt-4 pr-1 pb-4 pl-1 border-t border-b border-solid	border-lightgray" key={index}>
                <div className="topicItem-container flex items-center justify-between">
                  <span className="hover:text-lightblue transition-transform transform-gpu hover:translate-x-1 hover:translate-y-1"
                    onClick={() => handleIsOpenClick(index)}>
                    {item.title}
                  </span>

                  <button
                    className="dropdown-button ml-10"
                    onClick={() => handleIsOpenClick(index)}
                    type="button"
                  >
                    <svg
                      className={`w-3.5 h-3.5 mr-2 ms-3 ${isOpen.includes(index) ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="#262E37"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>
                </div>

                <div className={isOpen.includes(index) ? 'dropdown-content show' : 'dropdown-content'}>
                  <div className="innertopicText-container text-darkblue text-base font-light whitespace-pre-line	">
                    {item.dropdownContent}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>

      <div className="img-container flex-1 gap-1 pt-2 xl:pl-10 2xl:pl-10 pr-2 w-full sm:w-auto sm:order-1 md:w-auto md:order-1 lg:w-auto lg:order-1">  
        <Image src={highfiveImage}
          alt="Students high fiving each other"
          width={600}
          height={540}
          priority
          as="image"
          className=" xl:pl-10 2xl:pl-10 3xl:pl-10 w-full h-auto sm:w-359 sm:h-355 md:w-359 md:h-360 lg:w-600 lg:h-540"
        />
      </div>


    </div>
  )
}

