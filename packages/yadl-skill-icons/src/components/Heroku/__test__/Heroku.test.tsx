import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Heroku from "../Heroku";

describe("Heroku component", () => {
  it("Heroku should render correctly", () => {
    render(<Heroku />);
    expect(true).toBeTruthy();
  });
});
