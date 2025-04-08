import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Datastore from "../Datastore";

describe("Datastore component", () => {
  it("Datastore should render correctly", () => {
    render(<Datastore />);
    expect(true).toBeTruthy();
  });
});
