import type { Meta, StoryObj } from "@storybook/react";
import ManagedServices from "../ManagedServices";

const meta: Meta<typeof ManagedServices> = { title: "AWS/CustomerEnablement/ManagedServices", component: ManagedServices };

export default meta;
type Story = StoryObj<typeof ManagedServices>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
