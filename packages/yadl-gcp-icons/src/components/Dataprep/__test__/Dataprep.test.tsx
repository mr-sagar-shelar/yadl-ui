import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Dataprep from "../Dataprep";

describe("Dataprep component", () => {
  it("Dataprep should render correctly", () => {
    render(<Dataprep />);
    expect(true).toBeTruthy();
  });
});
