import type { Meta, StoryObj } from "@storybook/react";
import Anaconda from "../Anaconda";

const meta: Meta<typeof Anaconda> = { title: "SkillSet/Anaconda", component: Anaconda };

export default meta;
type Story = StoryObj<typeof Anaconda>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
