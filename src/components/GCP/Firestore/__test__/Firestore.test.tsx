import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Firestore from "../Firestore";

describe("Firestore component", () => {
  it("Firestore should render correctly", () => {
    render(<Firestore />);
    expect(true).toBeTruthy();
  });
});
