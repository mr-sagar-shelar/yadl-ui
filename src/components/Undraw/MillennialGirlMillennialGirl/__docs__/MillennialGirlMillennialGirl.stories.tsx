import type { Meta, StoryObj } from "@storybook/react";
import MillennialGirlMillennialGirl from "../MillennialGirlMillennialGirl";

const meta: Meta<typeof MillennialGirlMillennialGirl> = { title: "unDraw/MillennialGirlMillennialGirl", component: MillennialGirlMillennialGirl };

export default meta;
type Story = StoryObj<typeof MillennialGirlMillennialGirl>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
