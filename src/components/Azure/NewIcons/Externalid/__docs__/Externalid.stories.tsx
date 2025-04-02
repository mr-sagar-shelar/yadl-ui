import type { Meta, StoryObj } from "@storybook/react";
import Externalid from "../Externalid";

const meta: Meta<typeof Externalid> = { title: "Azure/NewIcons/Externalid", component: Externalid };

export default meta;
type Story = StoryObj<typeof Externalid>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
