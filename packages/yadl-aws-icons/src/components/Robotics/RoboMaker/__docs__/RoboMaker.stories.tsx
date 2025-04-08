import type { Meta, StoryObj } from "@storybook/react";
import RoboMaker from "../RoboMaker";

const meta: Meta<typeof RoboMaker> = { title: "AWS/Robotics/RoboMaker", component: RoboMaker };

export default meta;
type Story = StoryObj<typeof RoboMaker>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
