import type { Meta, StoryObj } from "@storybook/react";
import PhpStorm from "../PhpStorm";

const meta: Meta<typeof PhpStorm> = { title: "SkillIcon/PhpStorm", component: PhpStorm };

export default meta;
type Story = StoryObj<typeof PhpStorm>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
