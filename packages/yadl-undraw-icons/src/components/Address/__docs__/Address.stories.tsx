import type { Meta, StoryObj } from "@storybook/react";
import Address from "../Address";

const meta: Meta<typeof Address> = { title: "unDraw/Address", component: Address };

export default meta;
type Story = StoryObj<typeof Address>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
