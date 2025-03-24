import type { Meta, StoryObj } from "@storybook/react";
import ROS from "../ROS";

const meta: Meta<typeof ROS> = { title: "SkillSet/ROS", component: ROS };

export default meta;
type Story = StoryObj<typeof ROS>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
