import type { Meta, StoryObj } from "@storybook/react";
import ConferenceCall from "../ConferenceCall";

const meta: Meta<typeof ConferenceCall> = { title: "unDraw/ConferenceCall", component: ConferenceCall };

export default meta;
type Story = StoryObj<typeof ConferenceCall>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
