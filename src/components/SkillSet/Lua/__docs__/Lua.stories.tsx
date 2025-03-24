import type { Meta, StoryObj } from "@storybook/react";
import Lua from "../Lua";

const meta: Meta<typeof Lua> = { title: "SkillSet/Lua", component: Lua };

export default meta;
type Story = StoryObj<typeof Lua>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
