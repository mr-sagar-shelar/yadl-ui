import type { Meta, StoryObj } from "@storybook/react";
import DefenderDCSController from "../DefenderDCSController";

const meta: Meta<typeof DefenderDCSController> = { title: "Azure/Other/DefenderDCSController", component: DefenderDCSController };

export default meta;
type Story = StoryObj<typeof DefenderDCSController>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
