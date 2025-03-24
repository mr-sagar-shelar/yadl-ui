import type { Meta, StoryObj } from "@storybook/react";
import DarkAlleyDarkAlley from "../DarkAlleyDarkAlley";

const meta: Meta<typeof DarkAlleyDarkAlley> = { title: "unDraw/DarkAlleyDarkAlley", component: DarkAlleyDarkAlley };

export default meta;
type Story = StoryObj<typeof DarkAlleyDarkAlley>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
