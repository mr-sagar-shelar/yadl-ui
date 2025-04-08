import type { Meta, StoryObj } from "@storybook/react";
import Julia from "../Julia";

const meta: Meta<typeof Julia> = { title: "SkillIcon/Julia", component: Julia };

export default meta;
type Story = StoryObj<typeof Julia>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
