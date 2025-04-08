import type { Meta, StoryObj } from "@storybook/react";
import SolutionMindset from "../SolutionMindset";

const meta: Meta<typeof SolutionMindset> = { title: "unDraw/SolutionMindset", component: SolutionMindset };

export default meta;
type Story = StoryObj<typeof SolutionMindset>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
