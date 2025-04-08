import type { Meta, StoryObj } from "@storybook/react";
import ActiveOptions from "../ActiveOptions";

const meta: Meta<typeof ActiveOptions> = { title: "unDraw/ActiveOptions", component: ActiveOptions };

export default meta;
type Story = StoryObj<typeof ActiveOptions>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
