import type { Meta, StoryObj } from "@storybook/react";
import DigitalTwins from "../DigitalTwins";

const meta: Meta<typeof DigitalTwins> = { title: "Azure/Iot/DigitalTwins", component: DigitalTwins };

export default meta;
type Story = StoryObj<typeof DigitalTwins>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
