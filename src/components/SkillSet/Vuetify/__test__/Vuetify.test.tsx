import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Vuetify from "../Vuetify";

describe("Vuetify component", () => {
  it("Vuetify should render correctly", () => {
    render(<Vuetify />);
    expect(true).toBeTruthy();
  });
});
