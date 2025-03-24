import type { Meta, StoryObj } from "@storybook/react";
import DataExchange from "../DataExchange";

const meta: Meta<typeof DataExchange> = { title: "AWS/Analytics/DataExchange", component: DataExchange };

export default meta;
type Story = StoryObj<typeof DataExchange>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
