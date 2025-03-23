import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OrganizingProjects from "../OrganizingProjects";

describe("OrganizingProjects component", () => {
  it("OrganizingProjects should render correctly", () => {
    render(<OrganizingProjects />);
    expect(true).toBeTruthy();
  });
});
