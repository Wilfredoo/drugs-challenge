import React from "react";
import "./App.css";

// Drugs Challenge - level 1
// INSTRUCTIONS
// Decompose the app component according to the following structure
// App
//    Drugs
//      OkDrugs
//        Alcohol
//            Vodka
//            Beer
//        Weed
//            Indica
//            Sativa
//        Ayahuasca
//    NotOkDrugs
//        Cocaine
//        Crack
//        Heroin

function App() {
  return (
    <div className="App">
      <div class="drugs">
        <p>Here is a bunch of info about drugs</p>
        <div className="okDrugs">
          <h2>Ok Drugs</h2>
          <p>These drugs are kind of ok. Just don't overdo it</p>
          <h3>Alcohol</h3>
          <p>
            Any of a class of chemical compounds having the general formula ROH,
            where R represents an alkyl group and -OH a hydroxyl group. Most
            commonly refers to ethanol, which you can drink to forget how much
            your life sucks, and methanol, which you can drink when you
            remember.
          </p>
          <div className="drugType">
            <h4>Alcohol 1 - Vodka</h4>
            <p>A nice russian beverage we all know</p>
          </div>
          <div className="drugType">
            <h4>Alcohol 1 - Beer</h4>
            <p>Nice beverage we all know about.</p>
          </div>
          <h3>Weed</h3>
          <p>
            Cannabis, also known as marijuana among other names, is a
            psychoactive drug from the Cannabis plant used primarily for medical
            or recreational purposes.
          </p>
          <div className="drugType">
            <h4>Weed 1 - Indica</h4>
            <p>
              A strain of marijuana. The cannabis plant will be smaller and
              stoutier. The high you get from an indica strain is more or a
              couch-lock high.
            </p>
          </div>
          <div className="drugType">
            <h4>Weed 2 - Sativa</h4>
            <p>
              A Sativa is a type of marijuana/plant that will typically produce
              a euphoric, energetic, cerebral high. and is very hard to grow
              indoors.
            </p>
          </div>
          <h3>Ayahuasca</h3>
          <p>
            Extremely potent heaven-sent psychedelic brew that opens the door to
            spiritual reality and takes you on the magical journey to show you
            God, angels and nature spirits.
          </p>
        </div>
        <div className="notOkDrugs">
          <h2>Not Ok Drugs</h2>
          <p>These drugs are not ok. Don't do these drugs, pretty please</p>

          <h3>Heroin</h3>
          <p>
            A white, odorless, bitter crystalline compound, C17H17NO(C2H3O2)2,
            that is derived from morphine and is a highly addictive narcotic.
            Also called diacetylmorphine.
          </p>
          <h3>Crack</h3>
          <p>
            As a rule of thumb, it is profoundly unwise to take crack-cocaine.
            The brain has evolved a truly vicious set of negative feedback
            mechanisms. Their functional effect is to stop us from being truly
            happy for long. Nature is cruelly parsimonious with pleasure.
          </p>
          <h3>Cocaine</h3>
          <p>
            Cocaine, also known as coke, is a strong stimulant most frequently
            used as a recreational drug. It is commonly snorted, inhaled as
            smoke, or dissolved and injected into a vein. Mental effects may
            include an intense feeling of happiness, loss of contact with
            reality, or agitation.
          </p>
          <p className="footer">
            These are just Wilfredo's opinions on drugs and don't represent the
            opinion of Wild Code School. Copyright 2020.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
