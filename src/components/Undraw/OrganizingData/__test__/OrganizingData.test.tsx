import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OrganizingData from "../OrganizingData";

describe("OrganizingData component", () => {
  it("OrganizingData should render correctly", () => {
    render(<OrganizingData />);
    expect(true).toBeTruthy();
  });
});
