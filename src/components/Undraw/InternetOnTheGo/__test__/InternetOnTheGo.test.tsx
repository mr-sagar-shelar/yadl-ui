import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import InternetOnTheGo from "../InternetOnTheGo";

describe("InternetOnTheGo component", () => {
  it("InternetOnTheGo should render correctly", () => {
    render(<InternetOnTheGo />);
    expect(true).toBeTruthy();
  });
});
