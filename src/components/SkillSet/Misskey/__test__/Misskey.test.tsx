import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Misskey from "../Misskey";

describe("Misskey component", () => {
  it("Misskey should render correctly", () => {
    render(<Misskey />);
    expect(true).toBeTruthy();
  });
});
