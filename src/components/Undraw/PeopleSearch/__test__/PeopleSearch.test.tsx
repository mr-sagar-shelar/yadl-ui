import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PeopleSearch from "../PeopleSearch";

describe("PeopleSearch component", () => {
  it("PeopleSearch should render correctly", () => {
    render(<PeopleSearch />);
    expect(true).toBeTruthy();
  });
});
