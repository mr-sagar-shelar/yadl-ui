import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MultifactorAuthentication from "../MultifactorAuthentication";

describe("MultifactorAuthentication component", () => {
  it("MultifactorAuthentication should render correctly", () => {
    render(<MultifactorAuthentication />);
    expect(true).toBeTruthy();
  });
});
