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
    <div className="main-container flex items-left justify-normal w-full h-screen pt-25 pr-50 pb-75 pl-0 ml-10">

      <div className="text-container float-left w-6/12 pt-20 pr-60 pb-20 pl-0">
        <h1 className="heading-container text-4xl font-bold text-darkblue mb-2">Voor Studenten</h1>
        <h2 className="subheading-container text 2xl font-normal text-lightblue gap-3 ">DE HAAGSE ICT-CARRIÉREDAG: SPECIAAL VOOR HBO-ICT-STUDENTEN! EEN DAG VOL MOGELIJKHEDEN:</h2>

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
          <li className="topic-item" key={index}>
            <div className="topicItem-container flex items-center justify-between">
              <span className="hover:text-lightblue">{item.title}</span>
            <button
              className="dropdown-button ml-10"
              onClick={() => handleIsOpenClick(index)}
              type="button"
            >
              <svg
                  className={`w-2.5 h-2.5 mr-2 ms-3 ${isOpen.includes(index) ? 'rotate-180' : ''}`}
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

      <div className="img-container float-left gap-1 pt-20 pr-0 pb-20 pl-0">
        <Image src={highfiveImage}
          alt="Students high fiving each other"
          width={700}
          height={640}
        />
      </div>


    </div>
  )
}
