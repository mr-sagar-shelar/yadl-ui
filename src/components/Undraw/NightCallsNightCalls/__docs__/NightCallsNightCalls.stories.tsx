import type { Meta, StoryObj } from "@storybook/react";
import NightCallsNightCalls from "../NightCallsNightCalls";

const meta: Meta<typeof NightCallsNightCalls> = { title: "unDraw/NightCallsNightCalls", component: NightCallsNightCalls };

export default meta;
type Story = StoryObj<typeof NightCallsNightCalls>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
