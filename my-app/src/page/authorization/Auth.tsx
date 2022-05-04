import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import "./Auth.css";
import * as path from "../../constants";
import { Registration } from "./registration/Registration";

export const Auth = () => {
  const [registration, setRegistration] = useState(false);

  return (
    <>
      {!registration ? (
        <div className="auth-container">
          <div className="input-field">
            <h2 className="auth">ავტორიზაცია</h2>
            <div>
              <Input placeholder="მომხმარებელი" />
              <br></br>
            </div>
            <>
              <Input.Password placeholder="პაროლი" />
              {(visible: any) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
              <br></br>
              {/* <Link className="password" to={}>
                დაგავიწყდათ პაროლი
              </Link> */}
            </>

            <div className="registration">
              <div className="path">
                <Button onClick={() => setRegistration(true)}>
                  რეგისტრაცია
                </Button>
                <br></br>
                <a href="#">
                  <h3 className="agency">სააგენტოს ავტორიზაცია</h3>
                </a>
              </div>
              <div>
                <Button type="primary">შესვლა</Button>
              </div>
            </div>
          </div>
          <div className="news">
            <h2>სიახლეები</h2>
            <h3>სიახლეები არ მოიძებნა</h3>
          </div>
        </div>
      ) : (
        <Registration />
      )}
    </>
  );
};
