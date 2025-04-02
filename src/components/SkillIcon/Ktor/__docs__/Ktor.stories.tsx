import type { Meta, StoryObj } from "@storybook/react";
import Ktor from "../Ktor";

const meta: Meta<typeof Ktor> = { title: "SkillIcon/Ktor", component: Ktor };

export default meta;
type Story = StoryObj<typeof Ktor>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
