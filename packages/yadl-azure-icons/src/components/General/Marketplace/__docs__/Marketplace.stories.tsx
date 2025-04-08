import type { Meta, StoryObj } from "@storybook/react";
import Marketplace from "../Marketplace";

const meta: Meta<typeof Marketplace> = { title: "Azure/General/Marketplace", component: Marketplace };

export default meta;
type Story = StoryObj<typeof Marketplace>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
