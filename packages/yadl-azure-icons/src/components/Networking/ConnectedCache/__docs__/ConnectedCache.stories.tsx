import type { Meta, StoryObj } from "@storybook/react";
import ConnectedCache from "../ConnectedCache";

const meta: Meta<typeof ConnectedCache> = { title: "Azure/Networking/ConnectedCache", component: ConnectedCache };

export default meta;
type Story = StoryObj<typeof ConnectedCache>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
