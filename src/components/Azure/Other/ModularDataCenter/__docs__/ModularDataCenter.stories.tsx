import type { Meta, StoryObj } from "@storybook/react";
import ModularDataCenter from "../ModularDataCenter";

const meta: Meta<typeof ModularDataCenter> = { title: "Azure/Other/ModularDataCenter", component: ModularDataCenter };

export default meta;
type Story = StoryObj<typeof ModularDataCenter>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
