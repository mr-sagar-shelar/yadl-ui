import type { Meta, StoryObj } from "@storybook/react";
import DefenderRobotController from "../DefenderRobotController";

const meta: Meta<typeof DefenderRobotController> = { title: "Azure/Other/DefenderRobotController", component: DefenderRobotController };

export default meta;
type Story = StoryObj<typeof DefenderRobotController>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
