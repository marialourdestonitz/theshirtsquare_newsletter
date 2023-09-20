import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const Impressum = () => {
  return (
    <div className="flex flex-col px-2 sm:px-20 bg-[#303030] w-full min-h-screen overflow-hidden">
      <div className="fixed top-0 right-0 flex flex-col p-2 pointer-cursor bg-black bg-opacity-40 rounded ">
        <Link
          href={{
            pathname: "/",
          }}
        >
          <span className="text-[#007BFF] font-bold text-xs flex gap-2">
            {" "}
            <FaArrowRight size={20} color="white" />
            Back to Home
          </span>
        </Link>
      </div>
      <div className="flex  text-white text-2xl  sm:text-4xl  mt-10 items-center justify-center ">
        Impressum
      </div>
      <div className="flex flex-col text-white text-s space-y-5 m-5">
        <h2>
          Informationen und Offenlegung gemäß &sect;5 (1) ECG, &sect; 25
          MedienG, &sect; 63 GewO und &sect; 14 UGB{" "}
        </h2>
        <div>
          <h3 className="font-bold">Webseitenbetreiber:</h3>
          <p className="text-s"> Daniel Tonitz. </p>
        </div>
        <div>
          <h3 className="font-bold">Anschrift:</h3>
          <p>Karl-Marx-Str. 37, 9020 Klagenfurt am Wörthersee</p>
        </div>
        <div>
          <h3 className="font-bold">UID-Nr:</h3>
          <p>Kleinunternehmerregelung </p>
        </div>

        <div>
          <h5 className="font-bold">Gewerbeaufsichtbehörde:</h5>
          <p>Magistrat Klagenfurt</p>
        </div>
        <div>
          <h5 className="font-bold">Mitgliedschaften:</h5>
          <p>Kontaktdaten: </p>
          <ul className="space-y-2 italic text-blue-700">
            <li>Telefon: +4366473329844</li>
            <li>Email: theshirtsquare@gmail.com</li>
            <li>Fax:</li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold ">Anwendbare Rechtsvorschrift:</h5>
          <p> www.ris.bka.gv.at</p>
        </div>
        <div>
          {" "}
          <h5 className="font-bold">Berufsbezeichnung:</h5>
          <p>freies Gewerbe</p>
        </div>
        <div>
          <h5 className="font-bold">Online Streitbeilegung:</h5>
          <p>
            Verbraucher, welche in Österreich oder in einem sonstigen
            Vertragsstaat der ODR-VO niedergelassen sind, haben die Möglichkeit
            Probleme bezüglich dem entgeltlichen Kauf von Waren oder
            Dienstleistungen im Rahmen einer Online-Streitbeilegung (nach OS,
            AStG) zu lösen. Die Europäische Kommission stellt eine Plattform
            hierfür bereit:{" "}
            <span className="text-blue-700 italic">
              <Link
                href="https://ec.europa.eu/consumers/odr"
                className="italis text-blue-700"
              >
                {" "}
                https://ec.europa.eu/consumers/odr
              </Link>
            </span>{" "}
          </p>
        </div>
        <div>
          {" "}
          <h5 className="font-bold">Urheberrecht:</h5>
          <p>
            Die Inhalte dieser Webseite unterliegen, soweit dies rechtlich
            möglich ist, diversen Schutzrechten (z.B dem Urheberrecht). Jegliche
            Verwendung/Verbreitung von bereitgestelltem Material, welche
            urheberrechtlich untersagt ist, bedarf schriftlicher Zustimmung des
            Webseitenbetreibers
          </p>
        </div>
        <div>
          {" "}
          <h5 className="font-bold">Haftungsausschluss:</h5>
          <p>
            Trotz sorgfältiger inhaltlicher Kontrolle übernimmt der
            Webseitenbetreiber dieser Webseite keine Haftung für die Inhalte
            externer Links. Für den Inhalt der verlinkten Seiten sind
            ausschließlich deren Betreiber verantwortlich. Sollten Sie dennoch
            auf ausgehende Links aufmerksam werden, welche auf eine Webseite mit
            rechtswidriger Tätigkeit/Information verweisen, ersuchen wir um
            dementsprechenden Hinweis, um diese nach § 17 Abs. 2 ECG umgehend zu
            entfernen.
          </p>
          <p>
            Die Urheberrechte Dritter werden vom Betreiber dieser Webseite mit
            größter Sorgfalt beachtet. Sollten Sie trotzdem auf eine
            Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
            entsprechenden Hinweis. Bei Bekanntwerden derartiger
            Rechtsverletzungen werden wir den betroffenen Inhalt umgehend
            entfernen.
          </p>
        </div>
        <div>
          <h5 className="font-bold">Quelle: </h5>
          <p>
            <Link
              href="https://www.rechtstexte-generator.at/dsgvo-generator-oesterreich/"
              className="italic text-blue-700"
            >
              Datenschutz DSGVO Generator
            </Link>
          </p>
          <p>in Kooperation mit</p>
          <Link
            href="http://ortner-rechtsanwalt.at/"
            className="italic text-blue-700"
          >
            <span>http://ortner-rechtsanwalt.at/ - </span>
            <span>Rechtsanwalt Wien Ortner</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
