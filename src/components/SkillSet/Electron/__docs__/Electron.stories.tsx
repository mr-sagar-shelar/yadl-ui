import type { Meta, StoryObj } from "@storybook/react";
import Electron from "../Electron";

const meta: Meta<typeof Electron> = { title: "SkillSet/Electron", component: Electron };

export default meta;
type Story = StoryObj<typeof Electron>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
