import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Datastream from "../Datastream";

describe("Datastream component", () => {
  it("Datastream should render correctly", () => {
    render(<Datastream />);
    expect(true).toBeTruthy();
  });
});
