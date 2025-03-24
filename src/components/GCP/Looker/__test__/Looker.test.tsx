import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Looker from "../Looker";

describe("Looker component", () => {
  it("Looker should render correctly", () => {
    render(<Looker />);
    expect(true).toBeTruthy();
  });
});
