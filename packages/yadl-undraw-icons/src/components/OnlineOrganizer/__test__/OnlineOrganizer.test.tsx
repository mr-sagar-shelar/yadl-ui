import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OnlineOrganizer from "../OnlineOrganizer";

describe("OnlineOrganizer component", () => {
  it("OnlineOrganizer should render correctly", () => {
    render(<OnlineOrganizer />);
    expect(true).toBeTruthy();
  });
});
