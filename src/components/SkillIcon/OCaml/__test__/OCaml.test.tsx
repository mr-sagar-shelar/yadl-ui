import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OCaml from "../OCaml";

describe("OCaml component", () => {
  it("OCaml should render correctly", () => {
    render(<OCaml />);
    expect(true).toBeTruthy();
  });
});
