import type { Meta, StoryObj } from "@storybook/react";
import DigitalCurrencyDigitalCurrency from "../DigitalCurrencyDigitalCurrency";

const meta: Meta<typeof DigitalCurrencyDigitalCurrency> = { title: "unDraw/DigitalCurrencyDigitalCurrency", component: DigitalCurrencyDigitalCurrency };

export default meta;
type Story = StoryObj<typeof DigitalCurrencyDigitalCurrency>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
