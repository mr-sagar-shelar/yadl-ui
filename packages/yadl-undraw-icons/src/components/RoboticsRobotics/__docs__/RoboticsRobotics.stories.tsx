import type { Meta, StoryObj } from "@storybook/react";
import RoboticsRobotics from "../RoboticsRobotics";

const meta: Meta<typeof RoboticsRobotics> = { title: "unDraw/RoboticsRobotics", component: RoboticsRobotics };

export default meta;
type Story = StoryObj<typeof RoboticsRobotics>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
