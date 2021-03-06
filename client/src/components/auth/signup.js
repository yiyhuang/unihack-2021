import React, { useState } from "react";
import { connect } from "react-redux";
import { signUserUp } from "../../actions";
import useForm from "../../use-form-react";

const Signup = (props) => {
  const [errMsg, setErrorMsg] = useState("");
  const options = {
    initialValues: {
      //   firstName: "First Name",
      //   lastName: "Last Name",
      //   email: "aa@mail.com",
      //   password: "aa",
      //   password2: "a",
    },
    callback: () => {
      if (inputs.password == inputs.password2) {
        console.log(inputs);
        props.signUserUp(inputs);
      } else {
        setErrorMsg("password does not matched");
      }
    },
    debug: false,
  };
  const { onSubmit, onChange, inputs, dirty, submitting } = useForm(
    "AdvanceForm",
    options
  );
  return (
    <div class="columns is-centered">
      <div class="column is-half">
        <h1 class="title">Sign Up</h1>
        <div className="card-body">
          <form onSubmit={onSubmit}>
            <div class="field">
              <p class="control has-icons-left has-icons-right">
                <input
                  name="firstName"
                  class="input"
                  type="text"
                  value={inputs.firstName}
                  placeholder="First Name"
                  onChange={onChange}
                  required
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </p>
            </div>

            <div class="field">
              <p class="control has-icons-left has-icons-right">
                <input
                  name="lastName"
                  value={inputs.lastName}
                  type="text"
                  onChange={onChange}
                  class="input"
                  placeholder="Last Name"
                  required
                />
                <span class="icon is-small is-left">
                  <i class="far fa-user"></i>
                </span>
              </p>
            </div>

            <div class="field">
              <p class="control has-icons-left has-icons-right">
                <input
                  name="email"
                  class="input"
                  type="email"
                  value={inputs.email}
                  placeholder="Email"
                  onChange={onChange}
                  required
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
                <span class="icon is-small is-right">
                  <i class="fas fa-check"></i>
                </span>
              </p>
            </div>

            <div class="field">
              <p class="control has-icons-left">
                <input
                  class="input"
                  type="password"
                  name="password"
                  value={inputs.password}
                  onChange={onChange}
                  placeholder="Password"
                  required
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-lock"></i>
                </span>
              </p>
            </div>

            <div class="field">
              <p class="control has-icons-left">
                <input
                  class="input"
                  type="password"
                  name="password2"
                  value={inputs.password2}
                  onChange={onChange}
                  placeholder="Confirm your password"
                  required
                />
                <span class="icon is-small is-left">
                  <i class="far fa-lock"></i>
                </span>
              </p>
            </div>

            {errMsg && (
              <span class="tag is-warning is-light is-medium">
                Oops! {errMsg}
              </span>
            )}

            <div style={{ paddingTop: "30px" }}>
              <button
                type="submit"
                class="button is-success"
                disabled={!dirty || submitting}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { signUserUp })(Signup);
