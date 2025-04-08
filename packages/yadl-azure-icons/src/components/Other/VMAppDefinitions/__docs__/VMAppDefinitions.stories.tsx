import type { Meta, StoryObj } from "@storybook/react";
import VMAppDefinitions from "../VMAppDefinitions";

const meta: Meta<typeof VMAppDefinitions> = { title: "Azure/Other/VMAppDefinitions", component: VMAppDefinitions };

export default meta;
type Story = StoryObj<typeof VMAppDefinitions>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
