import React from "react";
import { Input, Button } from "antd";
import "./Password.css";

export const Password = () => {
  return (
    <div className="container-password">
      <div>
        <h1 className="recovery-pass">პაროლის აღდგენა</h1>
        <p className="security">
          ანაგარიშის უსაფრთხოებისთვის, შეიყვანეთ საიდენტიფიკაციო კოდი
        </p>
        <div>
          <Input type="text" placeholder="საიდენთიფიკაციო კოდი" />
        </div>
        <div className="cancel">
          <Button type="primary">გაუქმება</Button>
          <Button type="primary" disabled>
            კოდის გაგზავნა
          </Button>
        </div>
      </div>
    </div>
  );
};
