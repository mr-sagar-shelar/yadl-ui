import type { Meta, StoryObj } from "@storybook/react";
import XmasSurpriseXmasSurprise from "../XmasSurpriseXmasSurprise";

const meta: Meta<typeof XmasSurpriseXmasSurprise> = { title: "unDraw/XmasSurpriseXmasSurprise", component: XmasSurpriseXmasSurprise };

export default meta;
type Story = StoryObj<typeof XmasSurpriseXmasSurprise>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
