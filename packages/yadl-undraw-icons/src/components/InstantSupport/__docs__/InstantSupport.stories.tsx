import type { Meta, StoryObj } from "@storybook/react";
import InstantSupport from "../InstantSupport";

const meta: Meta<typeof InstantSupport> = { title: "unDraw/InstantSupport", component: InstantSupport };

export default meta;
type Story = StoryObj<typeof InstantSupport>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
