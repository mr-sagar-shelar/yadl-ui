import type { Meta, StoryObj } from "@storybook/react";
import NoData from "../NoData";

const meta: Meta<typeof NoData> = { title: "unDraw/NoData", component: NoData };

export default meta;
type Story = StoryObj<typeof NoData>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
