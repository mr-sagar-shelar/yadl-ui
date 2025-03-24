import type { Meta, StoryObj } from "@storybook/react";
import ExperienceDesign from "../ExperienceDesign";

const meta: Meta<typeof ExperienceDesign> = { title: "unDraw/ExperienceDesign", component: ExperienceDesign };

export default meta;
type Story = StoryObj<typeof ExperienceDesign>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
