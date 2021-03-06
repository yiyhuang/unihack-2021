import React from "react";
import { connect } from "react-redux";
import useForm from "../../use-form-react";

import { signUserIn } from "../../actions";

const Signin = (props) => {
  const options = {
    initialValues: {
      email: "",
      password: "",
    },
    callback: () => {
      console.log("works!", inputs);
      props.signUserIn(inputs);
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
        <h1 class="title">Sign In</h1>
        <form onSubmit={onSubmit}>
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
                name="password"
                class="input"
                type="password"
                value={inputs.password}
                placeholder="Password"
                onChange={onChange}
                required
              />
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </p>
          </div>

          <div class="field">
            <p class="control">
              <button class="button is-success">Sign In</button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default connect(null, { signUserIn })(Signin);
