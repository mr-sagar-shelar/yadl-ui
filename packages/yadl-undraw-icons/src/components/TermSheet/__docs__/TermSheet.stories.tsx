import type { Meta, StoryObj } from "@storybook/react";
import TermSheet from "../TermSheet";

const meta: Meta<typeof TermSheet> = { title: "unDraw/TermSheet", component: TermSheet };

export default meta;
type Story = StoryObj<typeof TermSheet>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
