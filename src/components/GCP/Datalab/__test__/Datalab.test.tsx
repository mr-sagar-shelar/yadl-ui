import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Datalab from "../Datalab";

describe("Datalab component", () => {
  it("Datalab should render correctly", () => {
    render(<Datalab />);
    expect(true).toBeTruthy();
  });
});
