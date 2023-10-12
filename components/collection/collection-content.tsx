import Button from "../button";
import CollectionForm from "./collection-form";
import Container from "../container";
import CollectionFormEducation from "./collection-form-education";

interface Props {}

export default function CollectionContent({}: Props) {
  return (
    <section className="shadow-sm">
      <Container>
        <div className="py-10 md:py-20 md:pb-10">
          <div className="flex flex-col gap-10 md:gap-20 md:flex-row">
            <div className="w-full md:w-1/2">
              <h2 className="leading-tight">Uitbreiding & aanvulling van de museumcollectie?</h2>
              <p className="pb-5">
                Regelmatig wordt de collectie aangevuld met nieuwe objecten,
                veelal afkomstig van particuliere schenkingen. Heeft u artikelen
                van verbruikscoöperaties? Ons museum is blij mee! Wij komen
                graag met u in contact, vul het formulier in en wij nemen
                contact met u op. Langskomen mag natuurlijk ook, u bent van
                harte welkom!
              </p>
              <CollectionForm />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-start">
              <div>
                <h2 className="leading-tight">Het Nationaal Coöperatie Museum als kenniscentrum</h2>
                <p className="pb-5">
                  Naast de geëtaleerde voorwerpen en objecten beschikt het
                  museum over een grote hoeveelheid documenten van
                  verbruikscoöperaties. Deze databank is op verzoek beschikbaar
                  voor geïnteresseerden, zoals studenten en
                  onderzoeksinstanties.
                </p>
              </div>
              <CollectionFormEducation />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
