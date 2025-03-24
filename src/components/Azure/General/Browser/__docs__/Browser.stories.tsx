import type { Meta, StoryObj } from "@storybook/react";
import Browser from "../Browser";

const meta: Meta<typeof Browser> = { title: "Azure/General/Browser", component: Browser };

export default meta;
type Story = StoryObj<typeof Browser>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
