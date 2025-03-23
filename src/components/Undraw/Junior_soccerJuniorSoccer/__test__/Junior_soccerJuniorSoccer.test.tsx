import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Junior_soccerJuniorSoccer from "../Junior_soccerJuniorSoccer";

describe("Junior_soccerJuniorSoccer component", () => {
  it("Junior_soccerJuniorSoccer should render correctly", () => {
    render(<Junior_soccerJuniorSoccer />);
    expect(true).toBeTruthy();
  });
});
