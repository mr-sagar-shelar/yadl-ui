import type { Meta, StoryObj } from "@storybook/react";
import Forth from "../Forth";

const meta: Meta<typeof Forth> = { title: "SkillSet/Forth", component: Forth };

export default meta;
type Story = StoryObj<typeof Forth>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
