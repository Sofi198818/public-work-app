import React, { useState } from "react";
import RoutingList from "../router/RoutingList";
import { Header } from "./Header";

export default function MainLayout() {
  return (
    <>
      <Header />
      {/* <RoutingList /> */}
      {RoutingList()}
    </>
  );
}
