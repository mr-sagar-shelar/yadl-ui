import type { Meta, StoryObj } from "@storybook/react";
import AbsorbedIn from "../AbsorbedIn";

const meta: Meta<typeof AbsorbedIn> = { title: "unDraw/AbsorbedIn", component: AbsorbedIn };

export default meta;
type Story = StoryObj<typeof AbsorbedIn>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
