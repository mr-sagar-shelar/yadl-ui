import type { Meta, StoryObj } from "@storybook/react";
import Detonation from "../Detonation";

const meta: Meta<typeof Detonation> = { title: "Azure/Security/Detonation", component: Detonation };

export default meta;
type Story = StoryObj<typeof Detonation>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
