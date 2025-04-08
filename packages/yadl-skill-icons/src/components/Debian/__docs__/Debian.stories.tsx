import type { Meta, StoryObj } from "@storybook/react";
import Debian from "../Debian";

const meta: Meta<typeof Debian> = { title: "SkillIcon/Debian", component: Debian };

export default meta;
type Story = StoryObj<typeof Debian>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
