import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import YoungManAvatar from "../YoungManAvatar";

describe("YoungManAvatar component", () => {
  it("YoungManAvatar should render correctly", () => {
    render(<YoungManAvatar />);
    expect(true).toBeTruthy();
  });
});
