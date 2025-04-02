import type { Meta, StoryObj } from "@storybook/react";
import Braket from "../Braket";

const meta: Meta<typeof Braket> = { title: "AWS/QuantumTechnologies/Braket", component: Braket };

export default meta;
type Story = StoryObj<typeof Braket>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
