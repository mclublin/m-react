import React, {useState} from "react";
import "./news.css";

const Newsletter = () => {

  const [adresEmail,setAdresEmail] = useState("");

  const handlerOnSubmit = event => {
    event.preventDefault();
    alert("Wysyłam formularz");
  }

  const handlerOnChangeEmail = event => {
    event.preventDefault();
    const adresEmail = event.currentTarget.value;
     
      const poprawneAdresy = ["test@test.pl","adres@adrres.pl"];

     if (poprawneAdresy.indexOf(adresEmail) > -1)  {
        setAdresEmail(adresEmail);
        console.log("Poprawny adres");

     } else {
       console.error("Błędny adres");
     }
  }

  return (
    <form id="newsletter" onSubmit={handlerOnSubmit}>
      <fieldset>
        <legend>zapisz sie</legend>
        <label for="adresEmail">Podaj email</label>
        <input
          type="email"
          name="email"
          id="adresEmail"
          placeholder="Podaje email"
          onChange={handlerOnChangeEmail}
          
        /><input id="signin" type="submit"  value="Zapisz  się" />
      </fieldset>
      <h5>Adres: {adresEmail}</h5>
    </form>
    
  );
};

export default Newsletter;
