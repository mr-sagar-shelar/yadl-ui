import type { Meta, StoryObj } from "@storybook/react";
import PrivateEndpoints from "../PrivateEndpoints";

const meta: Meta<typeof PrivateEndpoints> = { title: "Azure/Other/PrivateEndpoints", component: PrivateEndpoints };

export default meta;
type Story = StoryObj<typeof PrivateEndpoints>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
