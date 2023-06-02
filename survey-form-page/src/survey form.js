import React from "react";

class Form extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <form>
            <h1>Survey Form</h1>
            <label htmlFor="name" className="ti">
              Name
            </label>
            <input type="text" id="name" placeholder="your name" required />
            <label htmlFor="email" className="ti">
              Eamil
            </label>
            <input
              type="email"
              id="email"
              placeholder="sample@gamil.com"
              required
            />
            <label htmlFor="age" className="ti">
              Age
            </label>
            <input type="text" id="age" placeholder="your age" required />
            <label htmlFor="select" className="ti">
              Which option best describes you?
            </label>
            <select id="select">
              <option>Student</option>
              <option>Professtional</option>
              <option>Freelancer</option>
              <option>Others</option>
            </select>
            <label htmlFor="radio1" className="ti">
              Would you recommend this website to a friend?
            </label>
            <div className="radio">
              <label htmlFor="radio1">
                <input type="radio" name="yes" id="radio1" />
                Yes
              </label>
              <br />
              <label htmlFor="radio2">
                <input type="radio" id="radio2" name="yes" />
                No
              </label>
              <br />
              <label htmlFor="radio3">
                <input type="radio" id="radio3" name="yes" />
                May be
              </label>
              <br />
            </div>
            <label htmlFor="c" className="ti">
              Anguages and Frameworks known (Check all that apply)
            </label>
            <div className="checkbox">
              <input type="checkbox" id="c" />
              <label htmlFor="c"> C</label>
              <br />
              <input type="checkbox" id="c++" />
              <label htmlFor="c++"> C+</label>
              <br />
              <input type="checkbox" id="c#" />
              <label htmlFor="c#"> C#</label>
              <br />
              <input type="checkbox" id="python" />
              <label htmlFor="python"> Python</label>
              <br />
              <input type="checkbox" id="java" />
              <label htmlFor="java"> Java</label>
              <br />
              <input type="checkbox" id="ruby" />
              <label htmlFor="ruby"> Ruby</label>
              <br />
              <input type="checkbox" id="js" />
              <label htmlFor="js"> Javascript</label>
              <br />
            </div>
            <label htmlFor="comment" className="ti">
              Any comments or suggestions
            </label>
            <div className="comments">
              <textarea
                id="comment"
                placeholder="comments......."
                required
              ></textarea>
            </div>
            <p></p>
            <button type="submit">Submit</button>
            <br />
          </form>
        </div>
      </>
    );
  }
}

export default Form;
