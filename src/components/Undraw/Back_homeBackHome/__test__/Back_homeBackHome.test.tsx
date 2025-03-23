import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Back_homeBackHome from "../Back_homeBackHome";

describe("Back_homeBackHome component", () => {
  it("Back_homeBackHome should render correctly", () => {
    render(<Back_homeBackHome />);
    expect(true).toBeTruthy();
  });
});
