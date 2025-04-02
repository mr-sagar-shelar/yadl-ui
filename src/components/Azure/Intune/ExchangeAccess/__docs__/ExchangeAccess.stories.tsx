import type { Meta, StoryObj } from "@storybook/react";
import ExchangeAccess from "../ExchangeAccess";

const meta: Meta<typeof ExchangeAccess> = { title: "Azure/Intune/ExchangeAccess", component: ExchangeAccess };

export default meta;
type Story = StoryObj<typeof ExchangeAccess>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
