import type { Meta, StoryObj } from "@storybook/react";
import Flask from "../Flask";

const meta: Meta<typeof Flask> = { title: "SkillSet/Flask", component: Flask };

export default meta;
type Story = StoryObj<typeof Flask>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
