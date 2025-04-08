import type { Meta, StoryObj } from "@storybook/react";
import NextOption from "../NextOption";

const meta: Meta<typeof NextOption> = { title: "unDraw/NextOption", component: NextOption };

export default meta;
type Story = StoryObj<typeof NextOption>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
