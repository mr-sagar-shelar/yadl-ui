import type { Meta, StoryObj } from "@storybook/react";
import LoadTesting from "../LoadTesting";

const meta: Meta<typeof LoadTesting> = { title: "Azure/Devops/LoadTesting", component: LoadTesting };

export default meta;
type Story = StoryObj<typeof LoadTesting>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
