import type { Meta, StoryObj } from "@storybook/react";
import Vault from "../Vault";

const meta: Meta<typeof Vault> = { title: "unDraw/Vault", component: Vault };

export default meta;
type Story = StoryObj<typeof Vault>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
