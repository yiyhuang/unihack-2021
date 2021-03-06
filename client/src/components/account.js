import React, { useState, useEffect } from "react";
import axios from "axios";
import CenterCard363 from "./centerCard363";
import useForm from "../use-form-react";

const Account = () => {
  const [editting, setEditting] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [status, setStatus] = useState("");
  const [profile, setProfile] = useState({});
  const options = {
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    callback: () => {
      updateUserProfile(inputs);
    },
    debug: false,
  };
  const { setInputs, onSubmit, onChange, inputs, dirty, reset } = useForm(
    "AdvanceForm",
    options
  );
  const tryConnect = () =>
    axios.get(`/auth-ping`).then((r) => setStatus(r.data));
  const getUserProfile = () =>
    axios.get(`/user/profile`).then((r) => {
      setProfile(r.data);
      setInputs({
        firstName: r.data.name.first,
        lastName: r.data.name.last,
        email: r.data.email,
      });
      setErrMsg();
    });
  const updateUserProfile = () => {
    axios
      .post(`/user/profile`, inputs)
      .then(() => cancelForm())
      .catch((e) => setErrMsg(`${e.response.data}. Please try it again.`));
  };
  useEffect(() => {
    tryConnect();
    getUserProfile();
  }, []);
  const switchEditting = () => {
    setEditting(!editting);
  };
  const cancelForm = () => {
    setEditting(false);
    reset();
    getUserProfile();
  };
  const renderButtons = () => {
    if (editting) {
      return (
        <div className="form-group">
          <button
            disabled={!dirty}
            type="submit"
            class="button is-primary is-light"
          >
            Save Change
          </button>
          <button
            class="button is-info is-light"
            onClick={cancelForm}
          >
            Cancel
          </button>
        </div>
      );
    } else {
      return (
        <button class="button is-primary is-light" onClick={switchEditting}>
          Update Information
        </button>
      );
    }
  };
  const renderProfileForm = () => {
    return (
      <form onSubmit={onSubmit}>
        <div class="field">
          <p class="control">
            <label>First Name:</label>
            <input
              disabled={!editting}
              type="text"
              name="firstName"
              onChange={onChange}
              value={inputs.firstName}
              class="input"
              placeholder="First Name"
              required
            />
          </p>
        </div>

        <div class="field">
          <p class="control">
            <label>Last Name: </label>
            <input
              disabled={!editting}
              type="text"
              name="lastName"
              onChange={onChange}
              value={inputs.lastName}
              class="input"
              placeholder="Last Name"
              required
            />
          </p>
        </div>

        <div class="field">
          <p class="control">
            <label>Email: </label>
            <input
              disabled
              readOnly
              type="email"
              name="email"
              onChange={onChange}
              value={inputs.email}
              class="input"
              placeholder="sample@email.com"
              required
            />
          </p>
        </div>

        {dirty && (
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              onChange={onChange}
              value={inputs.password}
              className={
                errMsg
                  ? "form-control form-control-lg is-invalid"
                  : "form-control form-control-lg"
              }
              placeholder="your password"
              required
            />
            {errMsg && <div className="invalid-feedback">{errMsg}</div>}
          </div>
        )}
        <div style={{ paddingTop: "30px" }}>{renderButtons()}</div>
      </form>
    );
  };
  return (
    <div class="columns is-centered">
      <div class="column is-half">
        <h1 class="title">Account</h1>
        {/* <div className="card-body"> */}
        <span class="tag is-primary is-light is-medium">
          Server status: {status} <i class="fas fa-sun"></i>
        </span>
        <h1 class="title"></h1>
        {profile && renderProfileForm()}
      </div>
    </div>
  );
};

export default Account;
