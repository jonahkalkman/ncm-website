import Button from "./button";
import Container from "./container";

interface Props {}

export default function CollectionContent({}: Props) {
  return (
    <Container>
      <div className="py-20 pb-10">
        <div className="flex gap-40">
          <div className="w-1/2">
            <h2>Uitbreiding & aanvulling van de museumcollectie?</h2>
            <p className="pb-5">
              Regelmatig wordt de collectie aangevuld met nieuwe objecten,
              veelal afkomstig van particuliere schenkingen. Heeft u artikelen
              van verbruikscoöperaties? Ons museum is blij mee! Wij komen graag
              met u in contact, vul het formulier in en wij nemen contact met u
              op. Langskomen mag natuurlijk ook, u bent van harte welkom!
            </p>
            <Button title="Neem contact op" link="/contact" />
          </div>
          <div className="w-1/2">
            <h2>Het Nationaal Coöperatie Museum als kenniscentrum</h2>
            <p className="pb-5">
              Naast de geëtaleerde voorwerpen en objecten beschikt het museum
              over een grote hoeveelheid documenten van verbruikscoöperaties.
              Deze databank is op verzoek beschikbaar voor geïnteresseerden,
              zoals studenten en onderzoeksinstanties.
            </p>
            <Button title="Neem contact op" link="/contact" />
          </div>
        </div>
      </div>
    </Container>
  );
}
