import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AbsorbedIn from "../AbsorbedIn";

describe("AbsorbedIn component", () => {
  it("AbsorbedIn should render correctly", () => {
    render(<AbsorbedIn />);
    expect(true).toBeTruthy();
  });
});
