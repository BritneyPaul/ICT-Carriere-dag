import Image from "next/image";
import highfiveImage from "../public/highfiveImage.png";
import checkmark from "../public/checkmark.png";


export default function Home() {
  return (
    <div className="flex justify-start w-full h-screen pt-25 pr-50 pb-75 pl-10">

      <h1 className="text-4xl font-bold text-darkblue ">Voor Studenten</h1>
      <h2 className="text 2xl text-lightblue gap-3 ">DE HAAGSE ICT-CARRIÉREDAG: SPECIAAL VOOR HBO-ICT-STUDENTEN! EEN DAG VOL MOGELIJKHEDEN:</h2>
      
      <div className="list_items">
        <ul className="text-darkblue gap-3">
          <Image src={checkmark} alt="checkmark" width={16} height={16}/> 
          <li >Begrijp welke keuzes jij hebt tijdens je studie</li>
          <li>Kom te weten wat je moet doen als je op stage gaat of gaat afstuderen</li>
          <li>Praat met bedrijven om te weten te komen waar ze zich op richten en wat voor IT-activiteiten en werkzaamheden daarbij komen kijken</li>
          <li>Kom in contact met IT-bedrijven uit de regio</li>
        </ul>
      </div>

      <div class="list_container container grid">
        <div>
          {/* --=====list 1=========-- */}
          <div className="list-content list-open">
            <div className="list-header">
              <i className="uil uil-brackets-curly list-icon"></i>

                <h3 className="text-lg text-darkblue">Voorlichting Afstudeerprogramma’s</h3>

              <i className="uil uil-angle-down list-arrow"></i>
            </div>
          </div>

          {/* --=====list 2=========-- */}
          <div className="list-content list-open">
            <div className="list-header">
              <i className="uil uil-brackets-curly list-icon"></i>

                <h3 className="text-lg text-darkblue">Voorlichting stage en afstuderen </h3>

              <i className="uil uil-angle-down list-arrow"></i>
            </div>
          </div>

          {/* --=====list 3=========-- */}
          <div className="list-content list-open">
            <div className="list-header">
              <i className="uil uil-brackets-curly list-icon"></i>

                <h3 className="text-lg text-darkblue">Professionele adviezen </h3>

              <i className="uil uil-angle-down list-arrow"></i>
            </div>
          </div>

          {/* --=====list 4=========-- */}
          <div className="list-content list-open">
            <div className="list-header">
              <i className="uil uil-brackets-curly list-icon"></i>

                <h3 className="text-lg text-darkblue">Bedrijvenmarkt</h3>

              <i className="uil uil-angle-down list-arrow"></i>
            </div>
          </div>

          {/* --=====list 5=========-- */}
          <div className="list-content list-open">
            <div className="list-header">
              <i className="uil uil-brackets-curly list-icon"></i>

                <h3 className="text-lg text-darkblue">Gezelligheid</h3>

              <i className="uil uil-angle-down list-arrow"></i>
            </div>
          </div>

        </div>

      </div>

      <div >
        <Image src={highfiveImage}
          alt="Students high fiving each other"
          width={700} 
          height={640}
          />
      </div>


    </div>
  )
}
