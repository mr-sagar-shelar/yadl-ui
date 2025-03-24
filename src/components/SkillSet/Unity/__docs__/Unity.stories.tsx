import type { Meta, StoryObj } from "@storybook/react";
import Unity from "../Unity";

const meta: Meta<typeof Unity> = { title: "SkillSet/Unity", component: Unity };

export default meta;
type Story = StoryObj<typeof Unity>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
