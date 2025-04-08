import type { Meta, StoryObj } from "@storybook/react";
import IntoTheNightIntoTheNight from "../IntoTheNightIntoTheNight";

const meta: Meta<typeof IntoTheNightIntoTheNight> = { title: "unDraw/IntoTheNightIntoTheNight", component: IntoTheNightIntoTheNight };

export default meta;
type Story = StoryObj<typeof IntoTheNightIntoTheNight>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
