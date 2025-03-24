import type { Meta, StoryObj } from "@storybook/react";
import Confirm from "../Confirm";

const meta: Meta<typeof Confirm> = { title: "unDraw/Confirm", component: Confirm };

export default meta;
type Story = StoryObj<typeof Confirm>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
