import type { Meta, StoryObj } from "@storybook/react";
import ExchangeOnPremisesAccess from "../ExchangeOnPremisesAccess";

const meta: Meta<typeof ExchangeOnPremisesAccess> = { title: "Azure/Other/ExchangeOnPremisesAccess", component: ExchangeOnPremisesAccess };

export default meta;
type Story = StoryObj<typeof ExchangeOnPremisesAccess>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
