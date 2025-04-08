import type { Meta, StoryObj } from "@storybook/react";
import SignalSearching from "../SignalSearching";

const meta: Meta<typeof SignalSearching> = { title: "unDraw/SignalSearching", component: SignalSearching };

export default meta;
type Story = StoryObj<typeof SignalSearching>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
