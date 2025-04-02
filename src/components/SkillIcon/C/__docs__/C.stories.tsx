import type { Meta, StoryObj } from "@storybook/react";
import C from "../C";

const meta: Meta<typeof C> = { title: "SkillIcon/C", component: C };

export default meta;
type Story = StoryObj<typeof C>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
