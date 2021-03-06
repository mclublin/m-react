import React, {useState} from "react";

const FormularzKontakotwy = () => {

  const [kontaktImie,setKontaktImie] = useState("");
  const [kontaktNazwisko,setKontaktNazwisko] = useState("");
  const [kontaktEmail,setKontaktEmail] = useState("");
  const [kontaktTelefon,setKontakTelefon] = useState("");
  const [kontaktPlec,setKontaktPlec] = useState("M");
  const [kontaktZgodyMarketingowe,setKontaktZgodyMarketingowe] = useState("");
  const [kontaktZgodaRodo,setKontaktZgodaRodo] = useState("");

  const handlerOnSubmitKontakt = event =>{
    event.preventDefault();

  }

  const handlerOnChangeKontakt = event =>{
    event.preventDefault();
    const wartosc = event.currentTarget.value;
    const nazwa = event.currentTarget.name;

    switch (nazwa){
      case "kontaktImie":
      setKontaktImie(wartosc);
      break;
      case "kontaktNazwisko":
      setKontaktNazwisko(wartosc);
      break;
      case "kontaktEmail":
      setKontaktEmail(wartosc);
      break;
      case "kontaktTelefon":
        setKontakTelefon(wartosc);
      break;
      case "kontaktPlec":
      setKontaktPlec(wartosc);
      break;
    }


  }


  return (
    <form>
      <fieldset>
        <legend>Dane kontaktowe:</legend>
        <label>Imie:</label>
        <input type="text" name="kontaktImie" 
        value={kontaktImie}
         onChange={handlerOnChangeKontakt}/>
        <br />
        <label>Nazwisko:</label>
        <input type="text" name="kontaktNazwisko" 
        value={kontaktNazwisko}
        onChange={handlerOnChangeKontakt}/>
        <br />
        <label>Email:</label>
        <input type="text" name="kontaktEmail" 
        value={kontaktEmail}
        onChange={handlerOnChangeKontakt}/>
        <br />
        <label>Telefon:</label>
        <input type="text" name="kontaktTelefon" 
        value={kontaktTelefon}
        onChange={handlerOnChangeKontakt}/>
        <br />
        <label>Płeć:</label>
        <br />
        <label>
          <input type="radio" name="kontaktPlec" value="K" 
          {kontaktPlec =="K" ? "checked" : ""}
          onChange={handlerOnChangeKontakt}/>
          Kobieta
        </label>
        <br />
        <label>
          <input type="radio" name="kontaktPlec" value="M" 
          onChange={handlerOnChangeKontakt}/>
          Mężczyzna
        </label>
        <br />
      </fieldset>
      <fieldset>
        <legend>Zgody marketingowe:</legend>
        <label>zgoda na marketing tel</label>
        <input
          type="checkbox"
          name="zgodaMarketing"
          value="zgodaMarketingTelefoniczny"
          onChange={handlerOnChangeKontakt}
        />
        <br />
        <label>zgoda na marketing email</label>
        <input
          type="checkbox"
          name="kontaktZgodaMarketing"
          value="zgodaMarketingEmail"
          onChange={handlerOnChangeKontakt}
        />
      </fieldset>
      <fieldset>
        <legend>Zgoda RODO:</legend>

        <input checked type="radio" name="kontaktZgodaRodo" value="tak"
        onChange={handlerOnChangeKontakt} />
        <label>TAK</label>
        <br />

        <input type="radio" name="kontaktZgodaRodo" value="nie" 
        onChange={handlerOnChangeKontakt}/>
        <label>NIE</label>
      </fieldset>
      <input type="submit" value="Wyslij" />
    </form>
  );
};

export default FormularzKontakotwy;
