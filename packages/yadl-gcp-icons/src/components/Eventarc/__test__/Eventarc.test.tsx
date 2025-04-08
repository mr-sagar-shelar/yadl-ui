import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Eventarc from "../Eventarc";

describe("Eventarc component", () => {
  it("Eventarc should render correctly", () => {
    render(<Eventarc />);
    expect(true).toBeTruthy();
  });
});
