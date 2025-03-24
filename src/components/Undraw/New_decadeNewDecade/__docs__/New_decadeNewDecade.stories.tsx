import type { Meta, StoryObj } from "@storybook/react";
import New_decadeNewDecade from "../New_decadeNewDecade";

const meta: Meta<typeof New_decadeNewDecade> = { title: "unDraw/New_decadeNewDecade", component: New_decadeNewDecade };

export default meta;
type Story = StoryObj<typeof New_decadeNewDecade>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
