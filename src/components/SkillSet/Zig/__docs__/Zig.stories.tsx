import type { Meta, StoryObj } from "@storybook/react";
import Zig from "../Zig";

const meta: Meta<typeof Zig> = { title: "SkillSet/Zig", component: Zig };

export default meta;
type Story = StoryObj<typeof Zig>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
