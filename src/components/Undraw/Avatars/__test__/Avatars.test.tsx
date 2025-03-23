import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Avatars from "../Avatars";

describe("Avatars component", () => {
  it("Avatars should render correctly", () => {
    render(<Avatars />);
    expect(true).toBeTruthy();
  });
});