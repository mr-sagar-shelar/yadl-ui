import type { Meta, StoryObj } from "@storybook/react";
import Nim from "../Nim";

const meta: Meta<typeof Nim> = { title: "SkillIcon/Nim", component: Nim };

export default meta;
type Story = StoryObj<typeof Nim>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
