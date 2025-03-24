import type { Meta, StoryObj } from "@storybook/react";
import MySQL from "../MySQL";

const meta: Meta<typeof MySQL> = { title: "SkillSet/MySQL", component: MySQL };

export default meta;
type Story = StoryObj<typeof MySQL>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
