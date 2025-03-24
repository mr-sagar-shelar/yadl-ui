import type { Meta, StoryObj } from "@storybook/react";
import Regain_focusRegainFocus from "../Regain_focusRegainFocus";

const meta: Meta<typeof Regain_focusRegainFocus> = { title: "unDraw/Regain_focusRegainFocus", component: Regain_focusRegainFocus };

export default meta;
type Story = StoryObj<typeof Regain_focusRegainFocus>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
