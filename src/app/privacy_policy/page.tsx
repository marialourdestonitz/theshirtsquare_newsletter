"use client";
import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const PrivatePolicy = () => {
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
        Datenschutzerklärung
      </div>
      <div className="flex flex-col text-white text-s space-y-5 m-5">
        <h2> Erklärung zur Informationspflicht </h2>
        <div>
          <p className="font-bold">Datenschutzerklärung</p>
          <p className="text-s">
            {" "}
            In folgender Datenschutzerklärung informieren wir Sie über die
            wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer
            Webseite. Wir erheben und verarbeiten personenbezogene Daten nur auf
            Grundlage der gesetzlichen Bestimmungen (Datenschutzgrundverordnung,
            Telekommunikationsgesetz 2003).{" "}
          </p>
          <p>
            Sobald Sie als Benutzer auf unsere Webseite zugreifen oder diese
            besuchen wird Ihre IP-Adresse, Beginn sowie Beginn und Ende der
            Sitzung erfasst. Dies ist technisch bedingt und stellt somit ein
            berechtigtes Interesse iSv Art 6 Abs 1 lit f DSGVO.{" "}
          </p>
        </div>
        <div>
          <h5 className="font-bold">Kontakt mit uns</h5>
          <p>
            Wenn Sie uns, entweder über unser Kontaktformular auf unserer
            Webseite, oder per Email kontaktieren, dann werden die von Ihnen an
            uns übermittelten Daten zwecks Bearbeitung Ihrer Anfrage oder für
            den Fall von weiteren Anschlussfragen für sechs Monate bei uns
            gespeichert. Es erfolgt, ohne Ihre Einwilligung, keine Weitergabe
            Ihrer übermittelten Daten.
          </p>
        </div>
        <div>
          <h5 className="font-bold">Datenspeicherung </h5>
          <p>
            Im Rahmen der Erleichterung des Einkaufsvorganges und zur späteren
            Vertragsabwicklung werden vom Webshop-Betreiber im Rahmen von
            Cookies die IP-Adresse des Anschlussinhabers gespeichert, ebenso wie
            Name, Anschrift, E-Mail Adresse, Zahlungsinformationen,
            Keditkartendaten, Kontodaten.{" "}
          </p>
          <p>
            Für die Vertragsabwicklung werden auch folgende Daten bei uns
            gespeichert:
            <span>
              Name, Anschrift, E-Mail Adresse, Zahlungsinformationen,
              Keditkartendaten, Kontodaten.
            </span>
          </p>
          <p>
            Die von Ihnen bereitgestellten Daten sind für die Vertragserfüllung
            und zur Durchführung vorvertraglicher Maßnahmen erforderlich. Ein
            Vertragsabschluss ohne dieser Daten ist nicht möglich. Eine
            Übermittlung der erhobenen Daten an Dritte erfolgt nicht, mit
            Ausnahme der Übermittlung von Zahlungsdaten (Kreditkartendaten) an
            die abwickelnden Bankinstitute/Zahlungsdienstleister zum Zwecke der
            Abbuchung des Einkaufspreises, an das von uns Beauftragte
            Versandunternehmen (Transportunternehmen), welches mit der
            Zustellung der Ware beauftragt ist und unseren Steuerberater zur
            Erfüllung unserer steuerrechtlichen Verpflichtungen.{" "}
          </p>{" "}
          <p>
            Sollten Sie den Einkaufsvorgang abbrechen, werden diese bei uns
            gespeicherten Daten gelöscht. Solle ein Vertragsabschluss zustande
            kommen, werden sämtliche Daten, resultierend aus dem
            Vertragsverhältnis, bis zum Ablauf der steuerrechtlichen
            Aufbewahrungsfirst (7 Jahre) gespeichert. Der übermittelte Name, die
            Anschrift, gekaufte Waren und Kaufdatum werden darüber hinaus bis
            zum Ablauf der Produkthaftung (10 Jahre) gespeichert. Die
            Datenverarbeitung erfolgt auf Basis der gesetzlichen Bestimmungen
            des § 96 Abs 3 TKG sowie des Art 6 Abs 1 lit a (Einwilligung)
            und/oder lit b (notwendig zur Vertragserfüllung) der DSGVO.
          </p>
        </div>

        <div>
          <h5 className="font-bold">Cookies</h5>
          <p>
            Unsere Website verwendet so genannte Cookies. Dabei handelt es sich
            um kleine Textdateien, die mit Hilfe des Browsers auf Ihrem Endgerät
            abgelegt werden. Sie richten keinen Schaden an. Wir nutzen Cookies
            dazu, unser Angebot nutzerfreundlich zu gestalten. Einige Cookies
            bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen. Sie
            ermöglichen es uns, Ihren Browser beim nächsten Besuch
            wiederzuerkennen. Wenn Sie dies nicht wünschen, so können Sie Ihren
            Browser so einrichten, dass er Sie über das Setzen von Cookies
            informiert und Sie dies nur im Einzelfall erlauben. Bei der
            Deaktivierung von Cookies kann die Funktionalität unserer Website
            eingeschränkt sein.
          </p>
        </div>
        <div>
          <h5 className="font-bold">Google Fonts</h5>
          <p>
            Unsere Website verwendet Schriftarten von „Google Fonts“. Der
            Dienstanbieter dieser Funktion ist:{" "}
          </p>
          <ul className="space-y-2">
            <li>
              Google Ireland Limited Gordon House, Barrow Street Dublin 4.
              Ireland{" "}
            </li>{" "}
            <li>
              <p className="font-semibold italic">Tel: +353 1 543 1000</p>
              <p>
                Beim Aufrufen dieser Webseite lädt Ihr Browser Schriftarten und
                speichert diese in den Cache. Da Sie, als Besucher der Webseite,
                Daten des Dienstanbieters empfangen kann Google unter Umständen
                Cookies auf Ihrem Rechner setzen oder analysieren.
              </p>
              <p>
                Die Nutzung von „Google-Fonts“ dient der Optimierung unserer
                Dienstleistung und der einheitlichen Darstellung von Inhalten.
                Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs.
                1 lit. f DSGVO dar.
              </p>
              <p>
                Weitere Informationen zu Google Fonts erhalten Sie unter
                folgendem Link:
              </p>
              <ul className="mt-2">
                <li className="text-blue-600 italic">
                  <a href="https://developers.google.com/fonts/faq">
                    https://developers.google.com/fonts/faq
                  </a>
                </li>
                <li>
                  Weitere Informationen über den Umgang mit Nutzerdaten von
                  Google können Sie der Datenschutzerklärung entnehmen:
                </li>
                <li className="text-blue-600 italic">
                  <a href="https://policies.google.com/privacy?hl=de">
                    {" "}
                    https://policies.google.com/privacy?hl=de{" "}
                  </a>
                </li>
                <li>
                  <p>
                    Google verarbeitet die Daten auch in den USA, hat sich
                    jedoch dem <br /> EU-US Privacy-Shield unterworfen.
                  </p>
                  <p className="text-blue-600 italic">
                    {" "}
                    <a href="https://www.privacyshield.gov/EU-US-Framework">
                      https://www.privacyshield.gov/EU-US-Framework
                    </a>
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold ">Server-Log Files</h5>
          <p>
            {" "}
            Diese Webseite und der damit verbundene Provider erhebt im Zuge der
            Webseitennutzung automatisch Informationen im Rahmen sogenannter
            „Server-Log Files“. Dies betrifft insbesondere:
          </p>
          <ul className="italic ">
            {" "}
            <li> IP-Adresse oder Hostname </li>{" "}
            <li> den verwendeten Browser </li>{" "}
            <li> Aufenthaltsdauer auf der Webseite sowie Datum und Uhrzeit </li>{" "}
            <li> aufgerufene Seiten der Webseite </li>{" "}
            <li> Spracheinstellungen und Betriebssystem </li>{" "}
            <li>
              {" "}
              „Leaving-Page“ (auf welcher URL hat der Benutzer die Webseite
              verlassen){" "}
            </li>{" "}
            <li> ISP (Internet Service Provider) </li>{" "}
          </ul>
          <p>
            {" "}
            Der Webseitenbetreiber behält es sich vor, im Falle von
            Bekanntwerden rechtswidriger Tätigkeiten, diese Daten auszuwerten
            oder zu überprüfen.{" "}
          </p>
        </div>
        <div>
          {" "}
          <h5 className="font-bold">Newsletter</h5>
          <p>
            Sie haben die Möglichkeit, über unsere Website unseren Newsletter zu
            abonnieren. Hierfür benötigen wir Ihre E-Mail-Adresse und ihre
            Erklärung, dass Sie mit dem Bezug des Newsletters einverstanden
            sind.
          </p>
          <p>
            Wenn Sie die Möglichkeit nutzen unseren Newsletter zu abonnieren,
            wird Ihre Email-Adresse und Ihre Zustimmung/Einverständniserklärung
            über den Bezug des Newsletters benötigt. In Folge auf die Anmeldung
            zu unserem Newsletter, erhalten Sie von uns ein Bestätigungs-Email
            mit einem Link zur Anmeldebestätigung. Eine Stornierung des Abos ist
            jederzeit möglich. Senden Sie die Stornierung bitte an unsere
            Email-Adresse:
            <span className="text-semibol text-blue-500 italic">
              service@theshirtsquare.com.
            </span>
          </p>
          <p>
            Ihre Daten im Zusammenhang mit dem Newsletter-Versand werden im
            Falle einer Stornierung umgehend von uns gelöscht. Die
            Rechtmäßigkeit der erfolgten Datenverarbeitung bis zum Widerruf,
            welche aufgrund der Zustimmung passiert ist, wird nicht berührt.
          </p>
        </div>
        <div>
          <h5 className="font-bold">Ihre Rechte als Betroffener</h5>
          <p>
            Sie als Betroffener haben bezüglich Ihrer Daten, welche bei uns
            gespeichert sind grundsätzlich ein Recht auf:
          </p>
          <ul className="italic">
            <li>Auskunft</li>
            <li>Löschung der Daten</li>
            <li>Berichtigung der Daten</li>
            <li>Übertragbarkeit der Daten</li>
            <li>Wiederruf und Widerspruch zur Datenverarbeitung</li>
            <li>Einschränkung</li>
          </ul>
          <p>
            Wenn sie vermuten, dass im Zuge der Verarbeitung Ihrer Daten
            Verstöße gegen das Datenschutzrecht passiert sind, so haben Sie die
            Möglichkeit sich bei uns
            <span className="text-blue-500 italic">
              (service@theshirtsquare.com)
            </span>{" "}
            oder der Datenschutzbehörde zu beschweren.
          </p>
        </div>
        <div>
          {" "}
          <h5 className="font-bold">
            Sie erreichen uns unter folgenden Kontaktdaten:
          </h5>
          <h5>Webseitenbetreiber:</h5>
          <ul className="italic">
            <li>Daniel Tonitz</li>
            <li>Telefonnummer: 0043 664 733 29 844</li>
            <li> Email: service@theshirtsquare.com</li>
            <li>
              {" "}
              Quelle:
              <a
                className="text-blue-500"
                href="https://www.rechtstexte-generator.at/dsgvo-generator-oesterreich/"
              >
                Datenschutz DSGVO Generator
              </a>
            </li>
            <li>
              in Kooperation mit:
              <Link
                href="http://ortner-rechtsanwalt.at/"
                className="italic text-blue-700"
              >
                <span>http://ortner-rechtsanwalt.at/ - </span>
                <span>Rechtsanwalt Wien Ortner</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PrivatePolicy;
