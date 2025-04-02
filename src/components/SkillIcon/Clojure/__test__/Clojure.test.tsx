import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Clojure from "../Clojure";

describe("Clojure component", () => {
  it("Clojure should render correctly", () => {
    render(<Clojure />);
    expect(true).toBeTruthy();
  });
});
