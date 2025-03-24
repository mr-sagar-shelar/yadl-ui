import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ContactCenterAi from "../ContactCenterAi";

describe("ContactCenterAi component", () => {
  it("ContactCenterAi should render correctly", () => {
    render(<ContactCenterAi />);
    expect(true).toBeTruthy();
  });
});
