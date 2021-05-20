import React from 'react';


class ContactForm1 extends React.Component {
  state = { 
    jmeno: '',
    prijmeni: '',
    email: '',
    datum: '',
    kraj: '',
    checkbox: 'unchecked'
  };

  handleCheck = (event) => {
    if (this.state.checkbox === 'unchecked') {
      document.getElementById("exampleCheck1").checked = true;
      this.setState({checkbox: 'checked'});
    } else {
      document.getElementById("exampleCheck1").checked = false;
      this.setState({checkbox: 'unchecked'});
    }
  };

  onFormSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    let textarea = document.getElementById('textarea');
    textarea.value = JSON.stringify(this.state)
    this.setState({ 
      jmeno: '',
      prijmeni: '',
      email: '',
      datum: '',
      kraj: '',
      checkbox: ''  
    });
    document.getElementById("exampleCheck1").checked = false;
    this.setState({checkbox: 'unchecked'});
  };

  onFormUpload = event => {
    event.preventDefault();
    let textarea = document.getElementById('textarea');
    let textareaobj = JSON.parse(textarea.value);
    if (
      Object.keys(textareaobj)[0] === Object.keys(this.state)[0] 
      && 
      Object.keys(textareaobj)[1] === Object.keys(this.state)[1]
      && 
      Object.keys(textareaobj)[2] === Object.keys(this.state)[2]
      && 
      Object.keys(textareaobj)[3] === Object.keys(this.state)[3]
      && 
      Object.keys(textareaobj)[4] === Object.keys(this.state)[4]) {
      this.setState({ 
        jmeno: textareaobj.jmeno,
        prijmeni: textareaobj.prijmeni,
        email: textareaobj.email,
        datum: textareaobj.datum,
        kraj: textareaobj.kraj,
      });
      if (textareaobj.checkbox === 'unchecked') {
        document.getElementById("exampleCheck1").checked = false;
        this.setState({checkbox: 'unchecked'});
      } else {
        document.getElementById("exampleCheck1").checked = true;
        this.setState({checkbox: 'checked'});
      }
      textarea.value = '';
    } else {
      console.log('Error: typo v key objektu');
      this.setState({ 
        jmeno: textareaobj.jmeno,
        prijmeni: textareaobj.prijmeni,
        email: textareaobj.email,
        datum: textareaobj.datum,
        kraj: textareaobj.kraj,
        checkbox: textareaobj.checkbox
      });
    }
    textarea.value = '';
  }

  render() {
    return(
      <div> 
        <div> 
          <form onSubmit={this.onFormSubmit}>

            <div className="mb-3">
              <label className="form-label">Jméno</label>  
              <input 
                type="text" 
                className="form-control"
                value={this.state.jmeno}
                onChange={e => this.setState({ jmeno: e.target.value})}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Příjmení</label>
              <input 
                type="text" 
                className="form-control"
                value={this.state.prijmeni}
                onChange={e => this.setState({ prijmeni: e.target.value})}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input 
                type="email" 
                className="form-control"
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value})}
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Datum narození</label>
              <input 
                type="text" 
                className="form-control"
                value={this.state.datum}
                onChange={e => this.setState({ datum: e.target.value})}
              />
            </div>

            <div className="mb-3 form-check" class="pl-0 mb-4">
              <select 
                class="form-select pt-2 pb-2" 
                aria-label="Default select example"
                value={this.state.kraj}
                onChange={e => this.setState({ kraj: e.target.value})}
              >
                <option selected>Vybrat Kraj</option>
                <option value="Hlavní město Praha">Hlavní město Praha</option>
                <option value="Středočeský kraj">Středočeský kraj</option>
                <option value="Jihočeský kraj">Jihočeský kraj</option>
                <option value="Plzeňský kraj">Plzeňský kraj</option>
                <option value="Karlovarský kraj">Karlovarský kraj</option>
                <option value="Ústecký kraj">Ústecký kraj</option>
                <option value="Liberecký kraj">Liberecký kraj</option>
                <option value="Královéhradecký kraj">Královéhradecký kraj</option>
                <option value="Pardubický kraj">Pardubický kraj</option>
                <option value="Olomoucký kraj">Olomoucký kraj</option>
                <option value="Moravskoslezský kraj">Moravskoslezský kraj</option>
                <option value="Jihomoravský kraj">Jihomoravský kraj</option>
                <option value="Zlínský kraj">Zlínský kraj</option>
                <option value="Kraj Vysočina">Kraj Vysočina</option>

              </select>
            </div>

            <div className="mb-3 form-check">
              <input 
                type="checkbox" 
                className="form-check-input" 
                id="exampleCheck1"

                onChange={this.handleCheck}
              />
              <label className="form-check-label" htmlFor="exampleCheck1">React</label>
            </div>

            <input 
              type="submit" 
              class="btn btn-primary mb-4"
              style={{ width: '100%' }}
              value="Uložit" 
             />
          </form>


        </div>
        <div> 
          <form onSubmit={this.onFormUpload}>
            <textarea 
              className="form-control  mb-4"
              rows = "5" 
              cols = "50" 
              name = "description"
              id = "textarea"
              >
            </textarea>

              <input 
              type="submit" 
              class="btn btn-primary mb-4"
              style={{ width: '100%' }}
              value="Načíst" 
              />
          </form>
        </div>
      </div>
    )
  }
}

export default ContactForm1;
