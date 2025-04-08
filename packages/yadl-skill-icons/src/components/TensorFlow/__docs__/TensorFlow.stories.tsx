import type { Meta, StoryObj } from "@storybook/react";
import TensorFlow from "../TensorFlow";

const meta: Meta<typeof TensorFlow> = { title: "SkillIcon/TensorFlow", component: TensorFlow };

export default meta;
type Story = StoryObj<typeof TensorFlow>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
