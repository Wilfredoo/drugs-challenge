import React from "react";
import "./App.css";

// Drugs Challenge - level 4

// INSTRUCTIONS;
// In the folder src, create 6 different files called: alcohol.js - weed.js - ayahuasca.js - cocaine.js - crack.js - heroin.js
// Decompose the app component according to the structure below, move each piece of code to their respective file.

// app
//    alcohol
//    weed
//    ayahuasca
//    cocaine
//    crack
//    heroin

function App() {
  return (
    <div className="App">
      <h3>Alcohol</h3>
      <p>
        Any of a class of chemical compounds having the general formula ROH,
        where R represents an alkyl group and -OH a hydroxyl group. Most
        commonly refers to ethanol, which you can drink to forget how much your
        life sucks, and methanol, which you can drink when you remember.
      </p>
      <h3>Weed</h3>
      <p>
        Cannabis, also known as marijuana among other names, is a psychoactive
        drug from the Cannabis plant used primarily for medical or recreational
        purposes.
      </p>
      <h3>Ayahuasca</h3>
      <p>
        Extremely potent heaven-sent psychedelic brew that opens the door to
        spiritual reality and takes you on the magical journey to show you God,
        angels and nature spirits.
      </p>
      <h3>Heroin</h3>
      <p>
        A white, odorless, bitter crystalline compound, C17H17NO(C2H3O2)2, that
        is derived from morphine and is a highly addictive narcotic. Also called
        diacetylmorphine.
      </p>
      <h3>Crack</h3>
      <p>
        As a rule of thumb, it is profoundly unwise to take crack-cocaine. The
        brain has evolved a truly vicious set of negative feedback mechanisms.
        Their functional effect is to stop us from being truly happy for long.
        Nature is cruelly parsimonious with pleasure.
      </p>
      <h3>Cocaine</h3>
      <p>
        Cocaine, also known as coke, is a strong stimulant most frequently used
        as a recreational drug. It is commonly snorted, inhaled as smoke, or
        dissolved and injected into a vein. Mental effects may include an
        intense feeling of happiness, loss of contact with reality, or
        agitation.
      </p>
      <p className="footer">
        These are just Wilfredo's opinions on drugs and don't represent the
        opinion of Wild Code School. Copyright 2020.
      </p>
    </div>
  );
}

export default App;
