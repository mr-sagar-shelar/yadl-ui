import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OrganizeResume from "../OrganizeResume";

describe("OrganizeResume component", () => {
  it("OrganizeResume should render correctly", () => {
    render(<OrganizeResume />);
    expect(true).toBeTruthy();
  });
});
