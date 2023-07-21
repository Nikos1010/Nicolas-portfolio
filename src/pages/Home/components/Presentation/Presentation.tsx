import { useTranslate } from "../../../../hooks";

function Presentation() {
  const { translateWord } = useTranslate();
  return (
    <section>
      <h1>
        {translateWord("Hi")}, {translateWord("I_am")} Nicolás Montealegre
      </h1>
      <h2>{translateWord("Frontend_Developer")}</h2>

      <p>
        <strong>{translateWord("Impactful_phrase")}</strong>.{" "}
        {translateWord("describe_me")}
      </p>
      <p>
        <strong>{translateWord("service_from_colombia")}</strong>{" "}
        {translateWord("invitation_from_colombia")}
      </p>
    </section>
  );
}
export default Presentation;
