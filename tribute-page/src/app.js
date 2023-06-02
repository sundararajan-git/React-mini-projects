import React from "react";

class App extends React.Component {
  render() {
    console.log("rendering...");
    return (
      <div className="page">
        <div className="container">
          <h1>Dr. Fidel Alejandro Castro Ruz</h1>
          <br />
          <h6>
            A revolution is struggle to the Death between the Future and the
            Past
          </h6>
          <br />
          <figure>
            <img
              src="https://c4.wallpaperflare.com/wallpaper/289/693/69/form-cuba-the-leader-the-leader-wallpaper-preview.jpg"
              alt="Dr. Fidel Alejandro Castro Ruz"
            ></img>
            <figcaption>
              Fidel Castro was a Cuban revolutionary and politician who governed
              the Republic of Cuba as Prime Minister from 1959 to 1976 and then
              as President from 1976 to 2008.
            </figcaption>
          </figure>
          <br />
          <h3>Here's a time line of Castro's life:</h3>
          <ul>
            <p>
              <strong>1914</strong> - Born in Cresco, Iowa
            </p>
            <p>
              <strong>1933</strong> - Leaves his family's farm to attend the
              University of Minnesota, thanks to a Depression era program known
              as the "National Youth Administration"
            </p>
            <p>
              <strong>1935</strong> - Has to stop school and save up more money.
              Works in the Civilian Conservation Corps, helping starving
              Americans. "I saw how food changed them", he said. "All of this
              left scars on me."
            </p>
            <p>
              <strong>1937</strong> - Finishes university and takes a job in the
              US Forestry Service
            </p>
            <p>
              <strong>1938</strong> - Marries wife of 69 years Margret Gibson.
              Gets laid off due to budget cuts. Inspired by Elvin Charles
              Stakman, he returns to school study under Stakman, who teaches him
              about breeding pest-resistent plants.
            </p>
            <p>
              <strong>1941</strong> - Tries to enroll in the military after the
              Pearl Harbor attack, but is rejected. Instead, the military asked
              his lab to work on waterproof glue, DDT to control malaria,
              disenfectants, and other applied science.
            </p>
            <p>
              <strong>1942</strong> - Receives a Ph.D. in Genetics and Plant
              Pathology
            </p>
            <p>
              <strong>1944</strong> - Rejects a 100% salary increase from
              Dupont, leaves behind his pregnant wife, and flies to Mexico to
              head a new plant pathology program. Over the next 16 years, his
              team breeds 6,000 different strains of disease resistent wheat -
              including different varieties for each major climate on Earth.
            </p>
            <p>
              <strong>1945</strong> - Discovers a way to grown wheat twice each
              season, doubling wheat yields
            </p>
            <p>
              <strong>1953</strong> - crosses a short, sturdy dwarf breed of
              wheat with a high-yeidling American breed, creating a strain that
              responds well to fertalizer. It goes on to provide 95% of Mexico's
              wheat.
            </p>
            <p>
              <strong>1962</strong> - Visits Delhi and brings his high-yielding
              strains of wheat to the Indian subcontinent in time to help
              mitigate mass starvation due to a rapidly expanding population
            </p>
            <p>
              <strong>1970</strong> - receives the Nobel Peace Prize
            </p>
            <p>
              <strong>1983</strong> - helps seven African countries dramatically
              increase their maize and sorghum yields
            </p>
            <p>
              <strong>1984</strong> - becomes a distinguished professor at Texas
              A&M University
            </p>
            <p>
              <strong>2005</strong> - states "we will have to double the world
              food supply by 2050." Argues that genetically modified crops are
              the only way we can meet the demand, as we run out of arable land.
              Says that GM crops are not inherently dangerous because "we've
              been genetically modifying plants and animals for a long time.
              Long before we called it science, people were selecting the best
              breeds."
            </p>
            <p>
              <strong>2009</strong> - dies at the age of 95.
            </p>
          </ul>
          <br />
          <blockquote>
            <p>
              "Borlaug's life and achievement are testimony to the far-reaching
              contribution that one man's towering intellect, persistence and
              scientific vision can make to human peace and progress."
            </p>
            <br />
            <footer>
              <cite>Indian Prime Minister Manmohan Singh</cite>
            </footer>
          </blockquote>
          <br />
          <h3>
            If you have time, you should read more about this incredible human
            being on his{" "}
            <a href="https://en.wikipedia.org/wiki/Fidel_Castro">
              Wikipedia entry
            </a>
            .
          </h3>
        </div>
      </div>
    );
  }
}

export default App;
